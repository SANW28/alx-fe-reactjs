// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '', // State for the search term
  filteredRecipes: [], // State for filtered recipes
  
  // Action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  // Action to filter recipes based on the search term
  filterRecipes: () => 
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) => 
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;

