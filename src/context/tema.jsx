import { createContext } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(null);

    return (
        <>
            <ThemeContext.Provider value={{ theme }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}