"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    async function fetchMealIdeas(ingredient) {
        console.log(`Fetching meal ideas for ingredient: ${ingredient}`);
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        console.log('API response:', data);
        return data.meals;
    }

    async function fetchMealDetails(mealId) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        return data.meals[0];
    }

    async function loadMealIdeas() {
        if (ingredient) {
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas || []);
            setSelectedMeal(null); 
        }
    }

    async function handleMealClick(mealId) {
        const mealDetails = await fetchMealDetails(mealId);
        setSelectedMeal(mealDetails);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Meal Ideas for {ingredient}</h2>
            {!ingredient ? (
                <p className="text-gray-500">Select an item to see meal ideas.</p>
            ) : meals.length > 0 ? (
                <ul className="list-disc pl-5 space-y-2">
                    {meals.map((meal) => (
                        <li
                            key={meal.idMeal}
                            onClick={() => handleMealClick(meal.idMeal)}
                            className="cursor-pointer hover:text-blue-600"
                        >
                            {meal.strMeal}
                            {selectedMeal && selectedMeal.idMeal === meal.idMeal && (
                                <div className="mt-2">
                                    <img className="w-64 h-64 object-cover rounded-md" src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
                                    <h4 className="mt-4 text-lg font-semibold text-gray-700">Ingredients</h4>
                                    <ul className="list-disc pl-5 space-y-1 mt-2">
                                        {Object.keys(selectedMeal)
                                            .filter(key => key.startsWith("strIngredient") && selectedMeal[key])
                                            .map(key => (
                                                <li key={key} className="text-gray-600">{selectedMeal[key]}</li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No meal ideas found for {ingredient}.</p>
            )}
        </div>
    );
}
