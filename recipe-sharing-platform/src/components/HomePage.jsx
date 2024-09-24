import React, { useState, useEffect } from 'react';
import data from '../data.json'; 


const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      setRecipes(data); // Replace with actual fetch if needed later
    }, []);
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-lg">{recipe.title}</h2>
              <p>{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default HomePage;
  