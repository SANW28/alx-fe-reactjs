import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; // Adjust the path if needed

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = () => {
      const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
      setRecipe(foundRecipe);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
          <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-1">{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Cooking Instructions:</h2>
          <p className="mb-4">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
