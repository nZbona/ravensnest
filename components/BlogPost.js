import React, { Component } from "react";

import {Box, Image, Grid, Text } from "grommet";

export default class BlogPost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid className="blog-post boxed-element-only-sides">
                
                {this.props.leftImage && 
                <Box className="restaurant-bottom-image-box facilities-image-box our-story-description-image-box blog-left-side-image-box" >
                    <Image
                        src={'/static/assets/Asset_22.png'}
                        className="asset"
                    />

                    <Image className="left-image" data-aos="fade-zoom-out" src={this.props.leftImage} />
                    {/* <Image
                        src={'/static/assets/Asset_1.png'}
                        className="mobile-asset to-be-hidden-desktop"
                    /> */}

                </Box>
                }
                <Text
                    className="text-box light-text"
                    dangerouslySetInnerHTML={{
                        __html: this.props.fieldEditor,
                    }}
                />
                {this.props.rightImage && 
                    <Box className="restaurant-bottom-image-box facilities-image-box our-story-description-image-box blog-right-side-image-box" >
                            <Image
                                src={'/static/assets/Asset_22.png'}
                                className="asset"
                            />

                        <Image
                            className="right-image"
                            data-aos="fade-zoom-out"
                            src={this.props.rightImage}
                        />
                            {/* <Image
                                src={'/static/assets/Asset_1.png'}
                                className="mobile-asset to-be-hidden-desktop"
                            /> */}

                        </Box>
                }

                {this.props.fullImage && <Image className="full-image" data-aos="fade-zoom-out" src={this.props.fullImage} /> }
            </Grid>
        );
    }
}
