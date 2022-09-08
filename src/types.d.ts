type PostType = {
  slug: string
  title: string
  date?: string
  tags?: TagType[]
  description?: string
  body?: string
  excerpt: string
  timeToRead: number
  wordCount: number
  banner?: {
    childImageSharp: {
      resize: {
        src: string
      }
    }
  }
  tableOfContents?: {
    items?: ItemType[]
  }
}

type ItemType = {
  url: string
  title: string
  items?: ItemType[]
}

type TagType = {
  name: string
  slug: string
}

type PageType = {
  title
  slug
  banner?: {
    childImageSharp: {
      resize: {
        src: string
      }
    }
  }
}

type TagGroup = {
  name: string
  count: number
}

/**
 * gatsby-node.ts 에서 사용하는 Type
 */

// MDX 파일의 frontmatter 데이터 타입
type FrontmatterType = {
  title: string
  body: string
  description?: string
  slug?: string
  date?: string
  tags?: string[]
  defer?: boolean
  [key: string]: any
}

// MDX 파일의 frontmatter 데이터 타입
type CreatePagesQueryResultType = {
  allMdx: {
    nodes: {
      id: string
      slug: string
      source: 'blog-posts' | 'blog-pages'
      defer: boolean
      internal: {
        contentFilePath: string
      }
    }[]
  }
  tags: {
    group: {
      fieldValue: string
    }[]
  }
}
