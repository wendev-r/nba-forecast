import React, { createContext, useState } from 'react';

// Create the context
export const StatCategoryContext = createContext();

// Create the provider component
export const StatCategoryProvider = ({ children }) => {
    const [statCategory, setStatCategory] = useState('');

    return (
        <StatCategoryContext.Provider value={{ statCategory, setStatCategory }}>
            {children}
        </StatCategoryContext.Provider>
    );
};