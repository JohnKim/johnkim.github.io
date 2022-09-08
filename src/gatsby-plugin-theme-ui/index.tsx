import { merge } from 'theme-ui'
import { transparentize } from '@theme-ui/color'
import { tailwind } from '@theme-ui/presets'

const theme = merge(tailwind, {
  initialColorModeName: `light`,
  config: {
    useCustomProperties: true,
  },
  colors: {
    text: `#191923`,
    primary: `#CAE72B`,
    secondary: `#EE1F60`,
    onPrimary: `#191923`,
    onSecondary: `#FFFFFF`,
    onSurface: `rgba(25, 25, 35, 0.38)`,
    toggleIcon: tailwind.colors.gray[8],
    heading: tailwind.colors.black,
    divide: `#9595b24d`,
    modes: {
      dark: {
        text: `rgba(255, 255, 255, 0.87)`,
        primary: `#D6F24A`,
        secondary: `#EE1F60`,
        onSurface: `rgba(255, 255, 255, 0.87)`,
        toggleIcon: tailwind.colors.gray[4],
        background: `#1A202C`,
        heading: tailwind.colors.white,
        divide: tailwind.colors.gray[8],
        muted: tailwind.colors.gray[8],
      },
    },
  },
  fonts: {
    body: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
  },
  fontSizes: [14, 16, 18, 20, 24, 30, 38, 48],
  styles: {
    root: {
      color: `text`,
      backgroundColor: `background`,
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
    },
    p: {
      fontSize: [1, 1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      '--baseline-multiplier': 0.179,
      '--x-height-multiplier': 0.35,
      wordBreak: `break-word`,
    },
    ul: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        '--baseline-multiplier': 0.179,
        '--x-height-multiplier': 0.35,
      },
    },
    ol: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        '--baseline-multiplier': 0.179,
        '--x-height-multiplier': 0.35,
      },
    },
    h1: {
      variant: `text.heading`,
      fontSize: [5, 6, 6, 7],
      mt: 4,
    },
    h2: {
      variant: `text.heading`,
      fontSize: [4, 5, 5, 6],
      mt: 4,
    },
    h3: {
      variant: `text.heading`,
      fontSize: [3, 4, 4, 5],
      mt: 4,
    },
    h4: {
      variant: `text.heading`,
      fontSize: [2, 3, 3, 4],
      mt: 3,
    },
    h5: {
      variant: `text.heading`,
      fontSize: [1, 2, 2, 3],
      mt: 3,
    },
    h6: {
      variant: `text.heading`,
      fontSize: 1,
      mb: 2,
    },
    blockquote: {
      borderLeftColor: `secondary`,
      borderLeftStyle: `solid`,
      borderLeftWidth: `6px`,
      mx: 0,
      pl: 4,
      p: {
        fontStyle: `italic`,
      },
    },
    a: {
      color: `secondary`,
      ':hover': { color: `heading` },
    },
    table: {
      width: `100%`,
      my: 4,
      borderCollapse: `separate`,
      borderSpacing: 0,
      // [[`th`, `td`]]: {
      //   textAlign: `left`,
      //   py: `4px`,
      //   pr: `4px`,
      //   pl: 0,
      //   borderColor: `muted`,
      //   borderBottomStyle: `solid`,
      // },
    },
    th: {
      verticalAlign: `bottom`,
      borderBottomWidth: `2px`,
      color: `heading`,
    },
    td: {
      verticalAlign: `top`,
      borderBottomWidth: `1px`,
    },
    hr: {
      mx: 0,
    },
  },
  layout: {
    container: {
      padding: [3, 4],
      maxWidth: `1024px`,
    },
  },
  text: {
    heading: {
      fontFamily: `heading`,
      //fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
  },
  links: {
    secondary: {
      color: `secondary`,
      textDecoration: `none`,
      ':hover': {
        color: `heading`,
        textDecoration: `underline`,
      },
      ':focus': {
        color: `heading`,
      },
    },
    listItem: {
      fontSize: [1, 2, 3],
      color: `text`,
    },
  },
})

export default theme
