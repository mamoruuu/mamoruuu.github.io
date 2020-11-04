import React, { ReactNode } from "react"
import styled from 'styled-components'

import "./layout.css"
import CallingCard from "./calling-card/calling-card"
import Sidebar from "./sidebar/sidebar";
import { LocalStorageKey } from "../models/local-storage";

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
  private _canShowSidebar = !this.props.canShowCallingCard;
  private _callingCardRef = React.createRef<HTMLDivElement>();
  private _callingCardScreenRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    if (this.props.canShowCallingCard) {
      window.addEventListener('scroll', this.scrollEvent)
    }
  }

  componentWillUnmount() {
    if (this.props.canShowCallingCard) {
      window.removeEventListener('scroll', this.scrollEvent)
    }
  }

  /**
   * Toggles sidebar visibility depending on the visibility of callingCard
   */
  scrollEvent = () => {
    const currentScrollTop = document.documentElement.scrollTop
    const callingCard = this._callingCardRef.current    
    if (!callingCard) return
    const callingCardBottom = callingCard?.offsetTop + callingCard?.clientHeight
    const isAbleToHideSidebar = currentScrollTop < callingCardBottom + 30;
    if (isAbleToHideSidebar && this._canShowSidebar) {
      this._canShowSidebar = false;
      this.forceUpdate()
      localStorage.removeItem(LocalStorageKey.ScrolledCard);
    } else if (!isAbleToHideSidebar && !this._canShowSidebar) {
      this._canShowSidebar = true;
      this.forceUpdate()
      localStorage.setItem(LocalStorageKey.ScrolledCard, '1');
    }
  }

  render() {
    return (
      <>
        {this.props.canShowCallingCard && <CallingCardScreen ref={this._callingCardScreenRef}>
          <div ref={this._callingCardRef}>
            <CallingCard />
          </div>
        </CallingCardScreen>}
        {this._canShowSidebar && <Sidebar />}
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
