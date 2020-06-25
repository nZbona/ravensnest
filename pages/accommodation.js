import React, { Component } from "react";
import Router from 'next/router'

// import { Image, Box, Grid, Heading, Text, Button } from "grommet";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import axios from "axios";

// import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

// import MainWrapper from "../components/MainWrapper";
// import wpURL from "../api_cfg";

export default class extends Component {
    // static async getInitialProps(context) {
        
        
    //     const slug = "accomodation"; //context.query.slug

    //     // Make request for posts.
    //     const pageData = await axios.get(wpURL + `wp/v2/pages?slug=${slug}`);
    //     const footerData = await axios.get(wpURL + `wp/v2/pages?slug=footer`);

    //     // Return our only item in array from response to posts object in props.
    //     return {
    //         page: pageData.data[0],
    //         footer: footerData.data[0],
    //     };

        
        
    // }

    constructor(props) {
        super(props);
        // this.state = {
        //     readMoreRight1clicked: false,
        //     readMoreLeft1clicked: false,
        //     readMoreRight2clicked: false,
        //     readMoreLeft2clicked: false,
        //     readMoreRight3clicked: false,
        //     readMoreTermsclicked: false,
        // };
    }
    

    componentDidMount() {
        Router.push('/accommodation/houses');
    }

    // readMoreRight1click = () => {
    //     this.setState({ readMoreRight1clicked: true });
    // };
    // readLessRight1click = () => {
    //     this.setState({ readMoreRight1clicked: false });
    // };
    // readMoreLeft1click = () => {
    //     this.setState({ readMoreLeft1clicked: true });
    // };
    // readLessLeft1click = () => {
    //     this.setState({ readMoreLeft1clicked: false });
    // };
    // readMoreRight2click = () => {
    //     this.setState({ readMoreRight2clicked: true });
    // };
    // readLessRight2click = () => {
    //     this.setState({ readMoreRight2clicked: false });
    // };
    // readMoreLeft2click = () => {
    //     this.setState({ readMoreLeft2clicked: true });
    // };
    // readLessLeft2click = () => {
    //     this.setState({ readMoreLeft2clicked: false });
    // };
    // readMoreRight3click = () => {
    //     this.setState({ readMoreRight3clicked: true });
    // };
    // readLessRight3click = () => {
    //     this.setState({ readMoreRight3clicked: false });
    // };
    // readMoreTermsClick = () => {
    //     this.setState({ readMoreTermsClicked: true });
    // };
    // readLessTermsClick = () => {
    //     this.setState({ readMoreTermsClicked: false });
    // };
    render() {
        // const { acf } = this.props.page;
        // const { footer } = this.props; 

        return (
            <div>
            {/* <MainWrapper
                pageTitle="Discover Raven’s Nest, the Hidden Village in Transylvania!"
                heroBanner={acf.hero_banner.url}
                heroBannerTitle={acf.hero_banner_title}
                heroBannerText={acf.hero_banner_text}
                bookNowURL={footer.acf.book_now_link}
                bookNowURLStyle={{ marginBottom: "1px" }}
                footerData={footer.acf}>
                <Box className="boxed-element-no-sides wide-text">
                    <Box className="boxed-element-only-sides">
                        <Text dangerouslySetInnerHTML={{ __html: acf.wide_text }} />
                    </Box>
                </Box>

                <Box
                    className={
                        "boxed-element right-side-content house" +
                        (this.state.readMoreRight1clicked ? " mb " : "  ")
                    }
                    style={{ marginBottom: this.state.readMoreRight1clicked ? "5%" : "0" }}>
                    <Grid rows={"570px"} columns="full" className="grid-box">
                        <Box
                            className="inf-crd-img image-box"
                            style={{ width: "56%", top: "80px" }}>
                            <Image
                                className="bckg-image"
                                fit="cover"
                                src={acf.info_card_right_picture_1.url}
                            />
                        </Box>
                        <Box
                            className="content-box info-card notus-house"
                            style={{
                                padding: "32px 4.5% 50px 5%",
                                minWidth: "53%",
                            }}>
                            <Grid
                                className="heading-grid"
                                columns={["65%", "25%"]}
                                justifyContent="between"
                                align="center">
                                <Box>
                                    <Heading
                                        style={{
                                            marginBottom: "30px",
                                            lineHeight: "60px",
                                        }}
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
                                <Box>
                                    <Image
                                        src={"/static/assets/Asset_3.png"}
                                        className="mountain-Asset_to-be-hidden-mobile"
                                    />
                                </Box>
                            </Grid>
                            <Text
                                className="light-text"
                                dangerouslySetInnerHTML={{
                                    __html: acf.info_card_right_1,
                                }}
                            />
                            {this.state.readMoreRight1clicked ? (
                                <Box>
                                    <Text
                                        className="light-text"
                                        dangerouslySetInnerHTML={{
                                            __html: acf.info_card_right_read_more_1,
                                        }}
                                    />
                                    <Button
                                        onClick={this.readLessRight1click}
                                        className="see-less"
                                        style={{ margin: "0 auto" }}
                                        icon={<FontAwesomeIcon icon={faChevronUp} />}
                                    />
                                </Box>
                            ) : (
                                <Text />
                            )}
                        </Box>
                        <Box className="background-box">
                            <Button
                                onClick={this.readMoreRight1click}
                                target="_blank"
                                label="READ MORE"
                                className={
                                    "buy-now-color r-notus " +
                                    (this.state.readMoreRight1clicked ? " hidebtn " : " read-more ")
                                }
                                style={{
                                    color: "#fff",
                                    borderColor: "#fff",
                                    position: "absolute",
                                    bottom: "10%",
                                    right: "20%",
                                }}
                            />

                            <Image
                                className={
                                    "readmore-assets" +
                                    (this.state.readMoreRight1clicked ? " hide-r " : " ")
                                }
                                src={"/static/assets/brad1.png"}
                                style={{
                                    position: "absolute",
                                    bottom: "11%",
                                    right: "9%",
                                    height: "4vw",
                                }}
                            />
                        </Box>
                    </Grid>
                </Box>

                <Box
                    className={
                        "boxed-element left-side-content house" +
                        (this.state.readMoreRight1clicked ? "  " : "  ")
                    }
                >
                    <Grid
                        rows={"570px"}
                        columns="full"
                        // className="grid-box-reverse"
                        style={{ position: "relative" }}>
                        <Box
                            className="image-box inf-crd-img"
                            style={{
                                top: "17.5%",
                                left: "40%",
                                height: "650px",
                            }}>
                            <Image
                                className="bckg-image"
                                data-aos="fade-zoom-out"
                                fit="cover"
                                src={acf.info_card_left_picture_1.url}
                            />
                        </Box>
                        <Box
                            className="content-box info-card-left median-house"
                            style={{
                                top: "10%",
                                left: "7.5%",
                                minWidth: "45%",
                                padding: "2% 2.5% 3% 4%",
                            }}>
                            <Box>
                                <Heading
                                    style={{
                                        marginBottom: "30px",
                                        lineHeight: "60px",
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: acf.info_card_left_title_1,
                                    }}
                                    level="2"
                                />
                                <Image
                                    style={{ marginBottom: "44px" }}
                                    src={"/static/assets/Asset_4.png"}
                                    className="break-line-asset"
                                />
                            </Box>
                            <Text
                                className="light-text"
                                dangerouslySetInnerHTML={{
                                    __html: acf.info_card_left_1,
                                }}
                            />
                            {this.state.readMoreLeft1clicked ? (
                                <Box>
                                    <Text
                                        className="light-text"
                                        dangerouslySetInnerHTML={{
                                            __html: acf.info_card_left_read_more_1,
                                        }}
                                    />
                                    <Button
                                        onClick={this.readLessLeft1click}
                                        className="see-less"
                                        style={{ margin: "0 auto" }}
                                        icon={<FontAwesomeIcon icon={faChevronUp} />}
                                    />
                                </Box>
                            ) : (
                                <Text />
                            )}
                        </Box>
                        <Box className="background-box" style={{ width: "65%", height: "650px" }}>
                            <Image
                                className={
                                    "readmore-assets column-asset " +
                                    (this.state.readMoreLeft1clicked ? " hide-r " : " ")
                                }
                                src={"/static/assets/Asset_8.png"}
                                style={{ marginTop: "9%", marginLeft: "5%" }}
                            />
                            <Button
                                onClick={this.readMoreLeft1click}
                                target="_blank"
                                label="READ MORE"
                                className={
                                    "buy-now-color r-median " +
                                    (this.state.readMoreLeft1clicked ? " hidebtn " : " read-more ")
                                }
                                style={{
                                    color: "#fff",
                                    borderColor: "#fff",
                                    position: "absolute",
                                    bottom: "10%",
                                    left: "13%",
                                }}
                            />
                        </Box>
                    </Grid>
                </Box>

                <Box
                    className="boxed-element right-side-content house"
                    style={{
                        marginBottom: "0",
                        minHeight: this.state.readMoreRight2clicked ? "44rem" : "32rem",
                    }}>
                    <Grid
                        rows={"570px"}
                        columns="full"
                        className="grid-box"
                        style={{ marginBottom: "0", marginTop: "5%" }}>
                        <Box
                            className="image-box inf-crd-img"
                            style={{ width: "56%", top: "-10%" }}>
                            <Image fit="cover" src={acf.info_card_right_picture_2.url} />
                        </Box>
                        <Box
                            className="content-box info-card borean-house"
                            style={{
                                padding: "32px 4.5% 50px 5%",
                            }}>
                            <Grid
                                justifyContent="between"
                                align="center">
                                <Box>
                                    <Heading
                                        style={{
                                            marginBottom: "30px",
                                            lineHeight: "60px",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: acf.info_card_right_title_2,
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
                                    __html: acf.info_card_right_2,
                                }}
                            />
                            {this.state.readMoreRight2clicked ? (
                                <Box>
                                    <Text
                                        className="light-text"
                                        dangerouslySetInnerHTML={{
                                            __html: acf.info_card_right_read_more_2,
                                        }}
                                    />
                                    <Button
                                        onClick={this.readLessRight2click}
                                        className="see-less"
                                        style={{ margin: "0 auto" }}
                                        icon={<FontAwesomeIcon icon={faChevronUp} />}
                                    />
                                </Box>
                            ) : (
                                <Text />
                            )}
                        </Box>
                        <Box className="background-box">
                            <Image
                                src={"/static/assets/Asset_5.png"}
                                className={
                                    "tree-asset " +
                                    (this.state.readMoreRight2clicked ? " hide-r " : " ")
                                }
                                style={{
                                    height: "5vw",
                                    width: "auto",
                                    top: "40%",
                                    right: "4%",
                                }}
                            />
                            <Button
                                onClick={this.readMoreRight2click}
                                target="_blank"
                                label="READ MORE"
                                className={
                                    "buy-now-color r-borean" +
                                    (this.state.readMoreRight2clicked ? " hidebtn " : " read-more ")
                                }
                                style={{
                                    color: "#fff",
                                    borderColor: "#fff",
                                    position: "absolute",
                                    right: "20%",
                                    bottom: "26%",
                                }}
                            />
                            <Image
                                className={
                                    "readmore-assets" +
                                    (this.state.readMoreRight2clicked ? " hide-r " : " ")
                                }
                                src={"/static/assets/Asset_22.png"}
                                style={{
                                    height: "25px",
                                    height: "25px",
                                    width: "35%",
                                    position: "absolute",
                                    bottom: "9%",
                                    right: "5%",
                                }}
                            />
                        </Box>
                    </Grid>
                </Box>

                <Box className="boxed-element-no-sides" style={{ color: "#7c5e49" }}>
                    <Grid columns={["65%", "35%"]} className="boxed-element-only-sides terms rates">
                        <Box>
                            <Box id="rates">
                                <Heading
                                    dangerouslySetInnerHTML={{
                                        __html: acf.rates_title,
                                    }}
                                    level="2"
                                />
                                <Image
                                    className="underline-title"
                                    data-aos="fade-zoom-out"
                                    src="/static/assets/Asset_4.png"
                                    style={{
                                        width: "25%",
                                        height: "6px",
                                        marginTop: " -75px",
                                    }}
                                />
                                <Text
                                    style={{
                                        lineHeight: "23px",
                                        fontSize: "20px",
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: acf.rates_title_extra_text,
                                    }}
                                />

                                <Text
                                    dangerouslySetInnerHTML={{
                                        __html: acf.rates_prices,
                                    }}
                                />
                            </Box>

                            <Box id="general-terms">
                                <Heading
                                    dangerouslySetInnerHTML={{
                                        __html: acf.general_terms_title,
                                    }}
                                    level="3"
                                />
                                <Image
                                    className="underline-title"
                                    data-aos="fade-zoom-out"
                                    src="/static/assets/Asset_4.png"
                                    style={{
                                        width: "25%",
                                        height: "auto",
                                        marginTop: " -38px",
                                        height: "6px",
                                    }}
                                />
                                <Text
                                    style={{
                                        lineHeight: "23px",
                                        fontSize: "20px",
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: acf.general_terms,
                                    }}
                                />
                            </Box>

                            <Box id="cancellation-terms">
                                <Heading
                                    dangerouslySetInnerHTML={{
                                        __html: acf.terms_of_cancellation_title,
                                    }}
                                    level="3"
                                />
                                <Image
                                    className="underline-title"
                                    data-aos="fade-zoom-out"
                                    src="/static/assets/Asset_4.png"
                                    style={{
                                        width: "25%",
                                        height: "auto",
                                        marginTop: " -38px",
                                        height: "6px",
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: "20px",
                                        lineHeight: "23px",
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: acf.terms_of_canncelation,
                                    }}
                                />
                                {this.state.readMoreTermsClicked ? (
                                    <Box>
                                        <Text
                                            style={{
                                                fontSize: "20px",
                                                lineHeight: "23px",
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: acf.terms_of_canncelation_read_more,
                                            }}
                                        />
                                        <Button
                                            onClick={this.readLessTermsClick}
                                            className="see-less"
                                            style={{ margin: "0 auto" }}
                                            icon={<FontAwesomeIcon icon={faChevronUp} />}
                                        />
                                    </Box>
                                ) : (
                                    <Text />
                                )}

                                <Button
                                    onClick={this.readMoreTermsClick}
                                    target="_blank"
                                    label="READ MORE"
                                    className={
                                        "buy-now-color " +
                                        (this.state.readMoreTermsClicked
                                            ? " hidebtn "
                                            : " read-more ")
                                    }
                                    style={{
                                        marginTop: "5%",
                                    }}
                                />
                            </Box>
                        </Box>

                        <Box className="accomodation-terms-images" style={{ paddingLeft: "15%" }}>
                            <Box className="boxed-element right-side-content">
                                <Grid
                                    columns="full"
                                    className="grid-box"
                                    style={{ paddingLeft: "35%" }}>
                                    <Box
                                        className="image-box inf-crd-img"
                                        style={{ top: "80px", right: "20%" }}>
                                        <Image fit="cover" src={acf.right_image_1.url} />
                                    </Box>
                                    <Box className="background-box">
                                        <Image
                                            src={"/static/assets/Asset_5.png"}
                                            className="tree-asset"
                                            style={{ bottom: "50px" }}
                                        />
                                    </Box>
                                </Grid>
                            </Box>

                            <Box className="boxed-element left-side-content ">
                                <Grid
                                    columns="full"
                                    className="grid-box-reverse"
                                    style={{
                                        paddingRight: "35%",
                                        marginTop: "64px",
                                    }}>
                                    <Box
                                        className="image-box inf-crd-img"
                                        style={{ top: "60px", left: "20%" }}>
                                        <Image
                                            data-aos="fade-zoom-out"
                                            fit="cover"
                                            src={acf.right_image_2.url}
                                        />
                                    </Box>
                                    <Box className="background-box" style={{ marginTop: "8.5vw" }}>
                                        <Image
                                            src={"/static/assets/Asset_5.png"}
                                            className="tree-asset"
                                            style={{
                                                bottom: "50px",
                                                left: "25px",
                                            }}
                                        />
                                    </Box>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Box>

                <div style={{ backgroundColor: "#7c5e49" }}>
                    <Box
                        className={
                            "boxed-element-only-sides left-side-content dragon-tavern" +
                            (this.state.readMoreLeft2clicked ? " dragon-more " : " ")
                        }
                        style={{
                            marginTop: "100px",
                            paddingTop: "6%",
                            marginBottom: this.state.readMoreLeft2clicked ? "55%" : "0",
                        }}>
                        <Grid
                            rows={"570px"}
                            columns="full"
                            className="grid-box-reverse"
                            style={{ paddingRight: "5%" }}>
                            <Box
                                className="image-box inf-crd-img"
                                style={{ top: "25%", left: "40%" }}>
                                <Image
                                    className="bckg-image"
                                    data-aos="fade-zoom-out"
                                    fit="cover"
                                    src={acf.info_card_left_picture_2.url}
                                />
                            </Box>
                            <Box
                                className="content-box info-card-left tavern"
                                style={{
                                    minWidth: "60%",
                                    paddingTop: "0%",
                                    backgroundColor: "#ffffff",
                                    color: "#7c5e49",
                                    top: "-25%",
                                    left: "8%",
                                    width: this.state.readMoreLeft2clicked ? "80%" : "",
                                }}>
                                <Grid
                                    className="heading-grid"
                                    columns={["70%", "25%"]}
                                    justifyContent="between"
                                    align="center">
                                    <Box>
                                        <Heading
                                            style={{
                                                marginBottom: "30px",
                                                lineHeight: "60px",
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: acf.info_card_left_title_2,
                                            }}
                                            level="2"
                                        />
                                        <Image
                                            style={{ marginBottom: "44px" }}
                                            src={"/static/assets/Asset_4.png"}
                                            className="break-line-asset"
                                        />
                                    </Box>
                                    <Box>
                                        <Image
                                            src={"/static/assets/Asset_3.png"}
                                            className="mountain-Asset_to-be-hidden-mobile"
                                        />
                                    </Box>
                                </Grid>
                                <Text
                                    className="light-text"
                                    dangerouslySetInnerHTML={{
                                        __html: acf.info_card_left_2,
                                    }}
                                />
                                {this.state.readMoreLeft2clicked ? (
                                    <Box>
                                        <Text
                                            className="light-text drragon"
                                            dangerouslySetInnerHTML={{
                                                __html: acf.info_card_left_read_more_2,
                                            }}
                                        />
                                        <Button
                                            onClick={this.readLessLeft2click}
                                            className="see-less hidden"
                                            style={{ margin: "0 auto" }}
                                            icon={<FontAwesomeIcon icon={faChevronUp} />}
                                        />
                                    </Box>
                                ) : (
                                    <Text />
                                )}
                            </Box>
                            <Box className="background-box">
                                <Image
                                    src={"/static/assets/Asset_5.png"}
                                    className={
                                        "tree-asset hide-asset " +
                                        (this.state.readMoreLeft2clicked ? " hide-r " : " ")
                                    }
                                    style={{
                                        bottom: "13vw",
                                        height: "97px",
                                        width: "auto",
                                        left: "4%",
                                        top: "31%",
                                    }}
                                />
                                <Image
                                    className={
                                        "dots-asset hide-asset" +
                                        (this.state.readMoreLeft2clicked ? " hide-r " : " ")
                                    }
                                    src={"/static/assets/Asset_1.png"}
                                    style={{
                                        height: "20px",
                                        width: "286px",
                                        top: "11.5%",
                                        right: "10.5%",
                                        position: "absolute",
                                    }}
                                />
                                <Image
                                    className={
                                        "hide-asset" +
                                        (this.state.readMoreLeft2clicked ? " hide-r " : " ")
                                    }
                                    src={"/static/assets/Asset_23.png"}
                                    style={{
                                        height: "5vw",
                                        width: "auto",
                                        position: "absolute",
                                        left: "15%",
                                        bottom: "7%",
                                    }}
                                />
                            </Box>
                            <Button
                                onClick={this.readMoreLeft2click}
                                target="_blank"
                                label="READ MORE"
                                className={
                                    "buy-now-color r-tavern" +
                                    (this.state.readMoreLeft2clicked ? " hidebtn " : " read-more ")
                                }
                                style={{
                                    color: "#fff",
                                    borderColor: "#fff",
                                    position: "absolute",
                                    bottom: "-21%",
                                    left: "16%",
                                }}
                            />
                        </Grid>
                    </Box>
                    <Box
                        className={
                            "boxed-element dragonbox" +
                            (this.state.readMoreLeft2clicked ? "  " : " hide-f ")
                        }
                        style={{ paddingTop: "0", color: "white", marginBottom: "0" }}>
                        {this.state.readMoreLeft2clicked ? (
                            <Box>
                                <Text
                                    className="light-text hours"
                                    dangerouslySetInnerHTML={{
                                        __html: acf.info_card_left_read_more_2,
                                    }}
                                />
                                <Button
                                    onClick={this.readLessLeft2click}
                                    className="see-less"
                                    style={{ margin: "0 auto" }}
                                    icon={<FontAwesomeIcon icon={faChevronUp} />}
                                />
                            </Box>
                        ) : (
                            <Text />
                        )}
                    </Box>
                    <Box
                        className={
                            "boxed-element-only-sides right-side-content lastdiv " +
                            (this.state.readMoreLeft2clicked ? " fm lastdivclick " : "  ")
                        }
                        style={{ marginTop: "4%", minHeight: "85vh" }}>
                        <Grid
                            rows={"570px"}
                            columns="full"
                            className="grid-box f-grid"
                            style={{ paddingLeft: "30%", marginTop: "10%", marginBottom: "15%" }}>
                            <Box
                                className="image-box inf-crd-img"
                                style={{ width: "60%", top: "150px" }}>
                                <Image
                                    fit="cover"
                                    src={acf.info_card_right_picture_3.url}
                                    className="bckg-image"
                                    data-aos="fade-zoom-out"
                                />
                            </Box>
                            <Box
                                className="content-box info-card facilities"
                                style={{
                                    top: "10%",
                                    right: "5%",
                                    minWidth: "55%",
                                    left: "unset",
                                    padding: "0.5% 2% 3% 3%",
                                    backgroundColor: "#ffffff",
                                    color: "#7c5e49",
                                }}>
                                <Grid
                                    className="heading-grid"
                                    columns={["40%", "25%"]}
                                    justifyContent="between"
                                    align="center">
                                    <Box>
                                        <Heading
                                            style={{
                                                marginBottom: "30px",
                                                lineHeight: "60px",
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: acf.info_card_right_title_3,
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
                                        __html: acf.info_card_right_3,
                                    }}
                                />
                            </Box>
                            <Box className="background-box last" style={{ height: "620px" }}>
                                <Image
                                    src={"/static/assets/Asset_8.png"}
                                    className={
                                        "column-asset hide-asset" +
                                        (this.state.readMoreRight3clicked ? " hide-r " : " ")
                                    }
                                    style={{ right: "-1%", top: "2%" }}
                                />
                            </Box>
                            <Button
                                onClick={this.readMoreRight3click}
                                target="_blank"
                                label="READ MORE"
                                className={
                                    "buy-now-color r-facilities" +
                                    (this.state.readMoreRight3clicked ? " hidebtn " : " read-more ")
                                }
                                style={{
                                    color: "#fff",
                                    borderColor: "#fff",
                                    position: "absolute",
                                    bottom: "-16%",
                                    marginLeft: "62%",
                                }}
                            />
                        </Grid>
                    </Box>
                    <Box
                        className={
                            "boxed-element facilities-more" +
                            (this.state.readMoreRight3clicked ? "  " : " hide-f ")
                        }
                        style={{ paddingTop: "0", color: "white", marginBottom: "0" }}>
                        {this.state.readMoreRight3clicked ? (
                            <Box>
                                <Text
                                    className="light-text"
                                    dangerouslySetInnerHTML={{
                                        __html: acf.info_card_right_read_more_3,
                                    }}
                                />
                                <Text
                                    className="light-text"
                                    style={{ color: "#B2A137" }}
                                    dangerouslySetInnerHTML={{
                                        __html: acf.disclaimer,
                                    }}
                                />
                                <Button
                                    onClick={this.readLessRight3click}
                                    className="see-less"
                                    style={{ margin: "0 auto" }}
                                    icon={<FontAwesomeIcon icon={faChevronUp} />}
                                />
                            </Box>
                        ) : (
                            <Text />
                        )}
                    </Box>
                </div>
            </MainWrapper> */}

            </div>
            
            
        );
    }
}
