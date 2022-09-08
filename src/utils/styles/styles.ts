import type { ThemeUICSSObject } from 'theme-ui'

export const visuallyHidden: ThemeUICSSObject = {
  // include `px` so we can use it with `sx`
  border: 0,
  clip: `rect(0, 0, 0, 0)`,
  height: `1px`,
  margin: `-1px`,
  overflow: `hidden`,
  padding: 0,
  position: `absolute`,
  whiteSpace: `nowrap`,
  width: `1px`,
}

export const hoverUnderlineAnimation: ThemeUICSSObject = {
  display: `inline-block`,
  position: `relative`,
  color: `#0087ca`,

  '&:hover': {
    //content: ``,
    position: `absolute`,
    width: `100%`,
    transform: `scaleX(0)`,
    height: `2px`,
    bottom: 0,
    left: 0,
    backgroundColor: `#0087ca`,
    transformOrigin: `bottom right`,
    transition: `transform 0.25s ease-out`,
  },

  ':hover:after': {
    transform: `scaleX(1)`,
    transformOrigin: `bottom left`,
  },
}
