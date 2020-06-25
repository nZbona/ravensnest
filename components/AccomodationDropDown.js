import React, { Component } from 'react';
import { Box, Anchor, Menu, Text, Heading } from 'grommet';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

export default class AccomodationDropDown extends Component {
    constructor() {
        super();
        
        this.state = {
          showMenu: false,
          menu_class: '',
        }
      }

      setToggleTopMenuClass = () => {
        if (this.state.menu_class === '') {
          this.setState({
            menu_class: 'toggled',
          })
        } else {
          this.setState({
            menu_class: '',
          })
        }
      }
        

      showMenu = (event) => {
          event.preventDefault();

          this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu);
          });
      }

      closeMenu = () => {

        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
            });
        }
      }
    
  render() {
      let top_menu_class = ` accomodationDropDown top-menu ${this.state.menu_class}`
      
    return (
        <div className= {top_menu_class}>

        {/* <svg width="22" height="22" viewBox="0 0 1024 1024">
            <path d={this.icons['para']}></path>
        </svg> */}
        <button onClick={this.showMenu} className='top-menu-item'>
          Accommodation
        </button>
        
        {
            this.state.showMenu
                ? (
                    <div 
                        className="menu"
                        ref={(element) => {
                            this.dropdownMenu = element;
                        }}
                    >
                <Anchor onClick={this.props.startLoad} href="/accommodation/houses" className='top-menu-item'>
                                    Houses
                </Anchor>
                <Anchor onClick={this.props.startLoad} href="/accommodation/rates" className='top-menu-item'>
                                    Rates
                </Anchor>
                <Anchor onClick={this.props.startLoad} href="/accommodation/restaurant" className='top-menu-item'>
                                    Restaurant & Bar
                </Anchor>
                
                <Anchor onClick={this.props.startLoad} href="/accommodation/facilities" className='top-menu-item'>
                                    Facilities
                </Anchor>

                    
                    {/* <button className='top-menu-item' > Sunrise House </button>
                    <button className='top-menu-item'> Median House </button>
                    <button className='top-menu-item'> Sunset House </button>
                    <button className='top-menu-item'> Rates 2020 </button>
                     */}
                    </div>
                ) : (
                    null
                )
        }
        <Anchor onClick={this.props.startLoad} href="/explore" className='top-menu-item'>
                    Explore
                </Anchor>
                <Anchor onClick={this.props.startLoad} href="/our-story" className='top-menu-item'>
                    Our story
                </Anchor>
                <Anchor onClick={this.props.startLoad} href="/blog" className='top-menu-item'>
                    Blog
                </Anchor>
                <FontAwesomeIcon icon={this.state.menu_class === 'toggled' ? faTimes : faBars} className='top-menu-icon' onClick={this.setToggleTopMenuClass}/>
                <div style={{clear: 'both'}} />
      </div>
    );
  }
}