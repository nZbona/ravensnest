import React, { Component } from "react";
import { Image, Box, Grid, Text } from "grommet";

import axios from "axios";

import MainWrapper from "../components/MainWrapper";
import wpURL from "../api_cfg";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gallery: "switch",
        };
    }
    static async getInitialProps(context) {
        const slug = "our-story"; //context.query.slug

        // Make request for posts.
        const pageData = await axios.get(wpURL + `wp/v2/pages?slug=${slug}`);
        const footerData = await axios.get(wpURL + `wp/v2/pages?slug=footer`);

        // Return our only item in array from response to posts object in props.
        return {
            page: pageData.data[0],
            footer: footerData.data[0],
        };
    }
    switchImage = () => {
        if (this.state.gallery == "image-1") {
            this.setState({ gallery: "image-2" });
        }

        if (this.state.gallery == "image-2") {
            this.setState({ gallery: "image-1" });
        }
    };
    render() {
        const { acf } = this.props.page;
        const { footer } = this.props;

        console.log(acf);

        return (
            <MainWrapper
                pageTitle="Raven's Nest"
                heroBanner={acf.hero_banner.url}
                footerData={footer.acf}>
                <Grid id="description-1" className="boxed-element-only-sides description">
                    <Box className="description-text">
                        <Text
                            className="light-text"
                            dangerouslySetInnerHTML={{
                                __html: acf.description_1_text,
                            }}
                        />
                    </Box>
                    <Box className="image-left-card image-gallery">
                        <Box className="image-box">
                            <Image fit="cover" src={acf.hero_banner.url} />
                            <Image fit="cover" src={acf.hero_banner.url} />
                            <Image fit="cover" src={acf.hero_banner.url} />
                            <Image fit="cover" src={acf.hero_banner.url} />

                            <Grid
                                className="buttons-gallery"
                                columns={["20%", "20%", "20%", "20%", "20%"]}>
                                <Box
                                    className={
                                        this.state.map == "around"
                                            ? "buy-now-brown"
                                            : "buy-now-color"
                                    }
                                    onClick={() => this.switchMap()}>
                                    1
                                </Box>

                                <Box className="gallery-button">2</Box>
                                <Box className="gallery-button">3</Box>
                                <Box className="gallery-button">4</Box>
                                <Box className="gallery-button">5</Box>
                            </Grid>
                        </Box>

                        <Box className="background-box">
                            <Image src={"/static/assets/Asset_5.png"} />
                        </Box>
                    </Box>
                </Grid>
            </MainWrapper>
        );
    }
}
