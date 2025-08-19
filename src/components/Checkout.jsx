import { useContext } from 'react';
import CartContext from '../store/CartContext';
import Modal from './UI/Modal';
import Button from './UI/Button';
import { currencyFormater } from '../styles/formatting';
import Input from './UI/Input';
import UserProgressContext from '../store/UserProgressContext';

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const carTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  function handleClose(){
    userProgressCtx.hideCheckout();
  }

  return <Modal open={ userProgressCtx.progress === 'checkout'}   className="mx-auto my-auto">
    <form >
        <h2>
            Checkout
        </h2>
        <p>
            Total Amount: {currencyFormater.format(carTotal)}
        </p>

        <Input label='Full Name' type='text' id='full-name'/>
        <Input label='E-Mail Address' type='email' id='email'/>
        <Input label='Street' type='text' id='street'/>

        <div className='flex justify-items-start gap-[1rem]'>
            <Input label='Postal Code' type='text' id='postal-code'/>
            <Input label='City' type='text' id='city'/>
        </div>

        <p className='flex justify-end gap-[1rem]'>
            <Button type='button' onClick={handleClose}>Close</Button>
            <Button>Submit Order</Button>
        </p>
    </form>
  </Modal>
}
