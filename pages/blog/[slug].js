import React, { Component } from "react";
import { Image, Box, Button } from "grommet";

import axios from "axios";

import wpURL from "../../api_cfg";
import MainWrapper from "../../components/MainWrapper";
import BlogPost from "../../components/BlogPost";

export default class extends Component {
    static async getInitialProps(context) {
        const slug = context.query.slug;
        // Make request for posts.
        const pageData = await axios.get(wpURL + `wp/v2/posts?slug=${slug}`);
        const footerData = await axios.get(wpURL + `wp/v2/pages?slug=footer`);

        // Return our only item in array from response to posts object in props.
        return {

            page: pageData.data[0],
            footer: footerData.data[0],
        };
    }

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
    
    
    

    render() {
        const { acf } = this.props.page;
        const { footer } = this.props;
        // console.log('acf:', acf);
        return (
            <MainWrapper
                pageTitle="Discover Raven’s Nest, the Hidden Village in Transylvania!"
                heroBanner={acf.hero_banner.url}
                heroBannerTitle={acf.hero_banner_title}
                heroBannerText={acf.hero_banner_text}
                
                shouldShowBannerText={true}
                isMobile={this.state.isMobile}

                bookNowURL={footer.acf.book_now_link}
                bookNowURLStyle={{ display: "none" }}
                footerData={footer.acf}>
                <Box id="blog-head" className="boxed-element-only-sides">
                    <Image
                        className="left-image"
                        data-aos="fade-zoom-out"
                        src="/static/assets/Asset_3.png"
                        style={{width: '11vw', height: '100%'}}
                    />
                    <Button href="/blog" className="buy-now-color blog-article-top-button" label="BACK TO BLOG" />
                </Box>

                <BlogPost
                    fieldEditor={acf.field_editor_1}
                    leftImage={acf.field_image_left_1.url}
                    rightImage={acf.field_image_right_1.url}
                    fullImage={acf.field_image_full_1.url}
                />

                <BlogPost
                    fieldEditor={acf.field_editor_2}
                    leftImage={acf.field_image_left_2.url}
                    rightImage={acf.field_image_right_2.url}
                    fullImage={acf.field_image_full_2.url}
                />

                <BlogPost
                    fieldEditor={acf.field_editor_3}
                    leftImage={acf.field_image_left_3.url}
                    rightImage={acf.field_image_right_3.url}
                    fullImage={acf.field_image_full_3.url}
                />

                <BlogPost
                    fieldEditor={acf.field_editor_4}
                    leftImage={acf.field_image_left_4.url}
                    rightImage={acf.field_image_right_4.url}
                    fullImage={acf.field_image_full_4.url}
                />

                <BlogPost
                    fieldEditor={acf.field_editor_5}
                    leftImage={acf.field_image_left_5.url}
                    rightImage={acf.field_image_right_5.url}
                    fullImage={acf.field_image_full_5.url}
                />
                <Button href="/blog" className="buy-now-color blog-article-bottom-button" label="BACK TO BLOG" />
            </MainWrapper>
        );
    }
}
