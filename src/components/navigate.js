import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"


class Navigate extends Component {
    render() {
        const page = this.props.data
        return(
            <nav>

            </nav>
        )
    }
}

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          slug
        }
      }
    }
    allSitePage(filter: {pluginCreator: {name: {eq: "gatsby-plugin-page-creator"}}, id: {nin: "SitePage /404/"}}) {
        edges {
          node {
            id
            pluginCreator {
              id
            }
            path
          }
        }
    }
}
`