import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Footer, Title2, Header, UnderTitle } from '../components/post-styles'

interface Props {
  /** contains post's UUID */
  key: string
  post: any
}

const Article = styled.article`
  margin-left: -20px;
  width: calc(100% + 40px);
  border-radius: 20px;
  position: relative;

  > div {
    padding: 20px;
    background: var(--post-background);
    z-index: 2;
    border-radius: 17px;
  }

  &:focus-within::after {
    top: 10px;
    left: -10px;
  }

  & + & {
    margin-top: 40px;
  }
`

const Post: React.FC<Props> = ({ post }) => {
  const data = post.frontmatter
  return (
    <Article>
      <div>
        <Header>
          <Link to={'/' + data.slug}>
            <Title2>{data.title}</Title2>
          </Link>
          <UnderTitle>Published at {data.date} | {post.timeToRead} min of reading</UnderTitle>
        </Header>
        <p dangerouslySetInnerHTML={{ __html: post.excerpt }}>{}</p>
        <Footer>
          <Link to={'/' + data.slug}>Read more</Link>
        </Footer>
      </div>
    </Article>
  )
}

export default Post
