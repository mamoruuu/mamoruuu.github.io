import React, { ReactNode } from "react"
import styled from 'styled-components'

import "./layout.scss"
import CallingCard from "./calling-card/calling-card"
import Sidebar from "./sidebar/sidebar";

interface Props {
  children: ReactNode
  canShowCallingCard?: boolean
}

const CallingCardScreen = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 15px;
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
        {this.props.canShowCallingCard && <CallingCardScreen>
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
