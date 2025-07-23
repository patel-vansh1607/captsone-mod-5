import { useEffect } from "react";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    }, [darkMode])
    
    return(
        <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    )
}

export default DarkModeToggle;