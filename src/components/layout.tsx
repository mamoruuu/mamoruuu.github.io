import React, { ReactNode } from "react"
import styled, { css, keyframes } from 'styled-components'

import "./layout.scss"
import CallingCard from "./calling-card/calling-card"
import Sidebar from "./sidebar/sidebar";
import pattern from '../images/pattern.svg';

interface Props {
  children: ReactNode
  canShowCallingCard?: boolean
}

interface CallingCardScreenProps {
  canSnow?: boolean;
}

const snowFall = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 500% 1000%;
  }
`

const CallingCardScreen = styled.section<CallingCardScreenProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 15px;

  ${props => props.canSnow && css`
    background-image: url(${pattern});
    background-size: 380px;
    background-repeat: repeat;
    box-shadow: 0 -60px 40px -20px var(--background-color) inset;
    animation: ${snowFall} 100s linear infinite;
  `}
`

const Content = styled.main`
  --footer-height: 68px;
  min-height: calc(100vh - var(--footer-height));
  padding: 200px 84px 40px;

  @media screen and (max-width: 480px) {
    padding: 25px 15px 30px;
    --footer-height: 40px;
  }
`

const Footer = styled.footer`
  text-align: center;
  padding-bottom: 50px;
  color: var(--copyright-color);
  font-size: 18px;
  line-height: 1;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    padding-bottom: 26px;
  }
`

const Container = styled.div`
  max-width: 1060px;
  margin: auto;
`

export default class Layout extends React.Component<Props> {
  render() {
    return (
      <>
        {this.props.canShowCallingCard && <CallingCardScreen canSnow={true}>
          <CallingCard />
        </CallingCardScreen>}
        <Sidebar />
        <Content id="content">
          <Container>
            {this.props.children}
          </Container>
        </Content>
        <Footer>&copy; {new Date().getFullYear()}</Footer>
      </>
    ) 
  }
}
