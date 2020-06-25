import MainWrapper from '../components/MainWrapper';
import React, { Component } from 'react';
import axios from 'axios';
import wpURL from '../api_cfg';
import { Image, Box, Grid, Heading, Video, Text, Button } from 'grommet';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMobile: ''
        };
    }
    listener;
    componentDidMount() {

        this.verifyIfMobile();
        this.listener = window.addEventListener('resize', this.verifyIfMobile);

    }

    

    verifyIfMobile = () => {

            if(window.innerWidth < 769){
                this.setState({isMobile: true}, () => {
                    console.log(this.state.isMobile);
                });
            }else{
                this.setState({isMobile: false});
            }
        
    }

    componentWillUnmount() {
        window.removeEventListener('resize', listener);
    }
    static async getInitialProps(context) {
        const slug = 'accommodation-rates'; //context.query.slug

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
        // console.log(acf.hero_banner_text)
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

            {/* Rates area */}
            <Box id="rates" className='boxed-element-only-sides accommodation-rates'>
                <Heading
                    dangerouslySetInnerHTML={{
                        __html: acf.rates_title,
                    }}
                    level="2"
                />
                {/* <Heading dangerouslySetInnerHTML={{__html : acf.rates_title}} level="2"></Heading> */}
                <Image
                    className="underline-title"
                    data-aos="fade-zoom-out"
                    src="/static/assets/Asset_4.png"
                    style={{
                        width: "25%",
                        height: "6px",
                        marginTop: " -75px",
                    }}
                />
                <Text
                    style={{
                        lineHeight: "23px",
                        fontSize: "20px",
                    }}
                    dangerouslySetInnerHTML={{
                        __html: acf.rates_title_extra_text,
                    }}
                />

                <Text
                    dangerouslySetInnerHTML={{
                        __html: acf.rates_prices,
                    }}
                />
            </Box>  

                
                {/* TEXT */}

                {/* <Box className="boxed-element-no-sides wide-text restaurant-wide-text-box">
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
                </Box> */}


                {/* FIRST row of 3 images */}


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


                {/* General Terms */}


                <Box id="general-terms" className='boxed-element-only-sides accommodation-rates-general-terms-box'>
                    <Heading
                        dangerouslySetInnerHTML={{
                            __html: acf.general_terms_title,
                        }}
                        level="3"
                    />
                    <Image
                        className="underline-title"
                        data-aos="fade-zoom-out"
                        src="/static/assets/Asset_4.png"
                        style={{
                            width: "25%",
                            height: "auto",
                            marginTop: " -38px",
                            height: "6px",
                        }}
                    />
                    <Text
                        style={{
                            lineHeight: "23px",
                            fontSize: "20px",
                        }}
                        dangerouslySetInnerHTML={{
                            __html: acf.general_terms,
                        }}
                    />
                </Box>



                {/* SECOND row of 3 images */}


                <Box id="restaurant-bottom-images">
                    <Box className="restaurant-bottom-image-box" >
                        <Image
                            src={'/static/assets/Asset_22.png'}
                            className="asset"
                        />

                        <Image
                            fit="cover"
                            src={acf.second_row_bottom_picture_1.url}
                        />

                    </Box>
                    <Box className="restaurant-bottom-image-box" >
                        <Image
                            src={'/static/assets/Asset_1.png'}
                            className="asset"
                        />
                        <Image
                            fit="cover"
                            src={acf.second_row_bottom_picture_2.url}
                        />
                    </Box>
                    <Box className="restaurant-bottom-image-box" >
                        <Image
                            src={'/static/assets/Asset_22.png'}
                            className="asset"
                        />
                        <Image
                            fit="cover"
                            src={acf.second_row_bottom_picture_3.url}
                        />
                    </Box>

                </Box>

                        {/* Cancellaion Terms Area */}
                <Box id="cancellation-terms" className='boxed-element-only-sides accommodation-rates-cancellation-terms-box'>
                    <Heading
                        dangerouslySetInnerHTML={{
                            __html: acf.terms_of_cancellation_title,
                        }}
                        level="3"
                    />
                    <Image
                        className="underline-title"
                        data-aos="fade-zoom-out"
                        src="/static/assets/Asset_4.png"
                        style={{
                            width: "25%",
                            height: "auto",
                            marginTop: " -38px",
                            height: "6px",
                        }}
                    />
                    <Text
                        style={{
                            fontSize: "20px",
                            lineHeight: "23px",
                        }}
                        dangerouslySetInnerHTML={{
                            __html: acf.terms_of_canncelation,
                        }}
                    />
                </Box>




                    {/* Bottom Navigation Buttons */}
                    
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
                                // label="CHECK OUT THE RESTAURANT"
                                className={'buy-now-color'}
                                onClick={this.handleBackToMapClick}
                                
                            > <a href={`/accommodation/${acf.bottom_button_3}`}> CHECK OUT THE RESTAURANT </a> </Button>
                        </Box>
                    </Box>

                </Box>

                
            </MainWrapper>
        );
    }
}
