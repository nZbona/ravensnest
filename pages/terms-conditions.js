import MainWrapper from '../components/MainWrapper';
import React, { Component } from 'react';
import axios from 'axios';
import wpURL from '../api_cfg';
import { Image, Box, Button, Grid, Text } from 'grommet';

export default class extends Component {

    static async getInitialProps(context) {
        const slug = 'terms-conditions'; //context.query.slug

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
                bookNowURL={footer.acf.book_now_link}
                bookNowURLStyle={{ display: 'none' }}
                footerData={footer.acf}
            >
                <Box id="blog-head" className="boxed-element-only-sides">
                    <Image
                        className="left-image"
                        data-aos="fade-zoom-out"
                        src="/static/assets/Asset_3.png"
                    />
                    <Button
                        href="/"
                        className="buy-now-color"
                        label="BACK TO HOME"
                    />
                </Box>

                <Grid className="blog-post boxed-element-only-sides">
                    <Text
                        style={{"fontSize":"calc(0.2em + 1vw)"}}
                        className="text-box light-text"
                        dangerouslySetInnerHTML={{
                            __html: acf.terms_conditions_text
                        }}
                    />
                </Grid>
            </MainWrapper>
        );
    }
}
