const logoLight = 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743862412/logo-light_n9skq1.png';
const logoDark = 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743862413/logo-dark_i1hwxk.png';
const logoIcon = 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743862413/logo-icon_dnbxzf.png';
const logoGlow = 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743862444/logo-glow_ocyen2.png';
const logoWhite = 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743862413/logo-white_owive0.png';
const logoBlack = 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743862412/logo-black_wbilra.png';

export const Logos = {
  light: logoLight,
  dark: logoDark,
  icon: logoIcon,
  glow: logoGlow,
  white: logoWhite,
  black: logoBlack,
};

export type LogoVariant = keyof typeof Logos;