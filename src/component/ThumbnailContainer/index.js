import React, { Component } from "react";
import { Container, Jumbotron } from 'reactstrap';
import Modal from "../Modal";
import API from "../../utils/API"

class ThumbnailContainer extends Component {
    state = {
        images: []
    };

    // When this component mounts, pull the images from the json API
    componentDidMount() {
        this.getImages();
    }

    getImages = () => {
        API.get()
            .then(res =>
                //limit elements sent to state to 25
                this.setState({ images: res.data.slice(0, 25) })
            )
            .catch(err => console.log(err));
    }

    render() {
        return (<Container>
            <Jumbotron><h3>Click on the image to add a description!</h3></Jumbotron>
            <Modal images={this.state.images}></Modal>
        </Container>)
    };
}

export default ThumbnailContainer;