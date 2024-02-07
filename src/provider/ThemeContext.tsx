import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { Theme, ThemeType } from '../types/themesModel';
import { THEMES } from '../types/themeTypes';

type Props = {
  children: React.ReactNode;
};

type ThemeContextProps = {
  themeType: ThemeType;
  theme: Theme;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
};

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: 'dark',
  theme: THEMES.dark,
} as ThemeContextProps);

const currentTheme = localStorage.getItem('theme') || 'dark';

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(currentTheme as ThemeType);

  return (
    <ThemeContext.Provider
      value={{
        theme: THEMES[theme],
        themeType: theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
