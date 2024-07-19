import { useContext } from "react";
import ThemeContext from './ThemeContext'

const themeCard = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const styles = {
        background: isDarkMode ? '#444' : '#eee',
        color: isDarkMode ? '#fff' : '#333',
        padding: '20px',
        margin: '20px',
        borderRadius: '8px',
        boxShadow: isDarkMode ? '0 4px 8px rgba (255,255, 255, 0.1) ' : '0 4px 8px rgba(0, 0, 0, 0.1) ',
    }

    return (
        <div
            style={styles}>

            <h2>Themed Card</h2>
            <p>This is a simple themed card component .</p>
        </div>
    );

}
export default themeCard;