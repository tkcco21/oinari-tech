const color = {
  background: {
    lightest: '#f8f8f8',
    lighter: '#f2f2f2',
    light: '#d9d9d9',
    darkest: '#072635',
  },
  border: {
    lighter: '#ededed',
    light: '#d9d9d9',
    dark: '#999',
    darker: '#595959',
    darkest: '#141414',
  },
  font: {
    default: '#333',
    dark: '#707070',
    light: '#a0a0a0',
    lightest: '#f5f6f8',
  },
  accent: {
    main: '#54b6e8', // テーマカラー
    sub: '#eb6ac0', // アクセントカラー
    caution: '#e8546d', // 注意カラー
    link: '#6ac2eb', // テキストリンクカラー
  },
  opacity: {
    loading: 0.5,
    hover: 0.8,
  },
}

const font = {
  size: {
    heading: {
      primary: '24px',
      secondary: '20px',
      tertiary: '18px',
      quaternary: '16px',
    },
    text: {
      primary: '18px',
      secondary: '16px',
      tertiary: '14px',
      quaternary: '12px',
    },
  },
  weight: {
    bold: 700,
    normal: 400,
  },
  space: {
    little: '0.02em',
    wide: '0.03em',
  },
}

const space = {
  _4px: '4px',
  _8px: '8px',
  _12px: '12px',
  _16px: '16px',
  _20px: '20px',
  _24px: '24px',
  _32px: '32px',
  _40px: '40px',
  _48px: '48px',
  _56px: '56px',
}

const width = {
  max: '920px',
  normal: '85%',
  wide: '95%',
}

export default { color, font, space, width }
