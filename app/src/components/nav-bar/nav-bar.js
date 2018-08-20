import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div className={'nav-bar'}>
        <div className={'nav-bar-contents'}>
          <h1 className={'nav-bar-header'}>Open-Crime</h1>
          <div className={'nav-bar-buttons'}>
            <a
              href="/home"
              className={'nav-bar-button nav-bar-button-selected'}
            >
              Home
            </a>
            <a href="/contact-us" className={'nav-bar-button'}>
              Contact Us
            </a>
            <a href="/about" className={'nav-bar-button'}>
              About
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
