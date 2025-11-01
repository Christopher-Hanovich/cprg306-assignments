"use client";

import React, { useState, useEffect } from "react";

/**
 * Fetch meal ideas from TheMealDB filter API by ingredient.
 * Returns an array of meal objects or an empty array on failure.
 */
export async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
      ingredient
    )}`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Meal API response not ok", response.status);
      return [];
    }
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("fetchMealIdeas error:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const results = await fetchMealIdeas(ingredient);
    setMeals(results);
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    } else {
      setMeals([]);
    }
  }, [ingredient]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Meal Ideas {ingredient ? `for "${ingredient}"` : ""}</h2>

      {meals.length === 0 ? (
        <p className="text-gray-500">No meals found.</p>
      ) : (
        <ul className="list-disc pl-6 space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="flex items-center space-x-3">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-12 h-12 rounded-md object-cover" />
              <span className="font-medium">{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
