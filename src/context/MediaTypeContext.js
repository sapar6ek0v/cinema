import React, { createContext, useContext, useState } from 'react';

export const MediaTypeContext = createContext();
export const useMediaTypeContext = () => useContext(MediaTypeContext);

const MediaTypeProvider = ({ children }) => {
  const [mediaType, setMediaType] = useState('movie');

  return (
    <MediaTypeContext.Provider value={{ mediaType, setMediaType }}>{children}</MediaTypeContext.Provider>
  );
};

export default MediaTypeProvider;
