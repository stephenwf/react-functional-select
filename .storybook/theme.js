import { create, color, themes } from '@storybook/theming';

const _colorDarker = '#282c34';
const _colorDarkest = '#1D2027';
const _colorPrimary = '#fc929e';   //pinkish-red-salmon
const _colorSecondary = '#f5b83d'; // golden-yellow (PrettyPrintJson.tsx header)
const _colorPrimaryOpacity = 'rgba(252, 146, 158, 0.675)';

export default create({
  base: 'dark',

  // Base theme colors
  colorPrimary: _colorSecondary,
  colorSecondary: _colorPrimaryOpacity,

  // UI
  appBorderRadius: 0,
  appBg: _colorDarkest,
  appBorderColor: '#535353',
  appContentBg: _colorDarker,

  // Text colors
  textColor: '#fff',
  textInverseColor: 'rgba(255, 255, 255, 0.95)',

  // Toolbar default and active colors
  barBg: _colorDarkest,
  barTextColor: color.medium,
  barSelectedColor: _colorPrimary,

  // Form colors
  inputBorderRadius: 4,
  inputBg: themes.light.inputBg,
  inputBorder: themes.light.inputBorder,
  inputTextColor: themes.light.inputTextColor,

  brandUrl: 'https://based-ghost.github.io/react-functional-select/',
});