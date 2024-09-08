
import { create } from 'zustand';

/*
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],  

  
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],  // Add new recipe to existing list
    })),

  / 
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;*/



const useRecipeStore = create((set) => ({
  recipes: [],
  
  addRecipe: (newRecipe) => 
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  
  updateRecipe: (updatedRecipe) => 
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  
  deleteRecipe: (recipeId) => 
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
}));

export default useRecipeStore;
