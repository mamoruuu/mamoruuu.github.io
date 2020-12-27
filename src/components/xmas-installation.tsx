import React from "react"
import styled, { createGlobalStyle, keyframes } from "styled-components"

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
</Installation>

export default XmasInstallation