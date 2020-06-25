import React, { Component } from "react";
import axios from "axios";

import { Image, Box, Grid, Heading, Text, Button } from "grommet";

import MainWrapper from "../components/MainWrapper";
import BlogPostCard from "../components/BlogPostCard";
import wpURL from "../api_cfg";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            map: "explore",
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
                "Carolina Fortress Alba Iulia",
            ],
            locationsAround: [
                "ORADEA",
                "ARAD",
                "TIMISOARA",
                "Tarnita Lake",
                "CLUJ NAPOCA",
                "TRAGU MURES",
                "Biertan",
                "BISTRITA",
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
        const slug = "blog"; //context.query.slug

        // Make request for posts.
        const blogPosts = await axios.get(wpURL + "wp/v2/posts?_embed");
        const pageData = await axios.get(wpURL + `wp/v2/pages?slug=${slug}`);
        const footerData = await axios.get(wpURL + `wp/v2/pages?slug=footer`);

        // Return our only item in array from response to posts object in props.
        return {
            page: pageData.data[0],
            blogs: blogPosts.data,
            footer: footerData.data[0],
        };
    }

    render() {
        const { acf } = this.props.page;
        const { footer } = this.props;
        // console.log('blogPost acf: ', this.props.blogs[0].acf);

        return (
            <MainWrapper
                pageTitle="Discover Raven’s Nest, the Hidden Village in Transylvania!"
                heroBanner={acf.hero_banner.url}
                heroBannerTitle="empty"

                shouldShowBannerText={!this.state.isMobile}
                isMobile={this.state.isMobile}
                
                bookNowURL={footer.acf.book_now_link}
                bookNowURLStyle={{ display: "none" }}
                footerData={footer.acf}
                bookNowButtonVisibility='false'
            >
                
                <Box className="boxed-element right-side-content around blog-top-info-card">
                    <Grid
                        // rows={"570px"}
                        // columns={["930px", "930px"]}
                        // columns={["10%", "90%"]}
                        columns="full"
                        className="grid-box"
                        style={{ padding: "0px" }}>
                        <Box className="content-box">
                            <Grid columns={["100%"]} justifyContent="between" align="center">
                                <Box>
                                    <Heading
                                        style={{ marginBottom: "30px", lineHeight: "60px" }}
                                        dangerouslySetInnerHTML={{
                                            __html: acf.info_card_right_title_1,
                                        }}
                                        level="2"
                                    />
                                    <Image
                                        style={{ marginBottom: "44px" }}
                                        src={"/static/assets/Asset_4.png"}
                                        className="break-line-asset"
                                    />
                                </Box>
                            </Grid>
                            <Text
                                className="light-text"
                                dangerouslySetInnerHTML={{
                                    __html: acf.info_card_right_1,
                                }}
                            />
                        </Box>

                        <Box className="background-box">
                            <Image
                                style={{
                                    bottom: "3vw",
                                    height: "4.7vw",
                                    right: "10.3%",
                                }}
                                src={"/static/assets/Asset_5.png"}
                                className="tree-asset"
                            />
                        </Box>
                    </Grid>
                </Box>

                <Grid
                    columns={{ count: "fit", size: "488px " }}
                    className="blog-grid boxed-element nume"
                    style={{ padding: "4% 8%", }}
                    // gap='small'
                >
                    
                    {this.props.blogs.map((blogPost, idx) => {
                        // console.log(blogPost.acf.hero_banner);
                        return (
                            <BlogPostCard
                                key={"blog-post" + blogPost.id}
                                idx={idx}
                                bgImg={blogPost.acf.hero_banner.url}
                                blogTitle={blogPost.title.rendered}
                                blogAuthor={blogPost._embedded.author[0].name}
                                blogDate={blogPost.date}
                                blogSlug={blogPost.slug}
                            />
                        );
                    })}
                </Grid>

                <Box className="load-more-box">
                    <Button label="LOAD MORE" className="load-more" />
                </Box>
            </MainWrapper>
        );
    }
}
