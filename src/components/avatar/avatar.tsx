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
  border: 3px solid var(--color-pinky);
`

const Avatar: React.FC<Props> = ({ className, style }) => {
  const url = `https://github.com/${github.replace('@', '')}.png`
  return <>
    <Wrap style={style} className={className}>
      <Img src={url} />
    </Wrap>
  </>
}

export default Avatar