import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeButton = () => {
    const {
        isDarkMode,
        toggleTheme
    } = useContext(ThemeContext);
    const styles = {
        background: isDarkMode ? '#333' : '#fff',
        color: isDarkMode ? '#fff' : '#333',
        padding: '20px'
    }


    return (
        <div style={styles}>
            <h1>
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </h1>



            <button
                onClick={toggleTheme}>Toggle Theme
            </button>
        </div>
    )
}
export default ThemeButton;