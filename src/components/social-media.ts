import styled from "styled-components"

interface SocialMediaProps {
  direction?: 'column' | 'row'
  mobileDirection?: 'column' | 'row'
}

export const SocialMediaIcon = styled.img`
  display: block;
  width: 30px;
  height: 30px;
  object-fit: contain;
  margin-bottom: 0;
`

export const SocialMediaLink = styled.a`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  display: inline-flex;
  align-items: center;
  color: var(--color-pinky);
`

export const SocialMedia = styled.div<SocialMediaProps>`
  display: flex;
  flex-direction: ${props => props.direction ?? 'row'};
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media screen and (max-width: 480px) {
    width: auto;
  }

  ${SocialMediaIcon} {
    margin: 0;
    margin-right: ${props => props.direction === 'column' ?  null : '6px'}
  }

  ${SocialMediaLink} + ${SocialMediaLink} {
    margin-top: ${props => props.direction === 'column' ? '13px' : null};
    margin-left: ${props => props.direction === 'row' ? '15px' : null};
  }

  @media screen and (max-width: 480px) {
    flex-direction: ${props => props.mobileDirection ?? null};
    
    ${SocialMediaLink} + ${SocialMediaLink} {
      margin-top: ${props => props.mobileDirection === 'column' ? '13px' : 0};
      margin-left: ${props => props.mobileDirection === 'row' ? '15px' : 0};
    }
  }
`
