import { create } from 'zustand';
import { ThemeKey } from '../themes';

interface ThemeState {
  theme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'default',
  setTheme: (theme) => set({ theme }),
}));
