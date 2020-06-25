import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

// import BurgerIcon  from 'https://assets.wordpress.envato-static.com/uploads/2014/11/resp_nav_a.jpg';
import styled from "styled-components";
import { Anchor } from "grommet";

const Navigation = styled.header`
  width: 50%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 140px;
  margin-bottom: 60px;
  background: transparent;
  border: 1px solid red;
  

  ${'' /* .logo a {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;

    p {
      width: 500px;
      display: block;
    }
    em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  } */}
  .gray {
    color: #ccc;
  }
  a {
    ${'' /* color: #222; */}
    ${'' /* opacity: 0.55; */}
    transition: all 0.6s;
    ${'' /* color: #222; */}
    color: white;
    font-size: 0.5em;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none; 
    color: #222;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 0.8em;
      list-style-type: none;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    ${'' /* background: red; */}
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px; 
      cursor: pointer;
      background: green;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const { isExpanded } = this.state;

    return ( 
      <Navigation>
        {/* <div className="logo">
          <Anchor href="/">
            <p>React Responsive Navigation</p>
            <em>
              <div className="letterhead">
                <span className="name">kentorry</span>
                <span className="gray">.io</span>
              </div>
            </em>
          </Anchor>
        </div> */}
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <Anchor activeClassName="active" href="/">
              <li>Accomodation</li>
            </Anchor>
            <Anchor activeClassName="active" href="/explore">
              <li>Explore</li>
            </Anchor>
            <Anchor activeClassName="active" href="/our-story">
              <li>Our Story</li>
            </Anchor>
            <Anchor activeClassName="active" href="/blog">
              <li>Blog</li>
            </Anchor>
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;
