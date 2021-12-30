import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allHashNodePost.edges.map(edge => (
          <li key={edge.node.title}>
            {edge.node.title}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}


export const query = graphql`
  query {
    allHashNodePost {
      edges {
        node {
          title
        }
      }
    }
  }
`

export default BlogPage