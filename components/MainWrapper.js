import React, { Component, Fragment } from "react";
import AOS from "aos";

import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Nav from './Nav';
import {Router, Route} from 'react-router-dom';

import { Grommet, Grid, Image, Box, Heading, Text, Button, Anchor } from "grommet";
import { Next, Close, Add, Subtract } from "grommet-icons";

import { relative } from "path";

const RNTheme = {
    global: {
        focus: {
            border: {
                color: "#7C5E49",
            },
        },
        colors: {
            active: "#806c83",
            black: "#000000",
            border: {
                light: "#806c83",
            },
            brand: "#806c83",
            control: {
                light: "#806c83",
            },
            icon: {
                dark: "#f8f8f8",
                light: "#806c83",
            },

            // button: {
            // }
            hover: {
                color: {
                    light: "#f0f0f0",
                },
                background: {
                    color: "#f0f0f0",
                },
            },
        },
        font: {
            size: "32px",
            height: "32px",
            family: "BasisGrotesquePro",
            // family: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\",  \"Helvetica Neue\", Arial, sans-serif,  \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\""
        },
    },
    anchor: {
        textDecoration: "none",
        fontWeight: 600,
        color: {
            light: "white",
            dark: "white",
        },
    },
    button: {
        border: {
            radius: "1px",
            color: "#7c5e49",
        },
        color: "#7c5e49",
        hover: {
            background: {
              color: 'transparent',
            },
        },
       
        
    },
    accordion: {
        icons: {
            collapse: Subtract,
            expand: Add,
        },
    },
    video: {
        scrubber: {
            color: "white",
        },
    },
    text: {
        medium: {
            size: "calc(0.4em + 1vw)",
            height: "36px",
        },
    },

    heading: {
        level: {
            "2": {
                medium: {
                    size: "54px",
                },
            },
            "3": {
                medium: {
                    size: "27px",
                },
            },
        },
    },
};

export default class MainWrapper extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading: true,
            covidPopUp: true,
        };
    }
    
    componentDidMount() {
        AOS.init({
            delay: 100,
        });

        // this.verifyIfMobile();
        // window.addEventListener('resize', this.verifyIfMobile);

        setTimeout(() => {
            this.setState({ loading: false });
        }, 300);
    }

    // verifyIfMobile = () => {

    //     if( this.props.isMobile){
    //         if(window.innerWidth < 769){
    //             this.props.isMobile(true)
    //         }else{
    //             this.props.isMobile(false)
    //         }
    //     }
    // }

    startLoading = () => {
        this.setState({ loading: true });
    };

    render() {
        return (
            <Grommet theme={RNTheme}>
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                        .lds-facebook {
                            display: inline-block;
                            position: relative;
                            width: 64px;
                            height: 64px;
                        }
                        .lds-facebook div {
                            display: inline-block;
                            position: absolute;
                            left: 6px;
                            width: 13px;
                            background: #fff;
                            animation: lds-facebook 0.6s cubic-bezier(0, 0.5, 0.5, 1) infinite;
                        }
                        .lds-facebook div:nth-child(1) {
                            left: 6px;
                            animation-delay: -0.24s;
                        }
                        .lds-facebook div:nth-child(2) {
                            left: 26px;
                            animation-delay: -0.12s;
                        }
                        .lds-facebook div:nth-child(3) {
                            left: 45px;
                            animation-delay: 0;
                        }
                        @keyframes lds-facebook {
                            0% {
                                top: 6px;
                                height: 51px;
                            }
                            50%,
                            100% {
                                top: 19px;
                                height: 26px;
                            }
                        }
                        body {
                            overflow-x: hidden;
                        }`,
                    }}
                />
                <Header pageTitle={this.props.pageTitle} />

                <Fragment>
                    <Grid columns={["full"]} gap="small">
                        <div
                            id="loader"
                            style={{
                                opacity: this.state.loading ? "1" : "0",
                                display: "flex",
                                position: "fixed",
                                width: "100vw",
                                height: "100vh",
                                backgroundColor: "#7c5e49",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: this.state.loading ? "1000" : "-1",
                                transition: "0.2s",
                            }}>
                            <div className="lds-facebook">
                                <div />
                                <div />
                                <div />
                            </div>
                        </div>


                        {/* modal */}

                        {!this.props.showCovidPopUp &&
                            this.state.covidPopUp &&
                                <Box id="myModal" className="modal">
                                    <Box className="modal-content">
                                    <Box className="modal-header modal-padding">
                                        <span className="close" onClick={() => { this.setState({covidPopUp: false})}}> &#10006;</span>
                                        <h2>COVID-19 Updates</h2>
                                    </Box>
                                    <Box className="modal-body modal-padding" style={{fontSize: "22px"}}>
                                        <p>In light of the impact caused by COVID-19, we are doing our utmost best to provide our guests with a safe & healthy stay.</p>
                                        <Anchor color="black" href="/covid-19" label="Check our COVID-19 recommendation page here." />
                                        
                                    </Box>
                                    <Box className="modal-footer modal-padding">
                                        <h3><span className="modal-outstanding-text">-Raven's Nest</span></h3>
                                    </Box>
                                    </Box>
                                </Box>
                        }


                        {/* END MODAL */}
                        
                        
                        <Box
                            basis="large"
                            className="boxed-element"
                            style={{
                                position: "relative",
                                padding: "3%",
                                paddingBottom: "0",
                                marginBottom: "0px",
                            }}>
                            <img
                                data-aos="fade-zoom-in"
                                src={this.props.heroBanner}
                                style={{ objectFit: "cover", height: "93vh" }}
                                
                            />
                            <Grid
                                className="hero-grid"
                                gap="small"
                                columns={["1fr", "3fr"]}
                                rows={["1fr", "3fr"]}
                                direction='row'
                                justifyContent="between"
                                style={{
                                    position: "absolute",
                                    width: "94%",
                                    height: "93vh",
                                }}>
                                <a href="/" className="logo-image">
                                    <img src="/static/assets/Asset_2.1.png" />
                                </a>
                                <Navigation
                                    id="navbar"
                                    style={{
                                        margin: "16px",
                                        fontSize: "23px",

                                    }}
                                    startLoad={this.startLoading}
                                />
                                
                                    {/* <Nav>
                                       
                                    </Nav> */}
                                

                                
                                
                                <Box id="hero-banner-text"
                                    style={(this.props.isMobile && this.props.shouldShowBannerText) ? {
                                                            marginTop: '60vh',
                                                        } : {}
                                    }
                                >
                                    {this.props.heroBannerTitle != "empty" && (
                                        

                                        
                                            this.props.shouldShowBannerText && (

                                                <Fragment
                                                >
                                                    <Heading
                                                        style={{
                                                            lineHeight: '6vw',
                                                        }}
                                                        dangerouslySetInnerHTML={{
                                                            __html: this.props.heroBannerTitle,
                                                        }}
                                                        level="2"
                                                    />
                                                    <Image
                                                        style={{
                                                            marginBottom: "1vw",
                                                            marginTop: '-1vw',
                                                            width: "8em",
                                                            maxWidth: "85vw",
                                                        }}
                                                        src={"/static/assets/Asset_4.png"}
                                                        className="break-line"
                                                    />
                                                    <Text
                                                        className="light-text"
                                                        dangerouslySetInnerHTML={{
                                                            __html: this.props.heroBannerText,
                                                        }}
                                                    />
                                                </Fragment>
                                            )
                                
                                

                                        
                                        
                                    )}
                                    <Button
                                        href={this.props.bookNowURL}
                                        target="_blank"
                                        
                                        className={"buy-now-header  buy-now-color "}
                                        label="Book Now"
                                        style={
                                            this.props.bookNowURLStyle === "empty" 
                                                ? { visibility: "hidden" }
                                                : this.props.bookNowURLStyle,
                                            (this.props.isMobile && !this.props.shouldShowBannerText) ? { marginTop: '14vw', marginBottom: '-27vw'} : 
                                            (this.props.isMobile && this.props.shouldShowBannerText) ? {
                                                marginTop: '6vw',
                                                marginBottom: '-8vw',
                                            } : {}
                                            
                                        }
                                    />
                                </Box>
                            </Grid>
                        </Box>

                        {this.props.children}
                    </Grid>

                    <Button
                        href={this.props.footerData.book_now_link}
                        id="book-now"
                        target="_blank"
                        label="Book now!"></Button>

                    <Footer data={this.props.footerData} footerStyle={this.props.footerStyle} />
                </Fragment>
            </Grommet>
        );
    }
}
