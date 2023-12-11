import React, { Children, createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchProvider = () => {
  const [search, setSearch] = useState('');
  return <SearchContext.Provider value={{ search, setSearch }} />;
};

export default SearchProvider;
