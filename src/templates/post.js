import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }}/>
        <p><img src={post.featured_media.link} alt={post.featured_media.description}/></p>
        <div dangerouslySetInnerHTML={{ __html: post.content }}/>
      </div>
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