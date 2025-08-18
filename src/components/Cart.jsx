import { useContext } from 'react';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';
import { currencyFormater } from '../styles/formatting';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';
import CartItem from './CartItem';

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const carTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout(){
    userProgressCtx.showCheckout();
  }
  return (
    <Modal
      className="mx-auto my-auto"
      open={userProgressCtx.progress === 'cart'}
    >
      <h2 className="my-[1rem] ">Your cart</h2>
      <ul className="my-[0.5rem] p-0">
        {cartCtx.items.map((item) => (
          <CartItem
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="flex justify-end my-[2rem] text-[1.15rem] font-bold text-[#46443c]">
        {currencyFormater.format(carTotal)}
      </p>
      <p className="flex justify-end">
        <Button textOnly onClick={handleCloseCart} className='text-black'>
          Close
        </Button>
        {
            cartCtx.items.length > 0 &&  <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        }

      </p>
    </Modal>
  );
}
