import React from "react";
import Avatar from "../avatar/avatar";

import { twitter, github } from '../../data/author.json'
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
  justify-content: space-between;
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

    return <Wrap>
      {this._isAtMainPage
        ? <span tabIndex={0} onClick={() => this.scrollUp()} style={{ cursor: 'pointer' }}>
            <Avatar style={{ width: '54px', height: '54px' }} />
          </span>
        : <Link to="/">
            <Avatar style={{ width: '54px', height: '54px' }} />
          </Link>
      }

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
