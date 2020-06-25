import React, { Component } from "react";

import { Box, Image, Grid } from "grommet";

export default class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentImageUrl: props.imagesArray[0]
        }
    }

    setImage(imgUrl) {
        this.setState({ currentImageUrl: imgUrl });
    }

    getButtons() {
        return this.props.imagesArray.map((imgUrl, idx) => {
            if (imgUrl == "empty" || this.props.imagesArray.length === 1) {
                return (<div key={idx}></div>);
            }
            return (
                <Box key={idx} onClick={() => this.setImage(imgUrl)} className="gallery-button">{idx + 1}</Box>
            )
        });
    }

    render() {

        return (
            <Box className="image-left-card image-gallery">
                <Box className="image-box">
                    <Image fit="cover" src={this.state.currentImageUrl} />
                    <Grid
                        className="buttons-gallery"
                        columns={['1fr', '1fr', '1fr', '1fr', '1fr']}
                    >
                        {this.getButtons()}
                    </Grid>
                </Box>

                <Box className="background-box">
                    <Image src={'/static/assets/Asset_5.png'} />
                </Box>
            </Box>
        )
    }
}