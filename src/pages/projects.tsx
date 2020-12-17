import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import { Title1, Title2 } from "../components/post-styles"
import SEO from "../components/seo"

const Heading = styled(Title1)`
  font-size: 56px;
`

const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  list-style: none;
  margin: 50px 0 0;
  padding: 0;
  grid-gap: 15px 60px;
`

const Project = styled.li`
  margin: 0;
`

const Tags = styled.ul`
  margin: -5px;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
`

const Tag = styled.li`
  display: inline-flex;
  padding: 4px 12px;
  margin: 5px;
  background-color: #F181CB;
  color: var(--color-whitest);
  border-radius: 25px;
`

interface SiteProps {
  icon: 'repo' | 'globe'
}

const Site = styled.a<SiteProps>`
  display: block;
  text-decoration: underline;
  margin: 0 0 20px;
`

const HistogramWrap = styled.div`
  display: flex;
  flex-directon: row;
  align-items: center;
  margin-bottom: 40px;
`

enum Lang {
  JS = 'Javascript',
  TS = 'Typescript',
  HTML = 'HTML',
  CSS = 'CSS',
  PHP = 'PHP'
}

interface HistogramLineProps {
  width?: number
  lang: Lang
}

const langColors: { [l in Lang]: string } = {
  [Lang.JS]: 'yellow',
  [Lang.TS]: 'blue',
  [Lang.HTML]: 'orange',
  [Lang.CSS]: 'lightblue',
  [Lang.PHP]: 'purple'
}

const HistogramLine = styled.div<HistogramLineProps>`
  display: inline-flex;
  background-color: ${props => langColors[props.lang] ?? 'red'};
  flex-basis: ${({ width }) => width ? `${width}%` : 'auto'};
  height: 10px;
  border-radius: 10px;
  position: relative;

  &:after {
    content: "${props => props.lang ?? ''}";
    display: block;
    position: relative;
    margin-top: 10px;
    font-size: 14px;
  }

  &:last-child:not(:first-child):after {
    margin-left: auto;
  }

  & + & {
    margin-left: 10px;
  }
`

interface HistogramProps {
  data: [Lang, number][]
}

const Histogram: React.FC<HistogramProps> = ({ data }) => <HistogramWrap>
  {data?.map(([lang, share]) => <HistogramLine width={share} lang={lang} />)}
</HistogramWrap>

const ProjectsPage = () => (
  <Layout canShowCallingCard={false}>
    <SEO title="My own favorite projects" />
    <header>
      <Heading>My projects I'm proud of</Heading>
    </header>

    <ProjectsList>
      <Project>
        <Title2>node-instasocket</Title2>
        <p>Node.js version of my Websocket based Instagram Sync Server</p>

        <Histogram data={[
          [Lang.JS, 85],
          [Lang.HTML, 15]
        ]} />
        <Tags>
          <Tag>instagram-api</Tag>
          <Tag>instagram</Tag>
          <Tag>nodejs</Tag>
          <Tag>websocket</Tag>
        </Tags>
      </Project>
      <Project>
        <Title2>vscode-fish-text</Title2>
        <p>Russian alternative to "lorem ipsum" for Visual Studio Code</p>
        <Histogram data={[
          [Lang.TS, 100]
        ]} />
      </Project>
      <Project>
        <Title2>speech-code</Title2>
        <p>Russian alternative to "lorem ipsum" offline</p>
        <Site href="https://mamoruuu.github.io/speech-code/" target="_blank" icon="globe">mamoruuu.github.io/speech-code</Site>
        <Histogram data={[
          [Lang.JS, 80],
          [Lang.HTML, 15],
          [Lang.CSS, 5]
        ]} />
        <Tags>
          <Tag>russian</Tag>
          <Tag>russian-specific</Tag>
          <Tag>lorem</Tag>
          <Tag>loremru</Tag>
          <Tag>lorem-ipsum-generator</Tag>
        </Tags>
      </Project>
    </ProjectsList>
  </Layout>
)

export default ProjectsPage
