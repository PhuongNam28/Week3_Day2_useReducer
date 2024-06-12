import React, { useState,createContext } from 'react'
const ThemeContext = createContext();

function ThemeProvider({children}){
    const [theme, setTheme] = useState('dark')
    
    const toggleClick = () => {
       setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const value = {
        theme,
        toggleClick
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}
export {ThemeContext,ThemeProvider}