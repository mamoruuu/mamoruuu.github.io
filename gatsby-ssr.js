/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
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
    return props ? <Code {...props} /> : <pre {...preProps} />
  },
  wrapper: ({ children }) => <>{children}</>
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={{}}>
      {element}
    </ThemeProvider>
  </MDXProvider>
)