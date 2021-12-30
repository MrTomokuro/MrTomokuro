import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allHashNodePost.edges.map(edge => (
          <article key={edge.node.slug}>
            <h2> {edge.node.title}</h2>
            <p>Posted: {edge.node.dateAdded}</p>
            {/* <MDXRenderer> */}
              {edge.node.contentMarkdown}
            {/* </MDXRenderer> */}
          </article>
        ))
      }
    </Layout>
  )
}


export const query = graphql`
query  {
  allHashNodePost(sort: {fields: dateAdded, order: DESC}) {
    edges {
      node {
        title
        coverImage {
          # File node (to be used with gatsby-plugin-image)
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
          # OR
          # url // "https://cdn.hashnode.com/...
        }
        slug
        dateAdded
        contentMarkdown
        brief
      }
    }
  }
}
`

export default BlogPage