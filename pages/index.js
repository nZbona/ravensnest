import MainWrapper from '../components/MainWrapper';
import React, { Component } from 'react';
import axios from 'axios';
import wpURL from '../api_cfg';
import { Image, Box, Grid, Heading, Video, Text, Button } from 'grommet';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            map: 'explore',
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
        const slug = 'home'; //context.query.slug

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
        // console.log(!!acf.hero_banner_text)
        return (
            <MainWrapper
                pageTitle="Discover Raven’s Nest, the Hidden Village in Transylvania!"
                heroBanner={acf.hero_banner.url}
                heroBannerTitle={acf.hero_banner_title}
                heroBannerText={acf.hero_banner_text}

                shouldShowBannerText={!this.state.isMobile}
                isMobile={this.state.isMobile}
                
                bookNowURL={footer.acf.book_now_link}
                bookNowURLStyle={{ marginBottom: '50px' }}
                footerData={footer.acf}
                footerStyle={{ marginTop: '15vh !important' }}
            >

                {/* First info card */}
                <Box
                    className="boxed-element-only-sides right-side-content"
                    
                    style={{ marginTop: '-50px', marginBottom: '0' }}
                >
                    <Grid rows={'570px'} columns="full" className="grid-box" id='landing-info-card-1'>
                        <Box
                            className="image-box"
                        >
                            <Image
                                fit="cover"
                                src={acf.info_card_picture_1.url}
                            />
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
                                style={{height:'10vw', marginTop: '2vw'}}
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
                                        style={{width: '11vw'}}
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
                        <Box className="background-box landing-background-box-1">
                            <Image
                                src={'/static/assets/Asset_5.png'}
                                className="tree-asset"
                                style={{ right: '3%' }}
                            />
                            <Image
                                src={'/static/assets/Asset_6.png'}
                                className="triangle-asset"
                                style={{ bottom: '8%' }}
                            />
                        </Box>
                    </Grid>
                </Box>

                <Box className="boxed-element-no-sides video-container">
                    <Video controls="over" fit="cover">
                        <source
                            key="video"
                            src={acf.banner_video.url}
                            type="video/mp4" />
                        <track
                            key="cc"
                            label="English"
                            kind="subtitles"
                            srcLang="en"
                            src="/assets/small-en.vtt"
                            default
                        />
                    </Video>

                </Box>

                                {/* second info card */}
                <Box
                    className="boxed-element right-side-content"
                    style={{ paddingTop: '0', paddingBottom: '0' }}
                >
                    <Grid
                        rows={'570px'}
                        columns={['1/3', '2/3']}
                        style={{ position: 'relative' }}
                        id='landing-info-card-2'
                    >
                        <Box
                            className="image-box"
                        >
                            <Image
                                data-aos="fade-zoom-out"
                                fit="cover"
                                src={acf.info_card_picture_2.url}
                            />
                        </Box>
                        <Box
                            className="content-box "
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
                                        style={{ marginBottom: '30px' }}
                                        dangerouslySetInnerHTML={{
                                            __html: acf.info_card_right_title_2
                                        }}
                                        level="2"
                                    />
                                    <Image
                                       className="break-line-asset"
                                       src={'/static/assets/Asset_4.png'}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        src={'/static/assets/Asset_9.png'}
                                        className="to-be-hidden-mobile"
                                        style={{
                                            width: '3vw',
                                            alignSelf: 'flex-end',
                                            marginRight: '50px'
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Text
                                className="light-text"
                                dangerouslySetInnerHTML={{
                                    __html: acf.info_card_right_2
                                }}
                            />
                        </Box>
                        <Box
                            className="to-be-hidden-mobile triangle-asset"
                        >
                            <Image
                                fit="contain"
                                src={'/static/assets/Asset_11.png'}
                            />
                        </Box>
                        <Box
                            className="background-box"
                        >
                            <Image
                                src={'/static/assets/Asset_8.png'}
                            />
                        </Box>
                    </Grid>
                </Box>

                <Box className="boxed-element-no-sides wide-text-background landing-wide-text-box">
                    <Box className="boxed-element-only-sides">
                        <Text
                            dangerouslySetInnerHTML={{
                                __html: acf.wide_text_background
                            }}
                        />
                    </Box>
                </Box>

                <Box
                    className="boxed-element left-side-content"
                    style={{
                        paddingTop: '3%',
                        marginBottom: '0'
                    }}
                >
                    <Grid
                        rows={'570px'}
                        columns="full"
                        className="grid-box-reverse"
                        id='landing-info-card-3'
                        style={{ marginBottom: '30px'}}

                    >
                        <Box
                            className="inf-crd-img image-box"
                        >
                            <Image
                                data-aos="fade-zoom-out"
                                fit="cover"
                                src={acf.info_card_left_picture_1.url}
                            />
                        </Box>
                        <Box
                            className="content-box "
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
                                            __html: acf.info_card_left_title_1
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
                                        style={{width: '11vw'}}
                                    />
                                </Box>
                            </Grid>
                            <Text
                                className="light-text"
                                dangerouslySetInnerHTML={{
                                    __html: acf.info_card_left_1
                                }}
                            />
                        </Box>
                        <Box
                            className="background-box"
                        >
                            <Image
                                src={'/static/assets/Asset_5.png'}
                                className="tree-asset"
                                style={{ bottom: '35%' }}
                            />
                            <Image
                                src={'/static/assets/Asset_6.png'}
                                className="triangle-asset"
                                style={{ bottom: '10%' }}
                            />
                        </Box>
                    </Grid>
                </Box>

                <Box className="boxed-element-no-sides wide-text landing-wide-text-box-2">
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

                <Box
                    id="last-index-card"
                    className="boxed-element right-side-content"
                    style={{ marginBottom: '15vw' }}
                >
                    <Grid rows={'570px'} columns="full" className="grid-box" id='landing-info-card-4'>
                        <Box
                            className="image-box"
                            
                        >
                            <Image
                                fit="cover"
                                src={acf.info_card_picture_3.url}
                            />
                        </Box>
                        <Box
                            className="content-box "
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
                                        style={{ marginBottom: '30px' }}
                                        dangerouslySetInnerHTML={{
                                            __html: acf.info_card_right_title_3
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
                                        style={{width: '11vw'}}
                                    />
                                </Box>
                            </Grid>
                            <Text
                                className="light-text"
                                dangerouslySetInnerHTML={{
                                    __html: acf.info_card_right_3
                                }}
                            />

                            <Button
                                href={footer.acf.book_now_link}
                                target="_blank"
                                label="EXPLORE FROM US"
                                className="buy-now-color to-be-hidden-desktop landing-mobile-explore-button "
                            />

                            
                        </Box>
                        <Box className="background-box">
                            <Image
                                src={'/static/assets/Asset_5.png'}
                                className="tree-asset"
                            />
                            <Image
                                src={'/static/assets/Asset_6.png'}
                                className="triangle-asset"
                            />
                            <Button
                                href={'/explore/'}
                                target="_blank"
                                label="EXPLORE FROM US"
                                className="buy-now-color"
                            />
                        </Box>
                    </Grid>
                </Box>
                {/* <Box className="map-item" style={{border: '1px solid red'}}>
                    <Box id="furthermore-title" >
                        <Heading level="3"> Explore Furthermore </Heading>
                    </Box>
                    <Grid
                        className ="locations around-location boxed-element-no-sides home-map" style={{paddingTop: '0', marginBottom:'10vw'}}>
                        {this.state.locationsExplore.map((location, idx) => {
                                return (
                                    <Button className="buy-now-brown loc-button" key={idx}> {location} </Button>
                                )
                            }
                        )}
                    </Grid>
                </Box>
                <Box
                    className="boxed-element map-explore index-map"
                    style={{ marginBottom: '-262px', paddingTop: '0.5%', position: 'relative' }}
                >
                    <Image src={acf.map.url} />
                    <Button className="explore-link" href="/explore" style={{"position":"absolute","top":"79%","left":"38.5%","minWidth":"434px", "minHeight":"68px"}} > </Button>

                    <Box className="biertan" style={{"position":"absolute","top":"49%","left":"63.5%","minWidth":"103px"}} > <Button className="map-item" href="/explore/biertan-fortified-church/" style={{"minHeight":"48px"}}/> </Box>
                    <Box className="cluj" style={{"position":"absolute","top":"23%","left":"46.5%","minWidth":"120px"}} > <Button className="map-item" href="/explore/the-historical-city-of-cluj/" style={{"minHeight":"68px"}}/> </Box>
                    <Box className="tarnita" style={{"position":"absolute","top":"24%","left":"36%","minWidth":"92px"}} > <Button className="map-item" href="/explore/boat-ride-on-tarnita-and-belis-lake" style={{"minHeight":"67px"}}/> </Box>
                    <Box className="merry" style={{"position":"absolute","top":"1%","left":"37.5%","minWidth":"6.5%"}} > <Button className="map-item" href="/explore/the-merry-cemetery-of-sapanta" style={{"minHeight":"68px"}}/> </Box>
                    <Box className="communism" style={{"position":"absolute","top":"1%","left":"44.5%","minWidth":"7.5%"}} > <Button className="map-item" href="/explore/memorial-of-the-victims-of-communism-and-of-the-resistance" style={{"minHeight":"68px"}}/> </Box>
                    <Box className="churches" style={{"position":"absolute","top":"1%","left":"52.3%","minWidth":"5.5%"}} > <Button className="map-item" href="/explore/the-wooden-churches-in-maramures" style={{"minHeight":"68px"}}/> </Box>
                    <Box className="churches" style={{"position":"absolute","top":"1%","left":"52.3%","minWidth":"5.5%"}} > <Button className="map-item" href="/explore/the-wooden-churches-in-maramures" style={{"minHeight":"68px"}}/> </Box>
                    <Box className="mocanita" style={{"position":"absolute","top":"3%","left":"58.3%","minWidth":"7%"}} > <Button className="map-item" href="/explore/mocanita-on-vaser-valley" style={{"minHeight":"68px"}}/> </Box>
                    <Box className="baciu" style={{"position":"absolute","top":"16%","left":"43.5%","minWidth":"6%"}} > <Button className="map-item" href="/explore/hoia-baciu-haunted-forest" style={{"minHeight":"68px"}}/> </Box>
                    <Box className="sighisoara" style={{"position":"absolute","top":"43.5%","left":"69%","minWidth":"7%"}} > <Button className="map-item" href="/explore/the-medieval-city-of-sighisoara" style={{"minHeight":"48px"}}/> </Box>
                    <Box className="viscri" style={{"position":"absolute","top":"49%","left":"77%","minWidth":"7%"}} > <Button className="map-item" href="/explore/viscri-medieval-city-and-fortified-church" style={{"minHeight":"48px"}}/> </Box>
                    <Box className="fagaras" style={{"position":"absolute","top":"60%","left":"70.5%","minWidth":"7%"}} > <Button className="map-item" href="/explore/fagaras-citadel" style={{"minHeight":"48px"}}/> </Box>
                    <Box className="brasov" style={{"position":"absolute","top":"62%","left":"80.5%","minWidth":"7%"}} > <Button className="map-item" href="/explore/the-historical-city-of-brasov" style={{"minHeight":"48px"}}/> </Box>
                    <Box className="bran" style={{"position":"absolute","top":"79%","left":"73.5%","minWidth":"5%"}} > <Button className="map-item" href="/explore/bran-castle" style={{"minHeight":"67px"}}/> </Box>
                    <Box className="rasnov" style={{"position":"absolute","top":"74%","left":"78.7%","minWidth":"5%"}} > <Button className="map-item" href="/explore/rasnov-citadel" style={{"minHeight":"67px"}}/> </Box>
                    <Box className="peles" style={{"position":"absolute","top":"81.5%","left":"86.7%","minWidth":"5%"}} > <Button className="map-item" href="/explore/peles-castle" style={{"minHeight":"67px"}}/> </Box>
                    <Box className="calnic" style={{"position":"absolute","top":"63%","left":"50%","minWidth":"6%"}} > <Button className="map-item" href="/explore/calnic-fortified-church" style={{"minHeight":"68px"}}/> </Box>
                    <Box className="ravine" style={{"position":"absolute","top":"56%","left":"45.5%","minWidth":"6%"}} > <Button className="map-item" href="/explore/the-red-ravine" style={{"minHeight":"68px"}}/> </Box>
                    <Box className="corvin" style={{"position":"absolute","top":"60%","left":"30.5%","minWidth":"7%"}} > <Button className="map-item" href="/explore/corvin-castle" style={{"minHeight":"68px"}}/> </Box>
                    <Box className="regia" style={{"position":"absolute","top":"69%","left":"35.5%","minWidth":"10%"}} > <Button className="map-item" href="/explore/sarmizegetusa-regia" style={{"minHeight":"68px"}}/> </Box>
                    <Box className="ulpia" style={{"position":"absolute","top":"69%","left":"21.5%","minWidth":"10%"}} > <Button className="map-item" href="/explore/ulpia-traiana-sarmizegetusa" style={{"minHeight":"68px"}}/> </Box>
                    <Box className="retezat" style={{"position":"absolute","top":"77.5%","left":"29%","minWidth":"8.5%"}} > <Button className="map-item" href="/explore/retezat-national-park" style={{"minHeight":"68px"}}/> </Box>

                </Box> */}
            </MainWrapper>
        );
    }
}
