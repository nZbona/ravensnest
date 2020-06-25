import React, { Component, Fragment } from 'react';
import Gallery from '../components/Gallery';

import { Box, Image, Grid, Text, Button, Heading } from 'grommet';

export default class LocationPage extends Component {
    // Props: heroBanner, infoCardTitle, infoCardText, wideText, imagesArray
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Box
                    id="helpful"
                    className="boxed-element left-side-content helpful"
                >
                    <Grid
                        rows={'570px'}
                        columns="full"
                        className="grid-box-reverse"
                    >
                        <Box
                            className="image-box"
                            style={{ top: '6px', left: '40%' }}
                        >
                            <Image
                                data-aos="fade-zoom-out"
                                fit="cover"
                                src={this.props.infoCardImage}
                            />
                        </Box>
                        <Box
                            className="content-box info-card-left reserve"
                            // style={{"top": "-50px", "left": "10%"}}
                        >
                            <Heading
                                dangerouslySetInnerHTML={{
                                    __html: this.props.infoCardTitle
                                }}
                                level="2"
                            />
                            <Image
                                style={{ marginBottom: '44px' }}
                                src={'/static/assets/Asset_4.png'}
                                className="break-line-asset"
                            />
                            <Text
                                className="light-text"
                                dangerouslySetInnerHTML={{
                                    __html: this.props.infoCardText
                                }}
                            />
                        </Box>
                        <Box className="background-box bckg-2">
                            <Grid columns={['21%']}>
                                <Image
                                    src={'/static/assets/Asset_8.png'}
                                    className="column-asset"
                                    style={{
                                        marginLeft: '14%',
                                        marginTop: '26%'
                                    }}
                                />
                            </Grid>
                        </Box>
                    </Grid>
                </Box>

                <Box
                    className="boxed-element-no-sides "
                    style={{ color: '#7c5e49' }}
                >
                    <Grid
                        columns={['65%', '35%']}
                        className="boxed-element-only-sides terms gallery-grid"
                    >
                        <Box id="general-terms ">
                            <Text
                                style={{
                                    paddingRight: '3%',
                                    lineHeight: '36px',
                                    fontSize: '27px'
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: this.props.wideText
                                }}
                            />
                        </Box>

                        <Gallery imagesArray={this.props.imagesArray} />
                    </Grid>
                    <Box className="back boxed-element-only-sides">
                        <Button
                            label="BACK TO MAP"
                            className="buy-now-color back-to-map"
                            style={{ marginTop: '3.5vw' }}
                        />
                    </Box>
                </Box>
            </Fragment>
        );
    }
}
