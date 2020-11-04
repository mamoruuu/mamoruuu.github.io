---
title: Hello World
date: 2019-04-15
path: /my-first-one
---

Hello, world! This is a demo post for `gatsby-theme-blog`.

```js
module.exports = {
  plugins: ["gatsby-theme-blog", "gatsby-theme-notes"],
}
```

This is another paragraph after the code block.

## This is a secondary heading

```jsx
import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "./theme"

export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)
```

Here's a `pre` tag:

<pre>hello!</pre>