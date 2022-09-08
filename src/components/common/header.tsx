/** @jsx jsx */
import { Link } from 'gatsby'
import useSiteMetadata from 'hooks/use-site-metadata'
import { jsx, useColorMode, Flex, Divider } from 'theme-ui'
import ColorModeToggle from './colormode-toggle'

const Header = () => {
  const { title } = useSiteMetadata()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{ mb: [2, 2] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <Link
          to={`/`}
          aria-label={`${title} - Back to home`}
          sx={{ color: `heading`, textDecoration: `none` }}
        >
          <div sx={{ my: 0, fontWeight: `bold`, fontSize: [4, 5] }}>{title}</div>
        </Link>

        <div
          sx={{
            boxSizing: `border-box`,
            display: `flex`,

            //mt: 2,
            a: { textDecoration: `none`, color: `onSurface`, ':hover': { color: `heading` } },
            flexFlow: `wrap`,
          }}
        >
          <div sx={{ 'a:not(:first-of-type)': { ml: 3 }, fontSize: [1, 2], mr: 3 }}>
            <Link to={'/about'}>{'About'}</Link>
            <Link to={'/blog'}>{'Blog'}</Link>
          </div>

          <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
        </div>
      </Flex>
      <Divider sx={{ p: `0.001em` }} />
    </header>
  )
}

export default Header
