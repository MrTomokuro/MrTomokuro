import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allHashNodePost.edges.map(edge => (
          <article key={edge.node.slug}>
            <h2> 
              <a href={`${data.site.siteMetadata.blogUrl}/${edge.node.slug}`} target="_blank" rel="noopener noreferrer">{edge.node.title}</a>
            </h2>
            <p>Posted: {edge.node.dateAdded}</p>
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
        brief
      }
    }
  }
  site {
    siteMetadata {
      blogUrl
    }
  }
}
`

export default BlogPage