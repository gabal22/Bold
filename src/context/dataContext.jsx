import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [tab, setTab] = useState('today');
  const [filters, setFilter] = useState([])

  const custom = { 
    tab,
    setTab,
    filters,
    setFilter
  }

  return (
    <DataContext.Provider value={custom}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { DataProvider, useData };