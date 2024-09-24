import React from 'react';
import { Link } from 'react-router-dom'; 
import recipesData from '../data.json'; 

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipesData.map((recipe) => (
          <div key={recipe.id} className="border rounded-lg p-4 shadow-md">
            <img src={recipe.image} alt={recipe.title} className="w-full h-auto mb-4 rounded-lg" />
            <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
              View Recipe Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
