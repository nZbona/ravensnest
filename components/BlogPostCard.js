import React, { Component } from "react";

import { Box, Image, Grid, Text, Button, Heading } from "grommet";

export default class BlogPostCard extends Component {
    constructor(props) {
        super(props);
    }

    getAsset() {
        switch (this.props.idx % 3) {
            case 0:
                return (
                    <Image
                        src={"/static/assets/mountain-white.png"}
                        className="mountain-asset-blog"
                    />
                );
            case 1:
                return (
                    <Image
                        src={"/static/assets/Asset_8.png"}
                        className="column-asset"
                    />
                );

            case 2:
                return <Image src={"/static/assets/brad1.png"} className="bradut-asset" />;

            default:
                return (
                    <Image
                        src={"/static/assets/mountain-white.png"}
                        className="mountain-asset-blog"
                    />
                );
        }
    }

    getButton() {
        switch (this.props.idx % 3) {
            case 0:
                return (
                    <Button
                        label="READ"
                        className="read mountain-button"
                        href={`/blog/${this.props.blogSlug}`}
                    />
                );
            case 1:
                return (
                    <Button label="READ" className="read" href={`/blog/${this.props.blogSlug}`} />
                );
            case 2:
                return (
                    <Button
                        label="READ"
                        className="read tree-button"
                        href={`/blog/${this.props.blogSlug}`}
                    />
                );
            default:
                return (
                    <Button
                        label="READ"
                        className="read mountain-button"
                        href={`/blog/${this.props.blogSlug}`}
                    />
                );
        }
    }

    render() {
        return (
            <Box
                className=" blog-template-2"
                style={{
                    backgroundImage: `url(${this.props.bgImg})`,
                    

                }}>
                <Box className=" left-side-content ">
                    <Grid
                        rows={"570px"}
                        columns="full"
                        className="grid-box-blog"
                        style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                        <Box className="content-box info-card-left reserve blog-box-brown-2">
                            <Box
                                className="boxie"
                                style={{ display: "grid", gridTemplateRows: "60% 50%" }}>
                                <Heading
                                    className="blog-title"
                                    dangerouslySetInnerHTML={{
                                        __html: this.props.blogTitle,
                                    }}
                                    level="2"
                                />
                                <Image
                                    style={{
                                        marginBottom: "0.5vw",
                                        height: "6px",
                                        width: "218px",
                                        paddingLeft: "4%",
                                        marginTop: '0.4vw',
                                    }}
                                    src={"/static/assets/line-sm.png"}
                                    className="break-line"
                                />
                            </Box>
                            <Text
                                className="light-text blog-post-colors"
                                dangerouslySetInnerHTML={{
                                    __html: `author: ${this.props.blogAuthor}<br\>
                                        date: ${new Intl.DateTimeFormat("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }).format(new Date(this.props.blogDate))}`,
                                }}
                            />
                        </Box>

                        <Box className="background-box blog-box">
                            <Grid columns={["9%"]}>{this.getAsset()}</Grid>
                            <Box className="read-button " style={{ width: "90.5%" }}>
                                {this.getButton()}
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        );
    }
}
