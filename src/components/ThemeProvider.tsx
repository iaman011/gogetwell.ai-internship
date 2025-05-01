import React, { useEffect, ReactNode } from 'react';
import { useThemeStore } from '../store/themeStore';
import { themes } from '../themes';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useThemeStore((state) => state.theme);
  const selectedTheme = themes[theme]; // ✅ now properly typed

  useEffect(() => {
    document.body.style.backgroundColor = selectedTheme.backgroundColor;
    document.body.style.color = selectedTheme.textColor;
  }, [selectedTheme]);

  return <div style={{ padding: '1rem' }}>{children}</div>;
};
