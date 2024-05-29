/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';


const UserPreferencesContext = createContext();

export const UserPreferencesProvider = ({ children }) => {
  const [diet, setDiet] = useState([]);
  const [allergies, setAllergies] = useState([]);

  const addOrRemove = (list, setList, item) => {
    setList(list.includes(item) ? list.filter(x => x !== item) : [...list, item]);
  };

  return (
    <UserPreferencesContext.Provider value={{ diet, setDiet, allergies, setAllergies, addOrRemove }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserPreferences = () => useContext(UserPreferencesContext);

