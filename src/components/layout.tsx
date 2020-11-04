import React, { ReactNode } from "react"
import styled from 'styled-components'

import "./layout.css"
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
  min-height: calc(100vh - 68px);
  padding: 120px 84px 40px;
`

const Footer = styled.footer`
  text-align: center;
  padding-bottom: 50px;
  color: #AAAAAA;
  font-size: 18px;
  line-height: 1;
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
