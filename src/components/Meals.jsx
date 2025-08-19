import { useEffect, useState } from 'react';
import useHttp from '../services/api.js';
import MealItem from './MealItem.jsx';
import Error from './ui/Error.jsx';

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    error,
    isLoading,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p>Fetching the data.......</p>;
  }

  if (error) {
    return <Error title="Failed to fething the data" message={error} />;
  }

  return (
    <ul className="meals w-[90%] max-w-[70rem] my-[2rem] mx-auto p-[1rem] flex flex-wrap gap-[1rem] justify-center">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
