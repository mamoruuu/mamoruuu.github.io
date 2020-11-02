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
    margin-top: 40px;
  }
`

const Post: React.FC<Props> = ({ post }) => {
  const data = post.frontmatter
  return (
    <Article>
      <Header>
        <Title2>{data.title}</Title2>
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
