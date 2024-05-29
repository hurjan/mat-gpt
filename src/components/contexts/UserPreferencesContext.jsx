/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const UserPreferencesContext = createContext();

export const UserPreferencesProvider = ({ children }) => {
  const [diet, setDiet] = useState([]);
  const [allergies, setAllergies] = useState([]);

  // Correctly defining addOrRemove to use a setter function
  const addOrRemove = (list, item, setList) => { // Note the inclusion of setList here
    if (list.includes(item)) {
      setList(list.filter(x => x !== item)); // Remove item if it exists
    } else {
      setList([...list, item]); // Add item if it doesn't exist
    }
  };

  return (
    <UserPreferencesContext.Provider value={{ diet, setDiet, allergies, setAllergies, addOrRemove }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserPreferences = () => useContext(UserPreferencesContext);


