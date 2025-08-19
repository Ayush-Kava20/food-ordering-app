import { useEffect, useState } from 'react';
import { fetchMealsApi } from '../services/api.js';
import MealItem from './MealItem.jsx';

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
    // console.log(loadedMeals);
  useEffect(() => {
    async function fetchMeal() {
      const meals = await fetchMealsApi();
      setLoadedMeals(meals);
    }
    fetchMeal();
  }, []);

  return (
    <ul className="meals w-[90%] max-w-[70rem] my-[2rem] mx-auto p-[1rem] flex flex-wrap gap-[1rem] justify-center">
      {loadedMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal}/>
      ))}
    </ul>
  );
}
