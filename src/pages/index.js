import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="FloripaJS • A maior comunidade front-end de Florianópolis" />
    {/* <h1>A maior comunidade front-end de Florianópolis</h1> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
