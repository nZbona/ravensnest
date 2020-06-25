import MainWrapper from '../components/MainWrapper';
import React, { Component } from 'react';
import axios from 'axios';
import wpURL from '../api_cfg';
import { Image, Box, Grid, Heading, Video, Text, Button } from 'grommet';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMobile: '',
        };
    }
    componentDidMount() {

        this.verifyIfMobile();
        this.listener = window.addEventListener('resize', this.verifyIfMobile);

    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.listener);
    }

    verifyIfMobile = () => {

        if(window.innerWidth < 769){
            this.setState({isMobile: true});
        }else{
            this.setState({isMobile: false});
        }
    
    } 
    static async getInitialProps(context) {
        const slug = 'accommodation_restaurant'; //context.query.slug

        // Make request for posts.
        const pageData = await axios.get(wpURL + `wp/v2/pages?slug=${slug}`);
        const footerData = await axios.get(wpURL + `wp/v2/pages?slug=footer`);

        // Return our only item in array from response to posts object in props.
        return {
            page: pageData.data[0],
            footer: footerData.data[0]
        };
    }

    render() {
        const { acf } = this.props.page;
        const { footer } = this.props;
        return (
            <MainWrapper
                pageTitle="Discover Raven’s Nest, the Hidden Village in Transylvania!"
                heroBanner={acf.hero_banner.url}
                heroBannerTitle={acf.hero_banner_title}
                heroBannerText={acf.hero_banner_text}
                
                shouldShowBannerText={true}
                isMobile={this.state.isMobile}

                bookNowURL={footer.acf.book_now_link}
                bookNowURLStyle={{ marginBottom: '50px' }}
                footerData={footer.acf}
                footerStyle={{ marginTop: '4vh !important' }}
            >

                {/* First info card */}
                <Box
                    className="right-side-content"
                    
                    style={{ marginTop: '-50px', marginBottom: '0' }}
                >
                    <Grid rows={'570px'} columns="full" className="grid-box" id='restaurant-info-card-1'>

                        <Box
                            className="image-box"
                        >
                            <Image
                                fit="cover"
                                src={acf.info_card_right_picture_1.url}
                            />
                        </Box>
                        <Box className='restaurant-page-info-card-image-decoration-box to-be-hidden-desktop' >
                                <Box className='to-be-hidden-desktop restaurant-page-info-card-image-decoration-asset' > </Box>
                        </Box>
                        <Box
                            className="content-box"
                        >
                            <Grid className="heading-grid"
                                columns={[
                                    'minmax(40%, 100%)',
                                    'minmax(0, 25%)'
                                ]}
                                justifyContent="between"
                                align="center"
                                style={{marginTop: '1vw'}}
                            >
                                <Box>
                                    <Heading
                                        dangerouslySetInnerHTML={{
                                            __html: acf.info_card_right_title_1
                                        }}
                                        level="2"
                                    />
                                    <Image

                                        src={'/static/assets/Asset_4.png'}
                                        className="break-line-asset"
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        src={'/static/assets/Asset_3.png'}
                                        className="mountain-Asset_to-be-hidden-mobile"
                                        style={{width: '9vw'}}
                                    />
                                </Box>
                            </Grid>
                            <Text
                                className="light-text"
                                dangerouslySetInnerHTML={{
                                    __html: acf.info_card_right_1
                                }}
                            />
                            
                        </Box>
                        <Box className="background-box">
                            <Image
                                src={'/static/assets/Asset_5.png'}
                                className="tree-asset"
                                style={{ right: '3%' }}
                            />
                            {/* <Image
                                src={'/static/assets/Asset_6.png'}
                                className="triangle-asset"
                                style={{ bottom: '8%' }}
                            /> */}
                        </Box>
                        <Image
                                src={'/static/assets/Asset_21.png'}
                                className="triangle-asset"
                                style={{ bottom: '8%' }}
                            />
                    </Grid>
                </Box>

                
                {/* TEXT */}

                <Box className="boxed-element-no-sides wide-text restaurant-wide-text-box">
                    <Box className="boxed-element-only-sides">
                        <Text
                            dangerouslySetInnerHTML={{ __html: acf.wide_text }}
                        />
                        <Box>
                            <Button
                                href={footer.acf.book_now_link}
                                target="_blank"
                                label="Book Now"
                                className="buy-now-color"
                                style={{display: 'none'}}
                            />
                        </Box>
                    </Box>
                </Box>


                {/* Bottom three images */}


                <Box id="restaurant-bottom-images">
                    <Box className="restaurant-bottom-image-box" >
                        <Image
                            src={'/static/assets/Asset_22.png'}
                            className="asset"
                        />

                        <Image
                            fit="cover"
                            src={acf.bottom_picture_1.url}
                        />

                    </Box>
                    <Box className="restaurant-bottom-image-box" >
                        <Image
                            src={'/static/assets/Asset_1.png'}
                            className="asset"
                        />
                        <Image
                            fit="cover"
                            src={acf.bottom_picture_2.url}
                        />
                    </Box>
                    <Box className="restaurant-bottom-image-box" >
                        <Image
                            src={'/static/assets/Asset_22.png'}
                            className="asset"
                        />
                        <Image
                            fit="cover"
                            src={acf.bottom_picture_3.url}
                        />
                    </Box>

                </Box>

                <Box id='accommodation-bottom-navigation-links'>
                    <Box className="boxed-element expore-back-to-map-button">
                        <Box className="map-button" >
                            <Button
                                // label="Back to map"
                                className={'buy-now-color'}
                                onClick={this.handleBackToMapClick}
                            > <a href={`/accommodation/${acf.bottom_button_1}`}> SEE HOUSES OPTIONS </a> </Button>
                        </Box>
                    </Box>
                    <Box className="boxed-element expore-back-to-map-button">
                        <Box className="map-button" >
                            <Button
                                // label="Back to map"
                                className={'buy-now-color'}
                                onClick={this.handleBackToMapClick}
                            > <a href={`/accommodation/${acf.bottom_button_2}`}> EXPLORE THE FACILITIES </a> </Button>
                        </Box>
                    </Box>
                    <Box className="boxed-element expore-back-to-map-button">
                        <Box className="map-button" >
                            <Button
                                // label="Back to map"
                                className={'buy-now-color'}
                                onClick={this.handleBackToMapClick}
                            > <a href={`/accommodation/${acf.bottom_button_3}`}> SEE RATES FOR 2020 SEASON </a> </Button>
                        </Box>
                    </Box>

                </Box>

            

                
            </MainWrapper>
        );
    }
}
