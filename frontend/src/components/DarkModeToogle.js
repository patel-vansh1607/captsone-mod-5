const DarkModeToggle = () => {
    const [darkmMode, setDarkMode] = useState(false);
    return(
        <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    )
}

export default DarkModeToggle;