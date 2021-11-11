import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#222D81', // New
  secondary: '#2E3E5C', // Gray
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#eff2f5',
  gray: '#8b9097',
  appTheme: '#3511A3',
  appBackgroundColor: '#fff',
  appTextColor: '#101010',
  light: '#EDEDEB',
  darkgray: '#797788',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 12,
  paddingHome: 16,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};


export const FONTS = {
  AvenirBlack: Platform.select({
    ios:'Avenir-Black',
    android:'AvenirLTStd-Black'
  }),
  AvenireBook: Platform.select({
    ios:'Avenir-Book',
    android:'AvenirLTStd-Book'
  }),
  AvenirRoman: Platform.select({
    ios:'Avenir-Book',
    android:'AvenirLTStd-Book'
  }),
};


const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;