export async function fetchMealsApi() {
  const response = await fetch('http://localhost:3000/meals');
  const json = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }

  return json;
}
