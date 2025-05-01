export const themes = {
  default: {
    name: 'Default',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    primaryColor: '#007bff',
  },
  transplant: {
    name: 'Organ Transplant',
    backgroundColor: '#e3fcec',
    textColor: '#034d21',
    primaryColor: '#28a745',
  },
  cosmetic: {
    name: 'Cosmetic Surgery',
    backgroundColor: '#fff0f6',
    textColor: '#87005a',
    primaryColor: '#ff69b4',
  },
  surgery: {
    name: 'General Surgery',
    backgroundColor: '#f0f8ff', 
    textColor: '#0f4b6e', 
    primaryColor: '#ff6347', 
  },
  transplantation: {
    name: 'Liver Transplant',
    backgroundColor: '#f5f5dc', 
    textColor: '#3e4a59', 
    primaryColor: '#8b0000', 
  },
  heart: {
    name: 'Heart Surgery',
    backgroundColor: '#ffe4e1', 
    textColor: '#b22222', 
    primaryColor: '#ff1493', 
  },
  neurology: {
    name: 'Neurology Surgery',
    backgroundColor: '#dcdcdc', 
    textColor: '#00008b', 
    primaryColor: '#4682b4', 
  },
  orthopedic: {
    name: 'Orthopedic Surgery',
    backgroundColor: '#f0e68c', 
    textColor: '#8b4513', 
    primaryColor: '#a52a2a', 
  },
} as const;

export type ThemeKey = keyof typeof themes;
export type Theme = typeof themes[ThemeKey];
