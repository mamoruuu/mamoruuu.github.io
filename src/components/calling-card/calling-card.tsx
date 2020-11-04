import React from "react"
import { fullName, summary, twitter, github } from '../../data/author.json'
import Avatar from "../avatar/avatar"
import styled from "styled-components"
import { SocialMedia, SocialMediaIcon, SocialMediaLink } from "../social-media"

const CardSocialMedia = styled(SocialMedia)`
  @media screen and (max-width: 767px) {
    justify-content: space-between;
  }
`

const CardSocialMediaLink = styled(SocialMediaLink)`
  @media screen and (min-width: 768px) {
    & + & {
      margin-left: 45px;
    }
  }
`

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

const FullName = styled.h1`
  font-size: 48px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 12px;

  @media screen and (max-width: 767px) {
    font-size: 32px;
    text-align: center;
  }
`

const Summary = styled.div`
  display: block;
  position: relative;
  max-width: 452px;
  width: 100%;
`

const SummaryText = styled.p`
  display: block;
  position: relative;
  max-width: 452px;
  width: 100%;
`

const AvatarWrap = styled.div`
  --size: 216px;
  width: var(--size);
  height: var(--size);
  margin-right: 45px;
  flex-shring: 0;

  @media screen and (max-width: 767px) {
    --size: 160px;
    margin: 0 0 23px;
  }
`

const CallingCard = () => {
  const twitterUrl = `https://twitter.com/${twitter.replace('@','')}`
  const githubUrl = `https://github.com/${github.replace('@','')}`

  return <>
    <Wrap>
      <AvatarWrap>
        <Avatar style={{
          width: '100%',
          height: '100%',
        }} />
      </AvatarWrap>
      <Summary>
        <FullName>{fullName}</FullName>
        <SummaryText>{summary}</SummaryText>

        <CardSocialMedia>
          <CardSocialMediaLink target="_blank" rel="nofollow noreferrer noopener" href={twitterUrl}>
            <SocialMediaIcon src={require('../../images/icons/twitter.svg')} alt="twitter" />
            <span>{twitter}</span>
          </CardSocialMediaLink>
          <CardSocialMediaLink target="_blank" rel="nofollow noreferrer noopener" href={githubUrl}>
            <SocialMediaIcon src={require('../../images/icons/github.svg')} alt="github" />
            <span>{github}</span>
          </CardSocialMediaLink>
        </CardSocialMedia>
      </Summary>
    </Wrap>
  </>
}

export default CallingCard
