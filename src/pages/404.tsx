import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout canShowCallingCard={false}>
    <SEO title="404 - Not found" />
    <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness :(</p>
        <Link to="/">Go to main page</Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
