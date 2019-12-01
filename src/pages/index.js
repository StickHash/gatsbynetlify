import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import ReactHtmlParser from 'react-html-parser';

class Homepage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <h2>Posts</h2>
        {data.allWordpressPost.edges.map(({ node }) => (
          <article key={node.slug}>
            <Link to={node.slug}>
              <h3>{ReactHtmlParser(node.title)}</h3>
            </Link>
            <p><img class="article-img" src={node.featured_media.link} alt={node.featured_media.description} /></p>
            <strong>{ReactHtmlParser(node.excerpt)}</strong>
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
