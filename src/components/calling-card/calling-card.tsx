import React from "react"
import { fullName, summary, twitter, github } from '../../data/author.json'
import Avatar from "../avatar/avatar"
import styled from "styled-components"
import { SocialMedia, SocialMediaIcon, SocialMediaLink } from "../social-media"

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const FullName = styled.h1`
  font-size: 48px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 12px;
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

const CallingCard = () => {
  const twitterUrl = `https://twitter.com/${twitter.replace('@','')}`
  const githubUrl = `https://github.com/${github.replace('@','')}`

  return <>
    <Wrap>
      <Avatar style={{
        width: '216px',
        height: '216px',
        marginRight: '45px',
      }} />
      <Summary>
        <FullName>{fullName}</FullName>
        <SummaryText>{summary}</SummaryText>

        <SocialMedia>
          <SocialMediaLink target="_blank" rel="nofollow noreferrer noopener" href={twitterUrl}>
            <SocialMediaIcon src={require('../../images/icons/twitter.svg')} alt="twitter" />
            <span>{twitter}</span>
          </SocialMediaLink>
          <SocialMediaLink style={{ marginLeft: '45px' }} target="_blank" rel="nofollow noreferrer noopener" href={githubUrl}>
            <SocialMediaIcon src={require('../../images/icons/github.svg')} alt="github" />
            <span>{github}</span>
          </SocialMediaLink>
        </SocialMedia>
      </Summary>
    </Wrap>
  </>
}

export default CallingCard
