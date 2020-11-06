import React from 'react'
import Highlight, {defaultProps, Language} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'
import styled from 'styled-components'

interface Props {
  [prop: string]: any
  codeString: string
  language: Language
}

const Wrap = styled.div`
  --padding: 1.5em;
  margin-top: 30px;
  margin-left: calc(var(--padding) * -1);
  font-family: var(--font-mono);
  position: relative;

  @media screen and (max-width: 900px) {
    --padding: 15px;
    margin-left: 0;
  }
`

export const Pre = styled.pre`
  padding: var(--padding);
  width: calc(100% + var(--padding));
  position: relative;
  font-family: var(--font-mono);

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

const CodeLine = styled.code`
  font-family: var(--font-mono);
  display: block;
  padding: 0;
  line-height: 1.6;

  &::after {
    content: none;
  }
`

const LanguageMark = styled.span`
  position: absolute;
  z-index: 2;
  color: var(--color-white);
  top: 15px;
  right: 0;
  opacity: .3;

  @media screen and (max-width: 900px) {
    right: 20px;
  }
`

export const Code: React.FC<Props> = ({ codeString, language, ...props }) => (
  <Highlight
    {...defaultProps}
    code={codeString}
    language={language}
    theme={theme}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Wrap className="gatsby-highlight" data-language={language} {...props}>
        <LanguageMark>{language}</LanguageMark>
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <CodeLine {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })}/>
              ))}
            </CodeLine>
          ))}
        </Pre>
      </Wrap>
    )}
  </Highlight>
)