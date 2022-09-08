/** @jsx jsx */
import { Badge, jsx } from 'theme-ui'
import { Fragment } from 'react'
import { Link } from 'gatsby'

type TagsProps = {
  tags: TagType[]
}

const ItemTags = ({ tags }: TagsProps) => {
  return (
    <Fragment>
      {tags &&
        tags.map(
          (tag, i) =>
            tag && (
              <Fragment key={tag.slug}>
                {!!i && ` `}
                <Link sx={t => ({ ...t.styles?.a })} to={`/tags/${tag.slug}`}>
                  <Badge
                    sx={{
                      px: 3,
                      py: 1,
                      mr: 2,
                      fontSize: 2,
                      backgroundColor: 'secondary',
                      letterSpacing: `0.003em`,
                      borderRadius: `8px`,
                    }}
                  >
                    {tag.name}
                  </Badge>
                </Link>
              </Fragment>
            ),
        )}
    </Fragment>
  )
}

export default ItemTags
