import MainWrapper from '../components/MainWrapper';
import Gallery from '../components/Gallery';
import React, { Component } from 'react';
import axios from 'axios';
import wpURL from '../api_cfg';
import { Image, Box, Grid, Heading, Text, Button } from 'grommet';
import { relative } from 'path';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { ThemeProvider } from 'styled-components';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const slug = 'our-story'; //context.query.slug

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
        // console.log('isMobile: ', this.state.isMobile)
        return (
            <MainWrapper
                pageTitle="Discover Raven’s Nest, the Hidden Village in Transylvania!"
                heroBanner={acf.hero_banner.url}

                shouldShowBannerText={!this.state.isMobile}
                isMobile={this.state.isMobile}

                heroBannerTitle={acf.hero_banner_title}
                heroBannerText={acf.hero_banner_text}
                bookNowURL={footer.acf.book_now_link}
                // bookNowURLStyle={{ display: 'none' }}
                bookNowButtonVisibility='true'
                footerData={footer.acf}
            >
                {/* ONLY mobile content box - containing header text info */}

                <Box className="content-box info-card intro a-f our-story-mobile-header-text to-be-hidden-desktop">
                    <Grid
                        columns={['100%']}
                        justifyContent="between"
                        align="center"
                    >
                        <Box>
                            <Heading
                                style={{ marginBottom: '30px' }}
                                dangerouslySetInnerHTML={{
                                    __html: acf.hero_banner_title
                                }}
                                level="2"
                            />
                            <Image
                                style={{ marginBottom: '44px' }}
                                src={'/static/assets/Asset_4.png'}
                                className="break-line-asset"
                            />
                        </Box>
                    </Grid>
                    <Text
                        className="light-text"
                        dangerouslySetInnerHTML={{
                            __html: acf.hero_banner_text
                        }}
                    />
                    <Image
                        className="mountain-Asset_to-be-hidden-mobile"
                        data-aos="fade-zoom-out"
                        src="/static/assets/Asset_3.png"
                    />
                </Box>

                {/* ///////////////////////////// WIDE TEXT GROUP 1 ///////////////////////////// */}
                
                
                <Box
                    id="wide-text-group-1"
                    className="boxed-element-only-sides our-story-wide-text-group-1" 
                >
                    <Grid className="light-text text-with-img">
                        <Text
                            dangerouslySetInnerHTML={{
                                __html: acf.wide_text_1
                            }}
                        />
                        <Image
                            className="mountain-Asset_to-be-hidden-mobile"
                            data-aos="fade-zoom-out"
                            src="/static/assets/Asset_3.png"
                        />
                    </Grid>

                    <Image
                        className="underline-paragraph"
                        data-aos="fade-zoom-out"
                        fit="cover"
                        src="/static/assets/Asset_4.png"
                    />

                    <Grid className="light-text text-with-img">
                        <Text
                            dangerouslySetInnerHTML={{
                                __html: acf.wide_text_2
                            }}
                        />
                    </Grid>
                </Box>

                {/* ///////////////////////////// INFO CARD 1 ///////////////////////////// */}

                <Box
                    id="info-card-1"
                    className="boxed-element-only-sides info-card-story our-story-info-card-1"
                >
                    <Image
                        className="image-box"
                        data-aos="fade-zoom-out"
                        src={acf.info_card_1_image.url}
                    />
                    <Box className="content-box">
                    <Grid
                                columns={['85% 15%']}
                                justifyContent="between"
                            >
                            <Heading
                                className="no-top-space"
                                style={{maxWidth: '837px'}}
                                dangerouslySetInnerHTML={{
                                    __html: acf.info_card_1_title
                                }}
                                level="2"
                            />
                            <Image
                                className='tree-asset to-be-hidden-desktop'
                                src={'/static/assets/Asset_9.png'}
                            />
                        <Image
                            className="break-line-asset"
                            data-aos="fade-zoom-out"
                            src="/static/assets/Asset_4.png"
                        />
                        </Grid>

                        <Text
                            className="light-text"
                            dangerouslySetInnerHTML={{
                                __html: acf.info_card_1_text
                            }}
                        />
                    </Box>
                    <Box className="background-box">
                        {
                            <Image
                                src={'/static/assets/Asset_8.png'}
                                className="column-asset"
                            />
                        }
                    </Box>
                </Box>

                {/* ///////////////////////////// DESCRIPTION 1 + GALLERY ///////////////////////////// */}

                <Grid
                    id="description-1"
                    className="boxed-element-only-sides description our-story-description"
                    gap='small'
                >
                    <Box className="description-text">
                        <Text
                            className="light-text"
                            dangerouslySetInnerHTML={{
                                __html: acf.description_1_text
                            }}
                        />
                        <Image
                            src={'/static/assets/Asset_20.png'}
                            className="asset"
                        />
                        <Text
                            className="light-text"
                            dangerouslySetInnerHTML={{
                                __html: acf.description_1_text_second
                            }}
                        />

                    </Box>

                    <Box>

                    <Box className="restaurant-bottom-image-box facilities-image-box our-story-description-image-box" >
                        <Image
                            src={'/static/assets/Asset_22.png'}
                            className="asset"
                        />

                        <Image
                            src={acf.story_gallery_1.url}
                        />
                        <Image
                            src={'/static/assets/Asset_1.png'}
                            className="mobile-asset to-be-hidden-desktop"
                        />

                    </Box>
                    
                    </Box>
                    {/* <Gallery
                        imagesArray={[
                            acf.story_gallery_1.url,
                            acf.story_gallery_2.url,
                            acf.story_gallery_3.url,
                            acf.story_gallery_4.url,
                            acf.story_gallery_5.url
                        ]}
                    /> */}
                </Grid>

                {/* ///////////////////////////// CONTENT ON BROWN BACKGROUND ///////////////////////////// */}

                <div style={{ backgroundColor: '#7c5e49' }}>
                    {/* ///////////////////////////// INFO CARD 2 ///////////////////////////// */}
                    <Box
                        id="info-card-2"
                        className="info-card-story boxed-element-only-sides our-story-info-card-2"
                    >
                        <Image
                            className="image-box"
                            data-aos="fade-zoom-out"
                            src={acf.info_card_2_image.url}
                        />
                        <Box className="content-box">
                            <Grid
                                className="text-with-image heading-grid"
                                columns={['85%', '15%']}
                            >
                                <Box>
                                    <Heading
                                        dangerouslySetInnerHTML={{
                                            __html: acf.info_card_2_title
                                        }}
                                        level="2"
                                        style={{
                                            marginTop: 0,
                                            fontWeight: 'bold'
                                        }}
                                    />
                                    <Image
                                        className="break-line-asset"
                                        data-aos="fade-zoom-out"
                                        src="/static/assets/Asset_4.png"
                                    />
                                </Box>
                                <Image
                                    // alignSelf="center"
                                    className="mountain-Asset_to-be-hidden-mobile"
                                    data-aos="fade-zoom-out"
                                    // fit="cover"
                                    style={{ padding: '0' }}
                                    src="/static/assets/Asset_3.png"
                                />
                            </Grid>

                            <Text
                                className="light-text"
                                dangerouslySetInnerHTML={{
                                    __html: acf.info_card_2_text
                                }}
                            />
                            <Image
                                src={'/static/assets/Asset_23.png'}
                                style={{
                                    height: '75px',
                                    width: '250px',
                                    bottom: '13vw',
                                    left: '25%',
                                    position: 'absolute',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            />
                        </Box>

                        <Box className="background-box">
                            <Image
                                className='tree-asset'
                                src={'/static/assets/Asset_5.png'}
                            />
                        </Box>
                        <Image
                            className="asset"
                            src={'/static/assets/Asset_22.png'}
                        />
                    </Box>

                    {/* ///////////////////////////// WIDE TEXT GROUP 2 ///////////////////////////// */}
                    <Box
                        id="wide-text-group-2"
                        className="boxed-element-only-sides wide-text-background light-text our-story-wide-text-2"
                    >
                        <Text
                            dangerouslySetInnerHTML={{
                                __html: acf.wide_text_3
                            }}
                        />

                        <Image
                            className="underline-paragraph"
                            data-aos="fade-zoom-out"
                            src="/static/assets/Asset_4.png"
                        />

                        <Text
                            dangerouslySetInnerHTML={{
                                __html: acf.wide_text_4
                            }}
                        />
                    </Box>
                </div>

                {/* ///////////////////////////// DESCRIPTION 2 ///////////////////////////// */}

                <Grid id="description-2" className="boxed-element description our-story-description2">
                    <Box>
                        <Box
                            id="description-2-title"
                        >
                            <Heading
                                // style={{ lineHeight: '60px' }}
                                dangerouslySetInnerHTML={{
                                    __html: acf.description_2_title
                                }}
                                level="2"
                            />
                            <Image
                                className="break-line-asset"
                                data-aos="fade-zoom-out"
                                src="/static/assets/Asset_4.png"
                                style={{ width: '47vw', height: '0.3vw' }}
                            />
                        </Box>
                        <Text
                            dangerouslySetInnerHTML={{
                                __html: acf.description_2_text
                            }}
                        />
                        <Box className='to-be-hidden-desktop mobile-description2-text-asset-box'>
                            <Image
                                src={'/static/assets/Asset_21.png'}
                                className='asset1'
                            />
                        </Box>

                        <Box id="restaurant-bottom-images">
                            <Box className="restaurant-bottom-image-box" >
                                <Image
                                    src={'/static/assets/Asset_22.png'}
                                    className="asset"
                                />

                                <Image
                                    fit="cover"
                                    src={acf.description_2_image1.url}
                                />

                            </Box>
                            <Box className="restaurant-bottom-image-box" >
                                <Image
                                    src={'/static/assets/Asset_1.png'}
                                    className="asset"
                                />
                                <Image
                                    fit="cover"
                                    src={acf.description_2_image2.url}
                                />
                            </Box>
                            <Box className="restaurant-bottom-image-box" >
                                <Image
                                    src={'/static/assets/Asset_22.png'}
                                    className="asset"
                                />
                                <Image
                                    fit="cover"
                                    src={acf.description_2_image3.url}
                                />
                            </Box>
                        </Box>

                        <Text
                            dangerouslySetInnerHTML={{
                                __html: acf.description_2_text_second
                            }}
                        />

                    </Box>
                    
                    <Box className="our-story-assets-box">
                        <Image
                            src={'/static/assets/Asset_21.png'}
                            className='asset1'
                        />
                        <Image
                            src={'/static/assets/Asset_3.png'}
                            className='asset2'
                        />
                    </Box>
                </Grid>
                <Box className="to-be-hidden-desktop restaurant-bottom-image-box our-story-mobile-image-box" >
                    <Image
                        fit="cover"
                        src={acf.info_card_2_image.url}
                    />
                    <Image
                        src={'/static/assets/Asset_22.png'}
                        className="asset"
                    />

                </Box>

                {/* ///////////////////////////// INFO CARD 3 WITH BROWN BACKGROUND ///////////////////////////// */}

                <div className='our-story-info-card-3-parent' style={{ backgroundColor: '#7c5e49' }}>
                    <Box
                        id="info-card-3"
                        className="info-card-story boxed-element our-story-info-card-3"
                    >
                        <Image
                            className="image-box"
                            data-aos="fade-zoom-out"
                            src={acf.info_card_3_image.url}
                        />
                        <Box className="content-box">
                            <Grid
                                className="heading-grid"
                                columns={['65%', '25%']}
                                justifyContent="between"
                                align="center"
                            >
                                <Box>
                                    <Heading
                                        dangerouslySetInnerHTML={{
                                            __html: acf.info_card_3_title
                                        }}
                                        level="2"
                                    />
                                    <Image
                                        className="break-line-asset"
                                        data-aos="fade-zoom-out"
                                        src="/static/assets/Asset_4.png"
                                    />
                                </Box>
                                <Image
                                    className="mountain-Asset_to-be-hidden-mobile"
                                    data-aos="fade-zoom-out"
                                    src="/static/assets/Asset_3.png"
                                />
                            </Grid>
                            <Text
                                className="light-text"
                                dangerouslySetInnerHTML={{
                                    __html: acf.info_card_3_text
                                }}
                            />
                        </Box>
                        <Box className="background-box">
                            <Image  className="hide-Asset_mountain-asset" src={'/static/assets/Asset_5.png'} />

                        </Box>
                    </Box>
                </div>
            </MainWrapper>
        );
    }
}
