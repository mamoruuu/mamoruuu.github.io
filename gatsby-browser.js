/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import { ThemeProvider } from "styled-components"
import {preToCodeBlock} from 'mdx-utils'
import {Code} from './src/components/code'

// You can delete this file if you're not using it

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    }
    return <pre {...preProps} />
  },
  wrapper: ({ children }) => (<>{children}</>)
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={{}}>
      {element}
    </ThemeProvider>
  </MDXProvider>
)