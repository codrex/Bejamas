import Typography from 'typography';
import themeAlton from 'typography-theme-alton';

themeAlton.overrideThemeStyles = () => {
  return {
    a: {
      boxShadow: `none`
    },
    'h1, h2': {
      'font-weight': 600,
      'letter-spacing': 0,
      color: 'var(--text-color)'
    },
    p: {
      lineHeight: 2,
      marginBottom: '34px'
    }
  };
};

const theme = {
  ...themeAlton,
  headerFontFamily: ['Montserrat', ' sans-serif'],
  bodyFontFamily: ['Montserrat', ' sans-serif']
};

const typography = new Typography({ ...theme });

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
