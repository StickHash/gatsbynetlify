import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

class Homepage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <article key={node.slug}>
            <Link to={node.slug}>
              <h2 dangerouslySetInnerHTML={{ __html: node.title }} />
            </Link>
            <p><img class="article-img" src={node.featured_media.link} alt={node.featured_media.description} /></p>
            <strong dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </article>
        ))}
      </Layout>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          featured_media {
            link
            description
          }
        }
      }
    }
  }
`
