import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStore';

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function ThemeProvider(props: {
  children: React.ReactNode;
}): JSX.Element {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // 1 manual choice stored

    // 2 no manual choice + system has defined:
    if (window.matchMedia('prefers-colors-schema: dark').matches) {
      setDarkMode(true);
    }
    // document.documentElement.classList.toggle('dark');
  }, []);

  function toggleDarkMode() {
    if (darkMode) {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
      // useStore()
    } else if (!darkMode) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }

  const contextValue: ThemeContextType = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}
