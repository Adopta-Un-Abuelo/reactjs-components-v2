import { create } from '@storybook/theming';
import Color from '../src/constants/Color';

export default create({
  base: 'light',
  colorSecondary: Color.background.primary,
  fontBase: '"Poppins", sans-serif',
  textColor: Color.text.full,

  brandTitle: 'reactjs-components-v2',
  brandUrl: 'https://adoptaunabuelo.org',
  brandImage: 'https://adoptaunabuelo.org/wp-content/uploads/2020/08/AdoptaUnAbuelo-logo.svg',
});