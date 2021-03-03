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
    background: var(--background-color);
    position: relative;
    z-index: 2;
  }

  & + & {
    margin-top: 40px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin-left: 0;
  }

  &::after,
  &::before {
    content: '';
    z-index: 0;
    display: block;
    position: absolute;
    width: 45px;
    height: 45px;
    transition: .25s ease;
    opacity: .3;
  }

  &::before {
    top: -2px;
    left: -2px;
    background-image: var(--cool-gradient-bottom);
  }

  &::after {
    bottom: -2px;
    right: -2px;
    background-image: var(--cool-gradient-bottom);
  }

  &:hover {
    &::after,
    &::before {
      width: calc(100% + 4px);
      height: calc(100% + 4px);
    }
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
        <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
        <Footer>
          <Link to={'/' + data.slug}>Read more</Link>
        </Footer>
      </div>
    </Article>
  )
}

export default Post
