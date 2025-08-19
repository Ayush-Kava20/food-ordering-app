import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext)

  function handleShowCart(){
    userProgressCtx.showCart();
  }

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item)=>{
    return totalNumberOfItems + item.quantity
  }, 0)

  return (
    <header className="flex justify-between items-center py-[2rem] px-[8%]">
      <div className="title flex gap-[1rem] items-center">
        <img
          src={logo}
          alt="food logo"
          className="w-[4rem] h-[4rem] object-contain border border-[#ffc404] rounded-[50%]"
        />
        <h1 className="font-bold text-[2rem] m-0 text-[#ffc404] tracking-[0.2rem] uppercase ">
          React Food
        </h1>
      </div>
      <nav>
        <Button className="text-[1.3rem]" textOnly={true} onClick={handleShowCart}>Cart ( {totalCartItems} )</Button>
      </nav>
    </header>
  );
}
