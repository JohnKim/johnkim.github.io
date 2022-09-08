/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Box, useColorMode, get } from 'theme-ui'
import { Link } from 'gatsby'
import ItemTags from 'components/blog/item-tags'
import { hoverUnderlineAnimation } from 'utils/styles/styles'

type BlogListItemProps = {
  post: PostType
}

const BlogListItem = ({ post }: BlogListItemProps) => {
  const [colorMode] = useColorMode()
  const hoverColor = colorMode === `dark` ? 'colors.secondary' : 'colors.primary'

  return (
    <Box mb={4}>
      <Link
        to={`${post.slug}`}
        sx={t => ({
          textDecoration: 'none',
          fontSize: [2, 3, 4],
          color: `text`,
          //verticalAlign: `top`,

          backgroundImage: `linear-gradient(transparent 40%, ${get(t, hoverColor)} 40%)`,
          backgroundSize: `auto 180%`,
          transition: `background 0.1s ease-in-out`,

          '&:hover': {
            backgroundPositionY: `100%`,
            color: `heading`,
          },
        })}
      >
        {post.title}
        {post.description && <p sx={{ my: 2, fontSize: [1, 1, 2] }}>{post.description}</p>}
      </Link>

      <p sx={{ color: `onSurface`, mt: 1, fontSize: [1, 1, 2] }}>
        <time>{post.date}</time>
      </p>
      {post.tags && (
        <Fragment>
          <ItemTags tags={post.tags} />
        </Fragment>
      )}
    </Box>
  )
}

export default BlogListItem
