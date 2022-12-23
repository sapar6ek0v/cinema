import React, { createContext, useContext, useState } from 'react';

export const LanguageContext = createContext();
export const useLanguageContext = () => useContext(LanguageContext);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru');

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
