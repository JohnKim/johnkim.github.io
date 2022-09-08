/** @jsx jsx */
import { ReactNode, Fragment } from 'react'
import { Global } from '@emotion/react'
import { Container, jsx, get } from 'theme-ui'

import Header from 'components/common/header'
import Footer from 'components/common/footer'
import SkipNavLink from 'components/common/skip-nav'

type LayoutProps = { children: ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <Fragment>
    <Global
      styles={t => ({
        '*': {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        '[hidden]': {
          display: `none`,
        },
        '::selection': {
          backgroundColor: get(t, `colors.text`),
          color: get(t, `colors.background`),
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
      })}
    />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  </Fragment>
)

export default Layout
