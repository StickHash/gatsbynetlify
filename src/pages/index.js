import React, { Component } from "react"
import { Link, graphql } from "gatsby"

class Homepage extends Component {
  render() {
    const data = this.props.data

    return (
      <>
        
        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
            </Link>
            <h3 dangerouslySetInnerHTML={{ __html: node.excerpt }}/>
          </div>
        ))}
      </>
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
        }
      }
    }
  }
`
