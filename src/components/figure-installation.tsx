import React from 'react'
import styled, { css, keyframes } from 'styled-components'

interface FigureProps {
  left?: number | string;
  right?: number | string;
  top?: number | string;
  bottom?: number | string;
  color?: string
  size?: number;
  width?: number;
  height?: number;
  rotate?: number;
  animate?: boolean;
}

const float = ({ rotate }: Pick<FigureProps, 'rotate'>) => keyframes`
  0% {
    transform: translateY(0%) ${rotate && `rotate(${rotate}deg)`};
  }
  50% {
    transform: translateY(-10%) ${rotate && `rotate(${rotate}deg)`};
  }
  100% {
    transform: translateY(0%) ${rotate && `rotate(${rotate}deg)`};
  }
`

const getRandomNumber = () => Math.random() * 10

const Figure = styled.div<FigureProps>`
  display: block;
  position: absolute;
  z-index: -2;
  ${({ top }) => top !== undefined && `top: ${isNaN(top as number) ? top : top + 'px'};`}
  ${({ bottom }) => bottom !== undefined && `bottom: ${isNaN(bottom as number) ? bottom : bottom + 'px'};`}
  ${({ left }) => left !== undefined && `left: ${isNaN(left as number) ? left : left + 'px'};`}
  ${({ right }) => right !== undefined && `right: ${isNaN(right as number) ? right : right + 'px'};`}
  ${({ color }) => color && `background-color: ${color};`}
  ${({ size, width, height }) => (size || width || height) && `width: ${width ?? size}px; height: ${height ?? size}px;`}
  ${({ rotate }) => `transform: ${rotate && `rotate(${rotate}deg)`};`}
  ${({ animate, rotate }) => animate && css`animation: ${float({ rotate })} 10s ease-in-out ${getRandomNumber}s infinite both`};
`

interface GradientFigureProps {
  gradient?: 'to top' | 'to right' | 'to bottom' | 'to left' | 'to right top' | 'to left top' | 'to right bottom' | 'to left bottom'
}

const Round = styled(Figure)<GradientFigureProps>`
  border-radius: 1000px;
  background-image: linear-gradient(${props => props.gradient ?? 'to right bottom'}, transparent, #ffffff42);
`

const Cube = styled(Figure)<GradientFigureProps>`
  background-image: linear-gradient(${props => props.gradient ?? 'to left top'}, transparent, #ffffff42);
`

const DotsGrid = styled(Figure)<{ dotSize?: number }>`
  background-color: transparent;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${props => props.dotSize ?? '20'}" height="${props => props.dotSize ?? '20'}"><circle cx="${props => (props.dotSize && props.dotSize / 2) ?? '10'}" cy="${props => (props.dotSize && props.dotSize / 2) ?? '10'}" r="${props => (props.dotSize && props.dotSize / 10 * 3) ?? '6'}" fill="${props => props.color ?? 'red'}" /></svg>');
  background-repeat: repeat;
`

const FigureInstallation = () => <>
  <Round color={'#943566'} left={'5%'} top={'12%'} size={250} animate={true} />
  <Cube color={'#0831d1'} right={'7%'} bottom={'20%'} size={180} rotate={15} animate={true} />
  <Cube color={'rgba(25, 25, 112, .5)'} left={'15%'} bottom={'10%'} width={450} height={250} animate={true} gradient={'to left bottom'} />
  <DotsGrid top={'16%'} right={'10%'} size={120} color={'lightseagreen'} />
  <DotsGrid bottom={'18%'} left={'4%'} height={90} width={360} dotSize={45} color={'yellow'} />
</>

export default FigureInstallation
