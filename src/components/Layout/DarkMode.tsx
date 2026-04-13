import { useState, useEffect } from 'react';
import '../../styles/layout/darkMode.css';

export function ThemeSelector() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <button 
            onClick={() => setDarkMode(!darkMode)}
            className='modeButton'
        >
            {darkMode ? '🌙' : '☀️'}
        </button>
    );
}