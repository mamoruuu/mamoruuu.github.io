import React from "react";
import Avatar from "../avatar/avatar";

import { twitter, github, fullName } from '../../data/author'
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
    background-color: var(--sidebar-mobile-background);
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
  background: var(--sidebar-line-background);
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
              <text x="0" y="16" fill="var(--sidebar-fullname-color)" transform="rotate(-90 0,0)">{fullName}</text>
            </svg>
          </Name>
        </SmallCallingCard>

        <Line />

        <SocialMedia direction="column" mobileDirection="row">
          <SocialMediaLink href={twitterUrl}>
            <SocialMediaIcon src={require('../../images/icons/twitter.svg')} alt="twitter" />
          </SocialMediaLink>
          <SocialMediaLink href={githubUrl}>
            <SocialMediaIcon src={require('../../images/icons/github.svg')} alt="github" />
          </SocialMediaLink>
        </SocialMedia>
      </Aside>
    </StickyWrap>
  }
}
