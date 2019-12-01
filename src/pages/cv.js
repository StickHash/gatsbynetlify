import React, { Component } from "react"
import Layout from "../components/layout"
import ImageCv from "../components/image-cv"

class Cv extends Component {
    render() {
        const data = this.props.data

        return (
            <Layout>
                <h1>Mon CV</h1>
                <ImageCv></ImageCv>
            </Layout>
        )
    }
}
export default Cv