import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Footer, Title2, Header, UnderTitle } from '../post-styles'

interface Props {
  /** contains post's UUID */
  key: string
  post: any
}

const Article = styled.article`
  & + & {
    margin-top: 30px;
    border-top: 2px solid var(--color-dark);
    padding-top: 30px;
  }
`

const Post: React.FC<Props> = ({ post }) => {
  const data = post.frontmatter
  return (
    <Article>
      <Header>
        <Link to={data.path}>
          <Title2>{data.title}</Title2>
        </Link>
        <UnderTitle>Published at {data.date} | {post.timeToRead} min of reading</UnderTitle>
      </Header>
      <p dangerouslySetInnerHTML={{ __html: post.excerpt }}>{}</p>
      <Footer>
        <Link to={data.path}>Read more</Link>
      </Footer>
    </Article>
  )
}

export default Post
