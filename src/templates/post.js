import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import ReactHtmlParser from 'react-html-parser';

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <div>
          <h1>{ReactHtmlParser(post.title)}</h1>
          <p><img class="post-img" src={post.featured_media.link} alt={post.featured_media.description} /></p>
          <div>{ReactHtmlParser(post.content)}</div>
        </div>
      </Layout>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        link
        description
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`