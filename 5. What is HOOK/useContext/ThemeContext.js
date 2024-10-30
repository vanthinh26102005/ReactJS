import { useState, createContext } from "react"

const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const value = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={value}> 
            {/* wrap */}
            {children} 
        </ThemeContext.Provider>

    )
}
export { ThemeContext, ThemeProvider }