import React from 'react';

import { ThemeProvider } from '@mui/material';

import { DEFAULT_THEME, LOCALE_DEFAULT, THEME, ThemesMap } from '@/constants';
import { Theme, ThemeMode, ThemeName } from '@/types';

type GlobalThemeContextType = {
  theme: Theme;
  themeName: ThemeName;
  setThemeName: (name: ThemeName) => void;
  themeMode: ThemeMode;
  toggleThemeMode: () => void;
  locale: string;
  setLocale: (locale: string) => void;
};

const GlobalThemeContext = React.createContext<GlobalThemeContextType>({
  theme: ThemesMap[DEFAULT_THEME],
  themeName: DEFAULT_THEME,
  setThemeName: () => {},
  themeMode: THEME.LIGHT_MODE_THEME,
  toggleThemeMode: () => {},
  locale: LOCALE_DEFAULT,
  setLocale: () => {},
});

export const GlobalThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const initialThemeName = (localStorage.getItem('themeName') as ThemeName) || DEFAULT_THEME;

  const [themeName, setThemeNameState] = React.useState<ThemeName>(initialThemeName);

  const [theme, setTheme] = React.useState<Theme>(() => {
    return ThemesMap[initialThemeName] || ThemesMap[DEFAULT_THEME];
  });

  const [themeMode, setThemeMode] = React.useState<ThemeMode>(
    () => (localStorage.getItem('themeMode') as ThemeMode) || THEME.LIGHT_MODE_THEME,
  );

  // Locale state
  const [locale, setLocaleState] = React.useState<string>(() => {
    return localStorage.getItem('locale') || LOCALE_DEFAULT;
  });

  // Handlers
  const setThemeName = React.useCallback((name: ThemeName) => {
    const selected = ThemesMap[name];
    if (!selected) return;
    setThemeNameState(name);
    setTheme(selected);
    localStorage.setItem('themeName', name);
  }, []);

  const toggleThemeMode = React.useCallback(() => {
    const next =
      themeMode === THEME.LIGHT_MODE_THEME ? THEME.DARK_MODE_THEME : THEME.LIGHT_MODE_THEME;
    setThemeMode(next);
    localStorage.setItem('themeMode', next);
  }, [themeMode]);

  const setLocale = React.useCallback((locale: string) => {
    setLocaleState(locale);
    localStorage.setItem('locale', locale);
  }, []);

  const muiTheme = React.useMemo(() => {
    if (themeMode === 'dark' && theme.dark) {
      return theme.dark;
    }
    return theme.light;
  }, [theme, themeMode]);

  return (
    <GlobalThemeContext.Provider
      value={{ theme, themeName, setThemeName, themeMode, toggleThemeMode, locale, setLocale }}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </GlobalThemeContext.Provider>
  );
};

export const useGlobalThemeContext = () => React.useContext(GlobalThemeContext);
