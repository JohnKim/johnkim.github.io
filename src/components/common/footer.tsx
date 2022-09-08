/** @jsx jsx */
import { jsx, Link } from 'theme-ui'
import useSiteMetadata from 'hooks/use-site-metadata'

const Footer = () => {
  const { title } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `onSurface`,
        a: {
          color: `onSurface`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {title}. All rights reserved.
      </div>
      <div>
        by
        {` `}
        <Link
          href="/about"
          sx={{
            fontWeight: `bold`,
            fontSize: [1, 2],
          }}
        >
          John Kim
        </Link>
      </div>
    </footer>
  )
}

export default Footer
