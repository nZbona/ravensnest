import React, { Component, Fragment } from 'react';
import axios from 'axios';

import { Image, Box, Grid, Heading, Text, Button } from 'grommet';
import 'react-responsive-carousel/lib/styles/carousel.css';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';


import { Carousel } from 'react-responsive-carousel';

import MainWrapper from '../components/MainWrapper';
import LocationPage from '../components/LocationPage';
import wpURL from '../api_cfg';

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
                "Bistrita",
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
        // Make request for posts.
        const pageData = await axios.get(wpURL + `wp/v2/pages?slug=${slug}`);
        const locationPageData = await axios.get(
            wpURL + `wp/v2/pages?slug=${locationSlug}`
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

    getLocationPage() {
        const data = this.props.locationData;
        const galleryArray = [];

        if (data) {
            if (data.acf.image_array_1.url) {
                galleryArray.push(data.acf.image_array_1.url);
            }
            if (data.acf.image_array_2.url) {
                galleryArray.push(data.acf.image_array_2.url);
            }
            if (data.acf.image_array_3.url) {
                galleryArray.push(data.acf.image_array_3.url);
            }
            if (data.acf.image_array_4.url) {
                galleryArray.push(data.acf.image_array_4.url);
            }
            if (data.acf.image_array_5.url) {
                galleryArray.push(data.acf.image_array_5.url);
            }

            return (
                <LocationPage
                    infoCardImage={data.acf.info_card_image.url}
                    infoCardTitle={data.acf.info_card_title}
                    infoCardText={data.acf.info_card_text}
                    wideText={data.acf.wide_text}
                    imagesArray={galleryArray}
                />
            );
        }
        return null;
    }

    handleBackToMapClick = () => {
        
    }

    render() {
        const { acf } = this.props.page;
        const { footer } = this.props;
        // console.log('acf', acf);
        return (
            <MainWrapper
                pageTitle="Discover Raven’s Nest, the Hidden Village in Transylvania!"
                heroBanner={acf.hero_banner.url}
                
                shouldShowBannerText={!this.state.isMobile}
                isMobile={this.state.isMobile}

                heroBannerTitle={acf.hero_banner_title}
                heroBannerText={acf.hero_banner_text}
                bookNowURL={footer.acf.book_now_link}
                // bookNowURLStyle="empty"

                footerData={footer.acf}
            >
                <Box className="boxed-element right-side-content around">
                    <Grid
                        // rows={"570px"}
                        // columns={["930px", "930px"]}
                        //columns={['10%', '90%']}
                        // columns="full"
                        className="grid-box"
                        style={{ padding: '0px' }}
                    >
                        <Box>
                            <Image
                                style={{ width: '10vw', marginTop: '-17%' }}
                                src={'/static/assets/Asset_3.png'}
                                id="mountain-1"
                                className="mountain-asset"
                            />
                        </Box>

                        <Box className="content-box info-card intro a-f">
                            <Grid
                                columns={['100%']}
                                justifyContent="between"
                                align="center"
                            >
                                <Box>
                                    <Heading
                                        style={{ marginBottom: '30px' }}
                                        dangerouslySetInnerHTML={{
                                            __html: acf.info_card_right_title_1
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
                                    __html: acf.info_card_right_1
                                }}
                            />
                        </Box>

                        <Box className="background-box first-bckg">
                            <Image
                                style={{ bottom: '3vw', height: '4vw' }}
                                src={'/static/assets/brad1.png'}
                                className="tree-asset"
                            />
                        </Box>
                    </Grid>
                </Box>


                



                <Box
                    className="map-explore"
                    style={{ marginBottom: '24px', paddingBottom: '0', "position" : "relative" }}
                >
                    {
                        !this.state.isMobile && (
                        
                        this.state.map === 'explore'
                            ? (
                                <Fragment>
                                    <Box className="biertan map-square-design" style={{"position":"absolute","top":"54.5%","left":"65%","minWidth":"103px"}} > <Button className="map-item" href="/explore/biertan-fortified-church/" style={{"minHeight":"48px"}}/> </Box>
                                    <Box className="cluj map-square-design" style={{"position":"absolute","top":"26%","left":"47.3%","minWidth":"120px"}} > <Button className="map-item" href="/explore/the-historical-city-of-cluj/" style={{"minHeight":"3.8vw"}}/> </Box>
                                    <Box className="tarnita map-square-design" style={{"position":"absolute","top":"25%","left":"38.5%","minWidth":"92px"}} > <Button className="map-item" href="/explore/boat-ride-on-tarnita-and-belis-lake" style={{"minHeight":"3.8vw"}}/> </Box>
                                    <Box className="merry map-square-design" style={{"position":"absolute","top":"1%","left":"38.5%","minWidth":"6.5%"}} > <Button className="map-item" href="/explore/the-merry-cemetery-of-sapanta" style={{"minHeight":"3.8vw"}}/> </Box>
                                    <Box className="communism map-square-design" style={{"position":"absolute","top":"0.5%","left":"45.5%","minWidth":"8%"}} > <Button className="map-item" href="/explore/memorial-of-the-victims-of-communism-and-of-the-resistance" style={{"minHeight":"3.8vw"}}/> </Box>
                                    <Box className="churches map-square-design" style={{"position":"absolute","top":"1%","left":"53%","minWidth":"6.5%"}} > <Button className="map-item" href="/explore/the-wooden-churches-in-maramures" style={{"minHeight":"3.8vw"}}/> </Box>
                                    <Box className="mocanita map-square-design" style={{"position":"absolute","top":"3.5%","left":"59.3%","minWidth":"8%"}} > <Button className="map-item" href="/explore/mocanita-on-vaser-valley" style={{"minHeight":"3.8vw"}}/> </Box>
                                    <Box className="baciu map-square-design" style={{"position":"absolute","top":"13%","left":"43.5%","minWidth":"6%"}} > <Button className="map-item" href="/explore/hoia-baciu-haunted-forest" style={{"minHeight":"3.8vw"}}/> </Box>
                                    <Box className="sighisoara map-square-design" style={{"position":"absolute","top":"48.5%","left":"71%","minWidth":"7%"}} > <Button className="map-item" href="/explore/the-medieval-city-of-sighisoara" style={{"minHeight":"48px"}}/> </Box>
                                    <Box className="viscri map-square-design" style={{"position":"absolute","top":"55%","left":"79%","minWidth":"7%"}} > <Button className="map-item" href="/explore/viscri-medieval-city-and-fortified-church" style={{"minHeight":"48px"}}/> </Box>
                                    <Box className="fagaras map-square-design" style={{"position":"absolute","top":"67%","left":"72.5%","minWidth":"7%"}} > <Button className="map-item" href="/explore/fagaras-citadel" style={{"minHeight":"48px"}}/> </Box>
                                    <Box className="brasov map-square-design" style={{"position":"absolute","top":"69%","left":"83%","minWidth":"7%"}} > <Button className="map-item" href="/explore/the-historical-city-of-brasov" style={{"minHeight":"48px"}}/> </Box>
                                    <Box className="bran map-square-design" style={{"position":"absolute","top":"88%","left":"75.5%","minWidth":"5%"}} > <Button className="map-item" href="/explore/bran-castle" style={{"minHeight":"3.8vw"}}/> </Box>
                                    <Box className="rasnov map-square-design" style={{"position":"absolute","top":"82.5%","left":"80%","minWidth":"6.5%"}} > <Button className="map-item" href="/explore/rasnov-citadel" style={{"minHeight":"3.8vw"}}/> </Box>
                                    <Box className="peles map-square-design" style={{"position":"absolute","top":"92%","left":"82.5%","minWidth":"5%"}} > <Button className="map-item" href="/explore/peles-castle" style={{"minHeight":"3.8vw"}}/> </Box>
                                    <Box className="calnic map-square-design" style={{"position":"absolute","top":"67%","left":"50.5%","minWidth":"6%"}} > <Button className="map-item" href="/explore/calnic-fortified-church" style={{"minHeight":"3.8vw"}}/> </Box>
                                    <Box className="ravine map-square-design" style={{"position":"absolute","top":"62.5%","left":"46.5%","minWidth":"6%"}} > <Button className="map-item" href="/explore/the-red-ravine" style={{"minHeight":"3.8vw"}}/> </Box>
                                    <Box className="corvin map-square-design" style={{"position":"absolute","top":"67%","left":"31%","minWidth":"7%"}} > <Button className="map-item" href="/explore/corvin-castle" style={{"minHeight":"3.8vw"}}/> </Box>
                                    <Box className="regia map-square-design" style={{"position":"absolute","top":"76.5%","left":"36%","minWidth":"10%"}} > <Button className="map-item" href="/explore/sarmizegetusa-regia" style={{"minHeight":"3.8vw"}}/> </Box>
                                    <Box className="ulpia map-square-design" style={{"position":"absolute","top":"77%","left":"21.5%","minWidth":"10%"}} > <Button className="map-item" href="/explore/ulpia-traiana-sarmizegetusa" style={{"minHeight":"3.8vw"}}/> </Box>
                                    <Box className="retezat map-square-design" style={{"position":"absolute","top":"87%","left":"30%","minWidth":"8.5%"}} > <Button className="map-item" href="/explore/retezat-national-park" style={{"minHeight":"3.8vw"}}/> </Box>

                                </Fragment>

                            ) : (
                                <Fragment>
                                    <Box className="vanatarele map-square-design" style={{"position":"absolute","top":"52.5%","left":"36.5%","minWidth":"8%"}} > <Button className="map-item" href="/explore/the-vanatarele-ponorului-reserve/" style={{"minHeight":"6vw"}}/> </Box>
                                    <Box className="papara map-square-design" style={{"position":"absolute","top":"27.5%","left":"35.5%","minWidth":"12%"}} > <Button className="map-item" href="/explore/cave-of-papara/" style={{"minHeight":"3.1vw"}}/> </Box>
                                    <Box className="dragon map-square-design" style={{"position":"absolute","top":"15.5%","left":"49.6%","minWidth":"10%"}} > <Button className="map-item" href="/explore/dragons-gate-and-grosi-cave" style={{"minHeight":"4vw"}}/> </Box>
                                    <Box className="sipote map-square-design" style={{"position":"absolute","top":"13.5%","left":"42%","minWidth":"7%"}} > <Button className="map-item" href="/explore/sipote-waterfall" style={{"minHeight":"4vw"}}/> </Box>
                                    <Box className="trascau map-square-design" style={{"position":"absolute","top":"11.3%","left":"61%","minWidth":"6.3%"}} > <Button className="map-item" href="/explore/coltesti-fortress" style={{"minHeight":"4vw"}}/> </Box>
                                    <Box className="carolina map-square-design" style={{"position":"absolute","top":"83%","left":"13%","minWidth":"13%"}} > <Button className="map-item" href="/explore/the-alba-iulia-carolina-citadel" style={{"minHeight":"5.1vw"}}/> </Box>
                                    <Box className="rosia map-square-design" style={{"position":"absolute","top":"66.5%","left":"16.5%","minWidth":"14%"}} > <Button className="map-item" href="/explore/rosia-montana" style={{"minHeight":"5.1vw"}}/> </Box>
                                    <Box className="rimetea map-square-design" style={{"position":"absolute","top":"11.3%","left":"68.5%","minWidth":"6.5%"}} > <Button className="map-item" href="/explore/rimetea-the-traditional-hungarian-village" style={{"minHeight":"48px"}}/> </Box>
                                    <Box className="scarita map-square-design" style={{"position":"absolute","top":"3%","left":"29.5%","minWidth":"12.5%"}} > <Button className="map-item" href="/explore/scarita-belioara-natural-reserve" style={{"minHeight":"4vw"}}/> </Box>
                                    <Box className="bear map-square-design" style={{"position":"absolute","top":"15.5%","left":"7.5%","minWidth":"5%"}} > <Button className="map-item" href="/explore/bears-cave" style={{"minHeight":"4vw"}}/> </Box>
                                    <Box className="ponor map-square-design" style={{"position":"absolute","top":"13.8%","left":"12.5%","minWidth":"6.5%"}} > <Button className="map-item" href="/explore/natural-fortress-of-ponor-2" style={{"minHeight":"4vw"}}/> </Box>
                                    <Box className="scarisoara map-square-design" style={{"position":"absolute","top":"17.5%","left":"19%","minWidth":"8%"}} > <Button className="map-item" href="/explore/scarisoara-ice-cave" style={{"minHeight":"4vw"}}/> </Box>
                                    <Box className="turzii map-square-design" style={{"position":"absolute","top":"3.5%","left":"75.5%","minWidth":"9.5%"}} > <Button className="map-item" href="/explore/turda-gorges" style={{"minHeight":"3.1vw"}}/> </Box>
                                    <Box className="turda map-square-design" style={{"position":"absolute","top":"8.2%","left":"88.5%","minWidth":"7.5%"}} > <Button className="map-item" href="/explore/turda-salt-mine" style={{"minHeight":"4.2vw"}}/> </Box>
                                    <Box className="cheia map-square-design" style={{"position":"absolute","top":"73%","left":"41.6%","minWidth":"10%"}} > <Button className="map-item" href="/explore/the-deserted-village-of-cheia" style={{"minHeight":"4vw"}}/> </Box>
                                    <Box className="ramet map-square-design" style={{"position":"absolute","top":"76.5%","left":"51.5%","minWidth":"8%"}} > <Button className="map-item" href="/explore/ramet-gorges" style={{"minHeight":"4vw"}}/> </Box>
                                    <Box className="craivii map-square-design" style={{"position":"absolute","top":"86%","left":"60.5%","minWidth":"9%"}} > <Button className="map-item" href="/explore/the-ancient-fortress-of-apoulon-craiva" style={{height: '4vw'}}/> </Box>
                                    <Box className="belis map-square-design" style={{"position":"absolute","top":"1%","left":"17%","minWidth":"8%", }} > <Button className="map-item" href="/explore/boat-ride-on-tarnita-and-belis-lake" style={{height: '3.5vw'}}/> </Box>

                                </Fragment>
                            )
                        )
                    }


                    
                

                {
                    
                    this.state.isMobile ? 
                    (
                        <div className = 'mobileMapDesign'> 
                            <Image id={"map"}
                                className={this.state.isMobile && "mobile-map"}
                                src={
                                    this.state.map == 'around'
                                    ? acf.map_around.url
                                        : acf.map_explore.url

                                }
                            />
                            <Image
                                className={'mobileMapDesignAssetImg'}
                                src={require("../public/static/assets/Asset_6.png")}
                            />
                        </div>
                    ) : 
                        <Image id={"map"}
                                src={
                                    this.state.map == 'around'
                                    ? acf.map_around.url
                                        : acf.map_explore.url

                                }
                            />

                }
                
                    
                </Box>

                
                

                {
                    this.state.map === 'around'
                        ?
                        (
                            this.state.isMobile && (
                                <Box className="map-item">
                                <Box id="around-title">
                                    <Heading level="2"> Around us </Heading>
                                </Box>
                                <Carousel
                                    axis='vertical'
                                    showThumbs={false}
                                    showStatus={false}
                                    showIndicators={false}
                                    // infiniteLoop={true}
                                    transitionTime={150}
                                    >
                                    <Button className="buy-now-brown loc-button" href="/explore/biertan-fortified-church/" > Biertan </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/the-historical-city-of-cluj/" > Cluj Napoca </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/boat-ride-on-tarnita-and-belis-lake" > Tarnita Lake </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/the-merry-cemetery-of-sapanta" > Merry Cemetery </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/memorial-of-the-victims-of-communism-and-of-the-resistance" > Communism Museum </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/the-wooden-churches-in-maramures" > Wooden Churches </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/mocanita-on-vaser-valley" > Mocanita Steam Train </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/hoia-baciu-haunted-forest" > Hoia Haunted Forest </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/the-medieval-city-of-sighisoara" > Sighisoara </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/viscri-medieval-city-and-fortified-church" > Viscri </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/fagaras-citadel" > Fagaras </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/the-historical-city-of-brasov" > Brasov </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/bran-castle" > Bran Castle </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/rasnov-citadel" > Rasnov Fortress </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/peles-castle" > Peles Castle </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/calnic-fortified-church" > Calnic Fortress </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/the-red-ravine" > Red Ravine </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/corvin-castle" > Corvinesti Castle </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/sarmizegetusa-regia" > Sarmizegetusa Regia </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/ulpia-traiana-sarmizegetusa" > Sarmizegetusa Ulpia Traiana </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/retezat-national-park" > Retezat National Park </Button>
                                    {/* {this.state.locationsAround.map((location, idx) => {
                                            return (
                                                <Button className="buy-now-brown loc-button" key={idx}> {location} </Button>
                                            )
                                        }
                                    )} */}
                                    
                                </Carousel>
                            </Box>
                             )
                            
                            
                        ) :  this.state.isMobile && (
                                <Box className="map-item">
                                <Box id="around-title">
                                    <Heading level="2"> Explore furthermore | Drive everywhere </Heading>
                                </Box>
                                <Carousel
                                    axis='vertical'
                                    showThumbs={false}
                                    showStatus={false}
                                    showIndicators={false}
                                    // infiniteLoop={true}
                                    transitionTime={150}
                                >

                                    <Button className="buy-now-brown loc-button" href="/explore/the-vanatarele-ponorului-reserve/" > Vanatarele Ponorului Waterfall </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/cave-of-papara/" > Cave of Papara </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/dragons-gate-and-grosi-cave" > Dragon's Gate & Grosi Cave </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/sipote-waterfall" > Sipote Waterfalls </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/coltesti-fortress" > Coltesti Fortress </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/the-alba-iulia-carolina-citadel" > Carolina Fortress Alba Iulia </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/rosia-montana" > Rosia Mantana Ancient Goldmines </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/rimetea-the-traditional-hungarian-village" > Rimetea </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/scarita-belioara-natural-reserve" > Scarita-Belioara Natural Reserve </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/bears-cave" > Bear's Cave </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/natural-fortress-of-ponor-2" > Ponor Fortress </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/scarisoara-ice-cave" > Scarisoara Glacier </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/turda-gorges" > Turda Gorges</Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/turda-salt-mine" > Turda Salt Mine </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/the-deserted-village-of-cheia" > Cheia Ghost Village </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/ramet-gorges" > Rametului Gorges </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/the-ancient-fortress-of-apoulon-craiva" > Craivii Rock </Button>
                                    <Button className="buy-now-brown loc-button" href="/explore/boat-ride-on-tarnita-and-belis-lake" > Belis Lake </Button>
                                    
                                    {/* {this.state.locationsExplore.map((location, idx) => {
                                            return (
                                                <Button className="buy-now-brown loc-button" key={idx}> {location} </Button>
                                            )
                                        }
                                    )} */}
                                    
                                </Carousel>
                            </Box>
                             )
                    }


                    <Box className="boxed-element map-buttons">
                        <Box className="map-button" >
                            <Button
                                label="AROUND US"
                                className={
                                    this.state.map === 'around'
                                        ? 'buy-now-brown'
                                        : 'buy-now-color'
                                }
                                onClick={() => this.switchMap('around')}
                            />
                        </Box>
                        <Box className="map-button" >
                            <Button
                                label="EXPLORE FURTHERMORE"
                                className={
                                    this.state.map === 'explore'
                                        ? 'buy-now-brown '
                                        : 'buy-now-color '
                                }
                                onClick={() => this.switchMap('explore')}
                            />
                        </Box>
                    </Box>
                    
                    {/* INFO CARD 2 

                    <Box
                    id="explore_info-card-2"
                    className="boxed-element-only-sides info-card-story"
                >
                    <Image
                        className="image-box"
                        data-aos="fade-zoom-out"
                        src={acf.map_explore.url}
                    />

                    <Box className="content-box">
                        <Heading
                            className="no-top-space"
                            style={{maxWidth: '837px'}}
                            dangerouslySetInnerHTML={{
                                 __html: acf.info_card_right_title_1
                            }}
                            level="2"
                        />
                        <Image
                            className="break-line-asset"
                            data-aos="fade-zoom-out"
                            src="/static/assets/Asset_4.png"
                        />
                        <Text
                            // className="light-text"
                            // dangerouslySetInnerHTML={{
                            //     __html: acf.info_card_right_1
                            // }}
                        >
                        Helpful information • From Raven’s Nest 20 -30 min hike, about 1 km. Easy access. Mountain views and rural landscapes to be seen along the way. • Basic hiking gear required. • There is an observatory terrace overlooking the waterfall. • To reach the cave from the waterfall, go back on the same blue trail you came and before you exit the forest, take a left turn downstream. Y ou will ﬁnd the small lake and then the cave
                         </Text>
                    </Box>
                    <Box className="background-box explore_background_box_2">
                        {
                            <Image
                                src={'/static/assets/Asset_8.png'}
                                className="column-asset"
                            />
                        }
                    </Box>
                </Box>

                

                <Grid
                    id="description-1"
                    className="boxed-element description expore_description_grid"
                >
                    <Box className="description-text">
                        <Text
                            className="light-text"
                            // dangerouslySetInnerHTML={{
                            //     __html: acf.description_1_text
                            // }}
                        > The huge funnel of Vânătarele Ponorului along with Dâlbina Cave that opens up in its northern extremity is situ-
                        ated at the south-western edge of the Bedeleu Massif, in the Trascau Mountains. Dâlbina waterfall is formed by

                        the confluence of three small mountain rivers: Valea Poienii, Valea Seaca, and Valea Ponorului. They are joined
                        together 200m before the reserve and create the spectacular Vânătării Keys.
                        The name “vânătări” comes from an archaic meaning of the word “vânăt”, “livid or violet-blue“ color and refers to
                        the special stripes that time painted on the tall limestone wall. In the folkloric language, a “dâlbina” is used to
                        describe a whirlpool. 
                        <br></br><br></br>
                        The huge funnel of Vânătarele Ponorului along with Dâlbina Cave that opens up in its northern extremity is situ-
                        ated at the south-western edge of the Bedeleu Massif, in the Trascau Mountains. Dâlbina waterfall is formed by

                        the confluence of three small mountain rivers: Valea Poienii, Valea Seaca, and Valea Ponorului. They are joined
                        together 200m before the reserve and create the spectacular Vânătării Keys.
                        The name “vânătări” comes from an archaic meaning of the word “vânăt”, “livid or violet-blue“ color and refers to
                        the special stripes that time painted on the tall limestone wall. In the folkloric language, a “dâlbina” is used to
                        describe a whirlpool. 
                        </Text>
                    </Box>
                    <Image
                        className="explore-description-image"
                        data-aos="fade-zoom-out"
                        src={acf.map_explore.url}
                    />
                </Grid>

                <Box className="boxed-element expore-back-to-map-button">
                    <Box className="map-button" >
                        <Button
                            // label="Back to map"
                            className={'buy-now-color'}
                            onClick={this.handleBackToMapClick}
                        > <a href='#map'> Back to map </a> </Button>
                    </Box>
                </Box>

                <Box className="explore-mobile-image"> 
                <Image
                        className=""
                        data-aos="fade-zoom-out"
                        src={acf.map_explore.url}
                    />
                <Image
                    // className="break-line-asset"
                    data-aos="fade-zoom-out"
                    src="/static/assets/Asset_1.png"
                />
                </Box> */} 
                {this.getLocationPage()}
            </MainWrapper>
        );
    }
}
