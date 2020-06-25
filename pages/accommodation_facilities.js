import MainWrapper from '../components/MainWrapper';
import React, { Component } from 'react';
import axios from 'axios';
import wpURL from '../api_cfg';
import { Image, Box, Grid, Heading, Video, Text, Button, Anchor } from 'grommet';

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
        const slug = 'accommodation_facilities'; //context.query.slug

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
                footerStyle={{ marginTop: '10vh !important', paddingLeft: '2vw' }}
            >


                {/* First info card */}
                <Box
                    className={" right-side-content house"}
                >
                    <Grid rows={"570px"} columns="full" className="grid-box" id="facilities-info-card">
                        <Box
                            className="image-box"
                        >
                            <Image
                                fit="cover"
                                src={acf.info_card_picture.url}
                            />
                        </Box>
                        <Box className='restaurant-page-info-card-image-decoration-box to-be-hidden-desktop facilities-styles' >
                                <Box className='to-be-hidden-desktop restaurant-page-info-card-image-decoration-asset facilities-asset'  > </Box>
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
                            >
                                <Box>
                                    <Heading
                                        dangerouslySetInnerHTML={{
                                            __html: acf.info_card_title
                                        }}
                                        level="2"
                                    />
                                    <Image
                                       className="break-line-asset"
                                       src={'/static/assets/Asset_4.png'}
                                    />
                                </Box>
                            </Grid>

                            {/* <Heading dangerouslySetInnerHTML={{__html : acf.info_card_right_title_1}} level="2"></Heading> */}
                            <Text
                                className="light-text"
                                dangerouslySetInnerHTML={{
                                    __html: acf.info_card_content,
                                }}
                            />
                        </Box>
                        <Box className="background-box">
                            <Image 
                                className="tree-asset to-be-hidden-desktop"
                                src={"/static/assets/Asset_5.png"}
                            />
                            <Image
                                className="asset to-be-hidden-mobile"
                                src={"/static/assets/Asset_8.png"}
                            />
                        </Box>
                    </Grid>
                </Box>



                    {/* first wrapper */}
                <Box className='boxed-element-no-sides facilities-wrapper'>
                        {/* text row */}
                    <Box className='content-row'>
                        <Box className='content-box'>
                            <Box className='facilities-text-box'>
                                <Heading
                                    style={{ marginBottom: '30px' }}
                                    dangerouslySetInnerHTML={{
                                        __html: acf.area_1_box_1_title
                                    }}
                                    level="3"
                                />
                                <Text
                                    className="light-text"
                                    dangerouslySetInnerHTML={{
                                        __html: acf.area_1_box_1_content,
                                    }}
                                />
                            </Box>    
                            <Box className="restaurant-bottom-image-box facilities-image-box" >
                                <Image
                                    src={'/static/assets/Asset_22.png'}
                                    className="asset"
                                />

                                <Image
                                    fit="cover"
                                    src={acf.area_1_bottom_picture_1.url}
                                />

                            </Box>
                        </Box>

                        <Box className='content-box'>
                            <Box className='facilities-text-box'>
                                <Heading
                                    style={{ marginBottom: '30px' }}
                                    dangerouslySetInnerHTML={{
                                        __html: acf.area_1_box_2_title
                                    }}
                                    level="3"
                                />
                                <Text
                                    className="light-text"
                                    dangerouslySetInnerHTML={{
                                        __html: acf.area_1_box_2_content,
                                    }}
                                />
                            </Box>

                            <Box className="restaurant-bottom-image-box facilities-image-box mobile-right-asset" >
                            <Image
                                src={'/static/assets/Asset_1.png'}
                                className="asset"
                            />

                            <Image
                                fit="cover"
                                src={acf.area_1_bottom_picture_2.url}
                            />

                        </Box>
                        </Box>

                        <Box className='content-box'>
                            <Box className='facilities-text-box'>
                                <Heading
                                    style={{ marginBottom: '30px' }}
                                    dangerouslySetInnerHTML={{
                                        __html: acf.area_1_box_3_title
                                    }}
                                    level="3"
                                />
                                <Text
                                    className="light-text"
                                    dangerouslySetInnerHTML={{
                                        __html: acf.area_1_box_3_content,
                                    }}
                                />
                            </Box>

                            
                                <Box className="restaurant-bottom-image-box facilities-image-box" >
                                    <Image
                                        src={'/static/assets/Asset_22.png'}
                                        className="asset"
                                    />
                                    <Image
                                        fit="cover"
                                        src={acf.area_1_bottom_picture_3.url}
                                    />
                                </Box>
                        </Box>
                    </Box>
                </Box> 


                   {/* second wrapper */}
                   <Box className='boxed-element-no-sides facilities-wrapper facilities-wrapper-white-background'>
                        {/* text row */}
                    <Box className='content-row'>
                        <Box className='content-box'>
                            <Box className='facilities-text-box'>
                                <Heading
                                    style={{ marginBottom: '30px' }}
                                    dangerouslySetInnerHTML={{
                                        __html: acf.area_2_box_1_title
                                    }}
                                    level="3"
                                />
                                <Text
                                    className="light-text"
                                    dangerouslySetInnerHTML={{
                                        __html: acf.area_2_box_1_content,
                                    }}
                                />
                                </Box>
                                <Box className="restaurant-bottom-image-box facilities-image-box mobile-right-asset" >
                                    <Image
                                        src={'/static/assets/Asset_22.png'}
                                        className="asset"
                                    />

                                    <Image
                                        fit="cover"
                                        src={acf.area_2_bottom_picture_1.url}
                                    />

                                
                            </Box>
                        </Box>

                        <Box className='content-box'>
                            <Box className='facilities-text-box'>
                                <Heading
                                    style={{ marginBottom: '30px' }}
                                    dangerouslySetInnerHTML={{
                                        __html: acf.area_2_box_2_title
                                    }}
                                    level="3"
                                />
                                <Text
                                    className="light-text"
                                    dangerouslySetInnerHTML={{
                                        __html: acf.area_2_box_2_content,
                                    }}
                                />
                                </Box>
                                <Box className="restaurant-bottom-image-box facilities-image-box" >
                                    <Image
                                        src={'/static/assets/Asset_1.png'}
                                        className="asset"
                                    />
                                    <Image
                                        fit="cover"
                                        src={acf.area_2_bottom_picture_2.url}
                                    />
                                
                            </Box>
                        </Box>

                        <Box className='content-box'>
                            <Box className='facilities-text-box'>
                                <Heading
                                    style={{ marginBottom: '30px' }}
                                    dangerouslySetInnerHTML={{
                                        __html: acf.area_2_box_3_title
                                    }}
                                    level="3"
                                />
                                <Text
                                    className="light-text"
                                    dangerouslySetInnerHTML={{
                                        __html: acf.area_2_box_3_content,
                                    }}
                                    style={{color: '#C8A337'}}
                                />
                                </Box>
                                <Box className="restaurant-bottom-image-box facilities-image-box mobile-right-asset" >
                                    <Image
                                        src={'/static/assets/Asset_22.png'}
                                        className="asset"
                                    />
                                    <Image
                                        fit="cover"
                                        src={acf.area_2_bottom_picture_3.url}
                                    />
                                
                            </Box>
                        </Box>

                    </Box>
                </Box>




                    {/* Bottom Navigation Buttons */}
                    
                <Box 
                    id='accommodation-bottom-navigation-links' 
                    className='houses-bottom-navigation-links'
                    style={{marginLeft: '9vw'}}
                >
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
                            > <a href={`/accommodation/${acf.bottom_button_2}`}> SEE RATES FOR 2020 SEASON </a> </Button>
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
