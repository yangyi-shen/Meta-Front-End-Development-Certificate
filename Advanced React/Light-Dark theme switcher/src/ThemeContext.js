import { createContext, useContext, useState } from "react";
const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

    function toggleTheme() {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

  return (
    <ThemeContext.Provider 
        value={{
            theme, 
            toggleTheme: toggleTheme
        }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// const ThemeContext = createContext(undefined);

// export const ThemeProvider = ({ children }) => {
//  const [theme, setTheme] = useState("light");

//  return (
//    <ThemeContext.Provider
//      value={{
//        theme,
//        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
//      }}
//    >
//      {children}
//    </ThemeContext.Provider>
//  );
// };

// export const useTheme = () => useContext(ThemeContext);
