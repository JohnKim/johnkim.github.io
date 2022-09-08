/** @jsx jsx */
import { jsx } from 'theme-ui'
import BlogListItem from './blog-list-item'

type BlogListProps = {
  posts: PostType[]
  className?: string
}

const BlogList = ({ posts, className = `` }: BlogListProps) => (
  <section sx={{ mb: [5, 6, 7] }} className={className}>
    {posts.map(post => (
      <BlogListItem key={post.slug} post={post} />
    ))}
  </section>
)

export default BlogList
