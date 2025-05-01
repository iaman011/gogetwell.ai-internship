import { themes } from '../../../themes';
import { useThemeStore } from '../../../store/themeStore';

const themeKeys = [
  'default',
  'transplant',
  'cosmetic',
  'surgery',
  'transplantation',
  'heart',
  'neurology',
  'orthopedic',
] as const;

type ThemeKey = typeof themeKeys[number];

const themeDescriptions: Record<ThemeKey, string> = {
  default: 'A simple and clean theme for general use, perfect for standard layouts.',
  transplant: 'Represents hope and recovery with teal and green shades to symbolize renewal.',
  cosmetic: 'Uses soft pinks to evoke a sense of elegance and care for cosmetic surgeries.',
  surgery: 'A professional theme with blue tones to suggest precision and trust, ideal for general surgery.',
  transplantation: 'Earthy tones that represent hope and new beginnings, symbolizing the critical nature of liver transplants.',
  heart: 'Soft rose tones paired with bold pinks to represent vitality and life-saving heart surgeries.',
  neurology: 'A theme inspired by neurology surgery, with calming grey tones and blues to convey professionalism and precision in brain and nervous system treatments.',
  orthopedic: 'Designed for orthopedic surgery, using earthy tones to represent strength, stability, and healing in musculoskeletal care.',
};

export const Themes = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Select a Theme</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {themeKeys.map((key) => {
          const value = themes[key];
          return (
            <div
              key={key}
              className={`w-64 p-4 rounded-lg transition-all border-2 ${
                theme === key ? 'border-black' : 'border-gray-300'
              }`}
            >
              <h3 className="text-lg font-semibold text-center mb-2">{value.name}</h3>
              <p className="text-center text-sm">
                Primary Color:{' '}
                <span style={{ color: value.primaryColor }} className="font-medium">
                  {value.primaryColor}
                </span>
              </p>
              <button
                onClick={() => setTheme(key)}
                className="w-full mt-4 py-1 border rounded-md font-semibold hover:bg-gray-100 text-black"
              >
                Apply Theme
              </button>
              <p className="mt-4 text-sm italic text-gray-600 text-justify">
                {themeDescriptions[key]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
