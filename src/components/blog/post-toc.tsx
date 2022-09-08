/** @jsx jsx */
import React, { Fragment } from 'react'
import { Divider, jsx } from 'theme-ui'
import { Link } from 'gatsby'
import useScroll from 'hooks/use-scroll'

type PostTocProps = {
  items: ItemType[]
  articleOffset: number
}

const offsetTopFixed = 100

const PostToc = ({ items, articleOffset }: PostTocProps) => {
  const { y } = useScroll()

  return (
    <div
      sx={{
        ...(y < articleOffset - offsetTopFixed
          ? {
              position: 'absolute',
              top: articleOffset,
            }
          : {
              position: 'fixed',
              top: `${offsetTopFixed}px`,
            }),
        left: '85%',
        '@media (max-width: 1410px)': {
          display: 'None',
        },
      }}
    >
      <Divider sx={{ mh: 0 }} />
      <nav
        sx={{
          color: `secondary`,
        }}
      >
        {items.map((item: ItemType) => {
          return <TreeComponent item={item} key={item.url} />
        })}
      </nav>
      <Divider sx={{ mh: 0 }} />
    </div>
  )
}

export default PostToc

type TreeComponentProps = {
  item: ItemType
  depth?: number
}
const TreeComponent = ({ item, depth = 0 }: TreeComponentProps) => (
  <Fragment>
    <Link
      to={`${item.url}`}
      title={item.title}
      sx={t => ({
        ...t.styles?.a,
        fontSize: ['12px'],
        color: `secondary`,
        ':hover': { color: `heading` },
      })}
    >
      <div sx={{ marginLeft: depth * 3 }}> {item.title} </div>
    </Link>
    {item.items &&
      item.items.map((child: ItemType) => {
        return <TreeComponent item={child} depth={depth + 1} key={child.url} />
      })}
  </Fragment>
)
