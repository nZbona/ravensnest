import MainWrapper from '../components/MainWrapper';
import React, { Component } from 'react';
import axios from 'axios';
import wpURL from '../api_cfg';
import { Image, Box, Grid, Heading, Video, Text, Button, Anchor } from 'grommet';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            houseOnShow: 'sunrise',
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
        const slug = 'accommodation-houses'; //context.query.slug

        // Make request for posts.
        const pageData = await axios.get(wpURL + `wp/v2/pages?slug=${slug}`);
        const footerData = await axios.get(wpURL + `wp/v2/pages?slug=footer`);

        // Return our only item in array from response to posts object in props.
        return {
            page: pageData.data[0],
            footer: footerData.data[0]
        };
    }

    handleHouseClick = (houseName) => {
        this.setState({houseOnShow: houseName});
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
                footerStyle={{ marginTop: '10vh !important' }}
            >

                <Box className=" wide-text accomodation-houses-wide-text">
                        <Text dangerouslySetInnerHTML={{ __html: acf.wide_text }} />
                </Box>



                {/* Houses Navigation Area */}
                
                <Box id='houses-options-box'>
                    
                    <Box 
                        className={this.state.houseOnShow === 'sunrise' ? 'houses-option houses-option-active' : 'houses-option' }
                    >
                        <Anchor onClick={() => this.handleHouseClick('sunrise')} > The Sunrise House </Anchor>
                    </Box>
                    <Box 
                        className={this.state.houseOnShow === 'median' ? 'houses-option houses-option-active' : 'houses-option' }
                    >
                        <Anchor onClick={() => this.handleHouseClick('median')} > The Median House </Anchor>
                    </Box>
                    <Box 
                        className={this.state.houseOnShow === 'sunset' ? 'houses-option houses-option-active' : 'houses-option' }
                    >
                        <Anchor onClick={() => this.handleHouseClick('sunset')} > The Sunset House </Anchor>
                    </Box>

                </Box>



                {/* First info card */}
                <Box
                    className={" right-side-content house"}
                    style={{ marginBottom: this.state.readMoreRight1clicked ? "5%" : "0" }}>
                    <Grid rows={"570px"} columns="full" className="grid-box" id="houses-first-info-card">
                        <Box
                            className="image-box"
                        >
                            <Image
                                fit="cover"
                                // src={acf.info_card_1_median_picture.url}
                                src={acf[`${`info_card_1_`+`${this.state.houseOnShow}`+`_picture`}`].url}
                            />
                        </Box>
                        <Box
                            className="content-box"
                        >
                            {/* <Heading dangerouslySetInnerHTML={{__html : acf.info_card_right_title_1}} level="2"></Heading> */}
                            <Text
                                className="light-text"
                                dangerouslySetInnerHTML={{
                                    __html: acf[`${`info_card_1_`+`${this.state.houseOnShow}`+`_content`}`],
                                }}
                            />
                            <Image 
                                className="mountain-Asset_to-be-hidden-desktop"
                                src={"/static/assets/Asset_3.png"}
                            />
                        </Box>
                        <Box className="background-box">
                            <Image
                                className="asset"
                                src={"/static/assets/Asset_8.png"}
                            />
                        </Box>
                    </Grid>
                </Box>



                {/* Second info card */}
                <Box
                    className={" right-side-content house"}
                >
                    <Grid rows={"570px"} columns="full" className="grid-box" id="houses-second-info-card">
                        <Box
                            className="image-box"
                        >
                            <Image
                                fit="cover"
                                // src={acf.info_card_2_median_picture.url}
                                src={acf[`${`info_card_2_`+`${this.state.houseOnShow}`+`_picture`}`].url}
                            />
                        </Box>
                        <Box
                            className="content-box"
                        >
                            {/* <Heading dangerouslySetInnerHTML={{__html : acf.info_card_right_title_1}} level="2"></Heading> */}
                            <Text
                                className="light-text"
                                dangerouslySetInnerHTML={{
                                    __html: acf[`${`info_card_2_`+`${this.state.houseOnShow}`+`_content`}`],
                                }}
                            />
                            <Image 
                                className="mountain-Asset_to-be-hidden-desktop"
                                src={"/static/assets/Asset_3.png"}
                            />
                        </Box>
                        <Box className="background-box">
                            <Image
                                className="asset"
                                src={"/static/assets/Asset_22.png"}
                            />
                            <Image
                                className="tree-asset"
                                src={"/static/assets/Asset_5.png"}
                            />
                        </Box>
                    </Grid>
                </Box>




                {/* Third info card */}
                <Box
                    className={" right-side-content house"}
                >
                    <Grid rows={"570px"} columns="full" className="grid-box" id="houses-third-info-card">
                        <Box
                            className="image-box"
                        >
                            <Image
                                fit="cover"
                                // src={acf.info_card_3_median_picture.url}
                                src={acf[`${`info_card_3_`+`${this.state.houseOnShow}`+`_picture`}`].url}
                            />
                        </Box>
                        <Box
                            className="content-box"
                        >
                            {/* <Heading dangerouslySetInnerHTML={{__html : acf.info_card_right_title_1}} level="2"></Heading> */}
                            <Text
                                className="light-text"
                                dangerouslySetInnerHTML={{
                                    __html: acf[`${`info_card_3_`+`${this.state.houseOnShow}`+`_content`}`],
                                }}
                            />
                            <Image 
                                className="mountain-Asset_to-be-hidden-desktop"
                                src={"/static/assets/Asset_3.png"}
                            />
                        </Box>
                        <Box className="background-box">
                            <Image
                                className="asset to-be-hidden-desktop"
                                src={"/static/assets/Asset_22.png"}
                            />
                            <Image
                                className="tree-asset"
                                src={"/static/assets/Asset_5.png"}
                            />
                        </Box>
                    </Grid>
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


                    {/* Bottom Navigation Buttons */}
                    
                <Box id='accommodation-bottom-navigation-links' className='houses-bottom-navigation-links'>
                    <Box className="boxed-element expore-back-to-map-button">
                        <Box className="map-button" >
                            <Button
                                // label="Back to map"
                                className={'buy-now-color'}
                                onClick={this.handleBackToMapClick}
                            > <a href={`/accommodation/${acf.bottom_button_1}`}> SEE RATES FOR 2020 SEASON </a> </Button>
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
                            > <a href={`/accommodation/${acf.bottom_button_3}`}> CHECK OUT THE RESTAURANT </a> </Button>
                        </Box>
                    </Box>

                </Box>

                
            </MainWrapper>
        );
    }
}
