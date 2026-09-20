import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    bg: '#0d0d0d',
    surface: '#1a1a1a1a',
    text: '#ffffff',
    textDim: '#888888',
    lime: '#aaff00',

    //요일별 네온 컬러
    mon: '#ff4444',
    tue: '#ff8800',
    wed: '#f9f073',
    thu: '#00ffb0',
    fri: '#00e5ff',
    sat: '#0088ff',
    sun: '#bb44ff',
  },
  font: {
    body: "'Mona Sans', sans-serif",
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  radius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
  },
});
