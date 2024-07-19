import { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
    // create state
    const [
// 
        isDarkMode,
        setIsDarkMode
    ] = useState(false);
// 
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const contextValue = {
        isDarkMode,
        toggleTheme,
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;