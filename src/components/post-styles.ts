import styled from "styled-components"

export const PostContainer = styled.div`
  max-width: 990px;
  width: 100%;
  display: block;
  position: relative;
  margin: 0 auto;
`

export const Header = styled.div`
  display: block;
  margin-bottom: 30px;
`

const titleStyles = `
  margin: 0 0 10px;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;
  text-align: left;
`

export const Title1 = styled.h1`
  ${titleStyles}
`

export const Title2 = styled.h2`
  ${titleStyles}
`

export const UnderTitle = styled.div`
  font-size: 11px;
  line-height: 13px;
`

export const Footer = styled.footer`
  margin-top: 15px;
`
