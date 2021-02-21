import React from 'react'
import styled from 'styled-components'
import { github } from '../../data/author'

interface Props {
  className?: string;
  style?: { [cssProp: string]: string | number };
  size?: number;
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
  background-color: var(--background-color);
`

const GradientWrap = styled.div`
  padding: 3px;
  border-radius: 100%;
  background-image: var(--avatar-border);
  height: 100%;
`

const Avatar: React.FC<Props> = ({ className, style, size = 210 }) => {
  const url = new URL(`https://github.com/${github.replace('@', '')}.png`)
  if (size) {
    url.searchParams.append('size', size.toString());
  }
  return <>
    <Wrap style={style} className={className}>
      <GradientWrap>
        <Img src={url.toString()} />
      </GradientWrap>
    </Wrap>
  </>
}

export default Avatar