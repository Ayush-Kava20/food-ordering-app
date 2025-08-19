import { currencyFormater } from '../styles/formatting.js'
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import { useContext } from 'react';

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  
  function handleAddMealToCart(){
    cartCtx.addItem(meal)
  }

  return (
    <li
      key={meal.id}
      className="w-[21rem] h-auto bg-[#1d1a16] rounded-[1rem]"
    >
      <article className="flex flex-col justify-between">
        <img
          src={`http://localhost:3000/${meal.image}`}
          alt={meal.name}
          className="w-full h-[20rem] object-cover rounded-t-[1rem] "
        />
        <div className="px-4 h-[9rem]">
          <h3 className="text-[1.5rem] font-bold my-[0.75rem]">{meal.name}</h3>
          <p className="">{meal.description}</p>
        </div>

        <div className="flex px-4 my-5 justify-between items-center">
          <p className="px-[1rem] py-[0.3rem] bg-[#312c1d] rounded-[0.2rem] text-[#ffc404] font-semibold text-[1rem]">
            {currencyFormater.format(meal.price)}
          </p>
          <p>
            <Button onClick = { handleAddMealToCart }>Add to cart</Button>
          </p>
        </div>
      </article>
    </li>
  );
}
