import { rgba } from 'polished';
import { create, color, themes } from '@storybook/theming';

const _colorDarker = '#282c34';
const _colorDarkest = '#1D2027';
const _colorPrimary = '#fc929e';   //pinkish-red-salmon
const _colorSecondary = '#FAC863'; // golden-yellow

export default create({
  base: 'dark',

  // Base theme colors
  colorPrimary: _colorSecondary,
  colorSecondary: rgba(_colorPrimary, 0.65),

  // UI
  appBorderRadius: 4,
  appBg: _colorDarkest,
  appBorderColor: '#535353',
  appContentBg: _colorDarker,

  // Text colors
  textColor: '#fff',
  textInverseColor: rgba('#fff', 0.9),

  // Toolbar default and active colors
  barBg: _colorDarkest,
  barTextColor: color.medium,
  barSelectedColor: _colorPrimary,

  // Form colors
  inputBorderRadius: 4,
  inputBg: themes.light.inputBg,
  inputBorder: themes.light.inputBorder,
  inputTextColor: themes.light.inputTextColor,

  brandUrl: 'https://example.com'
});