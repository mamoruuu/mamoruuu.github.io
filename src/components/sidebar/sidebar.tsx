import React from "react";
import Avatar from "../avatar/avatar";

import { twitter, github, fullName } from '../../data/author.json'
import { SocialMedia, SocialMediaIcon, SocialMediaLink } from "../social-media";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrap = styled.aside`
  width: 84px;
  padding: 15px 15px 35px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
`

const Name = styled.span`
  display: flex;
  flex-shrink: 0;
  direction: rtl;
  margin: 15px 0;
  font-size: 18px;
  line-height: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Line = styled.span`
  display: block;
  flex-grow: 1;
  height: max-content;
  width: 1px;
  background: #222;
  margin: 0 0 20px;
`

const AvatarWrap = styled.span`
  display: block;
  position: relative;
  width: fit-content;
  cursor: pointer;
`

export default class Sidebar extends React.Component {
  scrollUp(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  private _isAtMainPage = window.location.pathname === '/'

  render() {
    const twitterUrl = `https://twitter.com/${twitter.replace('@','')}`
    const githubUrl = `https://github.com/${github.replace('@','')}`

    const avatarSet = [
      <Avatar key={0} style={{ width: '54px', height: '54px' }} />,
      <Name key={1}>
        <svg height="165" width="20">
          <text x="0" y="16" fill="#222222" transform="rotate(-90 0,0)">{fullName}</text>
        </svg>
      </Name>
    ]

    return <Wrap>
      {this._isAtMainPage
        ? <AvatarWrap tabIndex={0} onClick={() => this.scrollUp()}>
            {avatarSet}
          </AvatarWrap>
        : <Link to="/">
            {avatarSet}
          </Link>
      }

      <Line />

      <SocialMedia style={{ flexDirection: 'column' }}>
        <SocialMediaLink href={twitterUrl}>
          <SocialMediaIcon src={require('../../images/icons/twitter.svg')} alt="twitter" />
        </SocialMediaLink>
        <SocialMediaLink href={githubUrl} style={{ marginTop: '13px' }}>
          <SocialMediaIcon src={require('../../images/icons/github.svg')} alt="github" />
        </SocialMediaLink>
      </SocialMedia>
    </Wrap>
  }
}
