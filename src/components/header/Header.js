import React, { Component } from 'react';
import HeaderLeftSide from './HeaderLeftSide';
import HeaderCenter from './HeaderCenter';

class Header extends Component {
  render() {
    return (

      <header>
        <div className='container'>
          <div className='header-wrapper'>
            <HeaderLeftSide />
            <HeaderCenter />
          </div>
        </div>
      </header >

    );
  }
}

export default Header;