import React from "react";
import Avatar from "../avatar/avatar";

import { twitter, github, fullName } from '../../data/author.json'
import { SocialMedia, SocialMediaIcon, SocialMediaLink } from "../social-media";
import styled from "styled-components";
import { Link } from "gatsby";

const StickyWrap = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;

  @media screen and (min-width: 481px) {
    height: 0;
  }
`

const Aside = styled.aside`
  width: 84px;
  padding: 15px 15px 35px;
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: auto;

  @media screen and (max-width: 480px) {
    flex-direction: row;
    height: auto;
    width: 100%;
    padding: 7px;
    background-color: var(--color-white);
  }
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

  @media screen and (max-width: 480px) {
    display: none;
  }
`

const Line = styled.span`
  display: block;
  flex-grow: 1;
  height: max-content;
  width: 1px;
  background-image: var(--cool-gradient-top);
  margin: 0 0 20px;
  
  @media screen and (max-width: 480px) {
    display: none;
  }
`

const SmallCallingCard = styled(Link)`
  display: block;
  position: relative;
  width: fit-content;
  cursor: pointer;
`

const SidebarAvatar = styled(Avatar)`
  --size: 54px;
  width: var(--size);
  height: var(--size);
  @media screen and (max-width: 480px) {
    --size: 35px;
  }
`

const SidebarSocialMedia = styled(SocialMedia)`
  @media screen and (min-width: 481px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    width: auto;
  }
`

const SidebarSocialIcon = styled(SocialMediaIcon)`
  margin: 0;
`

const SidebarSocialLink = styled(SocialMediaLink)`
  margin-top: 13px;
  @media screen and (max-width: 480px) {
    margin-top: 0;
    margin-right: 15px;
  }
`

export default class Sidebar extends React.Component {
  scrollUp(): void {
    if (typeof window !== "undefined") {
      window?.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  render() {
    const twitterUrl = `https://twitter.com/${twitter.replace('@','')}`
    const githubUrl = `https://github.com/${github.replace('@','')}`

    return <StickyWrap>
      <Aside>
        <SmallCallingCard to="/#">
          <SidebarAvatar />
          <Name>
            <svg height="165" width="20">
              <text x="0" y="16" fill="#222222" transform="rotate(-90 0,0)">{fullName}</text>
            </svg>
          </Name>
        </SmallCallingCard>

        <Line />

        <SidebarSocialMedia className="sidebar__sm">
          <SidebarSocialLink className="sidebar__sm-link" href={twitterUrl}>
            <SidebarSocialIcon className="sidebar__sm-icon" src={require('../../images/icons/twitter.svg')} alt="twitter" />
          </SidebarSocialLink>
          <SidebarSocialLink className="sidebar__sm-link" href={githubUrl}>
            <SidebarSocialIcon className="sidebar__sm-icon" src={require('../../images/icons/github.svg')} alt="github" />
          </SidebarSocialLink>
        </SidebarSocialMedia>
      </Aside>
    </StickyWrap>
  }
}
