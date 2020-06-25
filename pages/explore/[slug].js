import React, { Component, Fragment } from "react";
// import { Image, Box, Button } from "grommet";

import axios from "axios";

import { Image, Box, Grid, Heading, Text, Button } from 'grommet';
import 'react-responsive-carousel/lib/styles/carousel.css';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';


import { Carousel } from 'react-responsive-carousel';

import MainWrapper from '../../components/MainWrapper';
import LocationPage from '../../components/LocationPage';
import wpURL from '../../api_cfg';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            map: 'around',
            locationsExplore: [
                "Scarita-Belisoara Natural Reserve",
                "Cave of Papara",
                "Sipote Waterfalls",
                "Dragon's Gate & Grosi Cave",
                "Trascau Fortress",
                "Rimetea",
                "Piatra Secuiului",
                "Vanatarile Ponorului Waterfall",
                "Rosia Montana Ancient Goldmines",
                "Carolina Fortress Alba Iulia"
            ],
            locationsAround: [
                "Oradea",
                "Arad",
                "Timisoara",
                "Tarnita Lake",
                "Cluj Napoca",
                "Targu Mures",
                "Biertan",
                "Bistrita"
            ],
            isMobile: '',
        };
    }
    listener;
    componentDidMount() {

        this.verifyIfMobile();
        this.listener = window.addEventListener('resize', this.verifyIfMobile);

    }

    verifyIfMobile = () => {

        if(window.outerWidth < 769){
            this.setState({isMobile: true});
        }else{
            this.setState({isMobile: false});
        }
    
    } 
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.listener);
    }


    static async getInitialProps(context) {
        const slug = 'explore'; //context.query.slug
        const locationSlug = context.query.slug;
        console.log('location Data-----', locationSlug);
        // Make request for posts.
        const pageData = await axios.get(wpURL + `wp/v2/pages?slug=${slug}`);

        const locationPageData = await axios.get(
            wpURL + `wp/v2/pages?slug=explore-${locationSlug}`
        );
        const footerData = await axios.get(wpURL + `wp/v2/pages?slug=footer`);

        // Return our only item in array from response to posts object in props.
        return {
            page: pageData.data[0],
            locationData: locationPageData.data[0],
            footer: footerData.data[0]
        };
    }

    switchMap = (type) => {

        if(type === 'around'){
            this.setState({ map: 'around' });
        }
        if(type === 'explore'){
            this.setState({ map: 'explore' });
        }

    };

    // getLocationPage() {
    //     const data = this.props.locationData;
    //     const galleryArray = [];

    //     if (data) {
    //         if (data.acf.image_array_1.url) {
    //             galleryArray.push(data.acf.image_array_1.url);
    //         }
    //         if (data.acf.image_array_2.url) {
    //             galleryArray.push(data.acf.image_array_2.url);
    //         }
    //         if (data.acf.image_array_3.url) {
    //             galleryArray.push(data.acf.image_array_3.url);
    //         }
    //         if (data.acf.image_array_4.url) {
    //             galleryArray.push(data.acf.image_array_4.url);
    //         }
    //         if (data.acf.image_array_5.url) {
    //             galleryArray.push(data.acf.image_array_5.url);
    //         }

    //         return (
    //             <LocationPage
    //                 infoCardImage={data.acf.info_card_image.url}
    //                 infoCardTitle={data.acf.info_card_title}
    //                 infoCardText={data.acf.info_card_text}
    //                 wideText={data.acf.wide_text}
    //                 imagesArray={galleryArray}
    //             />
    //         );
    //     }
    //     return null;
    // }

    handleBackToMapClick = () => {
        
    }

    render() {
        const acf_parent  = this.props.page.acf;
        const { footer } = this.props;
        const { acf } = this.props.locationData;
        // console.log('slug', this.props.locationData.slug.split('-').slice(1).join('-'))
        return (
            <MainWrapper
                pageTitle="Discover Raven’s Nest, the Hidden Village in Transylvania!"
                heroBanner={acf_parent.hero_banner.url}
                
                shouldShowBannerText={!this.state.isMobile}
                isMobile={this.state.isMobile}

                heroBannerTitle={acf_parent.hero_banner_title}
                heroBannerText={acf_parent.hero_banner_text}
                bookNowURL={footer.acf.book_now_link}
                // bookNowURLStyle="empty"

                footerData={footer.acf}
            >
                <Box
                    id="explore_info-card-2"
                    className="boxed-element-only-sides info-card-story slug-explore"
                >
                    <Image
                        className="image-box"
                        data-aos="fade-zoom-out"
                        src={acf.image_array_1.url}
                    />

                    <Box className="content-box">
                        <Heading
                            className="no-top-space"
                            style={{maxWidth: '837px'}}
                            dangerouslySetInnerHTML={{
                                 __html: acf.info_card_title
                            }}
                            level="2"
                        />
                        <Image
                            className="break-line-asset"
                            data-aos="fade-zoom-out"
                            src="/static/assets/Asset_4.png"
                        />
                        <Text
                            className="light-text"
                            dangerouslySetInnerHTML={{
                                __html: acf.info_card_text
                            }}
                        ></Text>
                    </Box>
                    <Box className="background-box explore_background_box_2">
                        
                            <Image
                                src={'/static/assets/Asset_8.png'}
                                className="column-asset"
                            />
                            <Image
                                src={'/static/assets/Asset_22.png'}
                                className="asset to-be-hidden-desktop"
                            />
                        
                    </Box>
                </Box>

                {/* description */}

                <Grid
                    id="description-1"
                    className="boxed-element description expore_description_grid"
                >
                    <Box className="description-text">
                        <Text
                            className="light-text"
                            dangerouslySetInnerHTML={{
                                __html: acf.wide_text
                            }}
                        ></Text>
                    </Box>
                    <Image
                        className="explore-description-image"
                        data-aos="fade-zoom-out"
                        src={acf.image_array_2.url}
                    />
                </Grid>

                <Box className=" expore-back-to-map-button">
                    <Box className="map-button" >
                         <a className=' buy-now-color backToMapButton' href='/explore#map'> Back to map </a>
                    </Box>
                </Box>

                <Box className="explore-mobile-image"> 
                <Image
                        className=""
                        data-aos="fade-zoom-out"
                        src={acf.image_array_2.url}
                    />
                <Image
                    // className="break-line-asset"
                    data-aos="fade-zoom-out"
                    src="/static/assets/Asset_1.png"
                />
                </Box>
            </MainWrapper>
        );
    }
}
