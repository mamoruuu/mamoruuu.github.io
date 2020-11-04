import React from 'react'
import styled from 'styled-components'
import { github } from '../../data/author.json'

interface Props {
  className?: string;
  style?: { [cssProp: string]: string | number }
}

const Wrap = styled.figure`
  margin: 0;
  padding: 0;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
  margin-bottom: 0;
  padding: 2px;
  background-color: #fff;
`

const GradientWrap = styled.div`
  padding: 3px;
  border-radius: 100%;
  background-image: var(--cool-gradient-right);
  height: 100%;
`

const Avatar: React.FC<Props> = ({ className, style }) => {
  const url = `https://github.com/${github.replace('@', '')}.png`
  return <>
    <Wrap style={style} className={className}>
      <GradientWrap>
        <Img src={url} />
      </GradientWrap>
    </Wrap>
  </>
}

export default Avatar