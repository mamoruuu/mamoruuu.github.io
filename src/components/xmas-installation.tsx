import React from "react"
import styled, { createGlobalStyle, keyframes } from "styled-components"

const Trees = styled.div`
  width:100%;
  position: absolute;
  height: 300px;
  z-index: -2;
  background-image: url(${require('../images/trees.svg')});
  background-repeat: repeat-x;
  background-position: bottom;
  opacity: 1;
  bottom: 0;
  left: 0;
  right: 0;

  @media (max-width: 560px) {
    height: 240px;
    background-size: 540px;
  }
`

const Mountains = styled.img`
  position: absolute;
  z-index: -3;
  left: 0;
  bottom: 0;
  opacity: .6;
  width: 250px;
  transform: scaleX(-1);

  @media (max-width: 560px) {
    width: 210px;
  }
`

const Town = styled.img`
  position: absolute;
  z-index: -1;
  right: 0;
  bottom: -25px;
  width: 400px;

  @media (max-width: 560px) {
    display: none;
  }
`

const snowFall = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 500% 1000%;
  }
`

const Installation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${require('../images/pattern.svg')});
    background-size: 380px;
    background-repeat: repeat;
    animation: ${snowFall} 100s linear infinite;
    z-index: 1;
  }
`

const GlobalStyleOverride = createGlobalStyle`
  @media (prefers-color-scheme: dark) {
    html:root {
      --background-color: var(--color-night-blue);
    }
  }
`

const XmasInstallation = () => <Installation>
  <GlobalStyleOverride />
  <Trees />
  <Mountains src={require('../images/mountain.svg')} />
  <Town src={require('../images/town2.svg')} />
</Installation>

export default XmasInstallation