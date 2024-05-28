import React, { createContext, useContext, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// Create the context
export const RecipeContext = createContext();

// Provider component
export function RecipeProvider({ children }) {
  const location = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);

  const [queryParams, setQueryParams] = useState({
    query: searchParams.get('query') || '',
    userId: searchParams.get('userId') || '',
    cookingTime: searchParams.get('cookingTime') || '',
    servings: searchParams.get('servings') || ''
  });

  const setRecipeParams = (params) => {
    setQueryParams(params);
  };

  return (
    <RecipeContext.Provider value={{ queryParams, setRecipeParams }}>
      {children}
    </RecipeContext.Provider>
  );
}

// Custom hook to use the RecipeContext
export const useRecipeContext = () => useContext(RecipeContext);
