import React, { Component } from 'react';
import Link from 'next/link';

import { Box, Anchor, Menu, Text, Heading } from 'grommet';
import { FormDown } from 'grommet-icons';
import AccommodationDropDown from './AccomodationDropDown';

// import hamburgerImage from '../public/static/assets/Asset_25.png';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            mobileHamburgerActive: false,
            isDesktop: undefined,

        };
    }
    // componentDidMount(){
    //     this.verifyWidth();
    //     window.addEventListener('resize', this.verifyWidth);
    // }
    
    // verifyWidth = () => {
    //     let isDesktop;
    //     if(window.innerWidth < 769){
    //         isDesktop = false
    //     }else{
    //         isDesktop = true
    //     }

    //     this.setState({isDesktop})
    // }

    render() {
        const open = this.state;
        return (

            // <Box style={{display: 'flex', 'justify-content': 'flex-end'}}>
            // {!this.state.isDesktop &&
            // <img
            //     className="hamburgerImage"
            //     // data-aos="fade-zoom-in"
            //     src={'https://www.stickpng.com/assets/images/588a64e7d06f6719692a2d11.png'}
            //     onClick={() => {this.setState((prevState) => ({mobileHamburgerActive: !prevState.mobileHamburgerActive}))}}
            //     alt='afds'
            // />
            // }

            // {(this.state.mobileHamburgerActive || this.state.isDesktop) && 
            <Box
                direction="row-responsive"
                gap="medium"
                justify="end"
                align="center"
                margin="small"
                id={this.props.id}
                style={this.props.style}
            >
                {/* <Anchor 
                    // onClick={this.props.startLoad} 
                    // href="/accommodation"
                    items={[
                        {label: 'First Action', onClick: () => {} },
                    ]}
                >
                    Accommodation
                </Anchor> */}
                {/* <Menu
                    plain
                    // className="meniu_sexy"
                    dropAlign={{'top': 'bottom', 'left': 'left'}}
                    dropBackground = {{"color": "accent-2", "opacity": 0}}
                    items={[
                        {label: <Anchor className='dropMenuOptionAnchor' href="#/explore"> 
                                    The Sunrise House 
                                </Anchor> , onClick: () => {} },
                        {label: <Anchor className='dropMenuOptionAnchor' href="#/explore" > 
                                    The Median House 
                                </Anchor> , onClick: () => {} },
                        {label: <Anchor className='dropMenuOptionAnchor' href="#/explore" > 
                                    The Sunset House 
                                </Anchor> , onClick: () => {} },
                        {label: <Anchor className='dropMenuOptionAnchor' href="#/explore" > 
                                    Rates 2020 
                                </Anchor> , onClick: () => {} },
                    ]}
                >
                    { () => {
                        return(
                            <Box
                            >
                                <Anchor alignSelf='center'> 
                                    Accommodation
                                </Anchor>
                            </Box>
                        );
                    }}

                </Menu> */}

                <AccommodationDropDown />
                {/* <Anchor onClick={this.props.startLoad} href="/explore">
                    Explore
                </Anchor>
                <Anchor onClick={this.props.startLoad} href="/our-story">
                    Our story
                </Anchor>
                <Anchor onClick={this.props.startLoad} href="/blog">
                    Blog
                </Anchor> */}
            </Box>
            // }   
            // </Box>
        );
    }
}
