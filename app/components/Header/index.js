import React from 'react';
import { FormattedMessage } from 'react-intl';
import  { Redirect } from 'react-router-dom';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import {logOut} from '../../services/userService'

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state ={
      toLogin:false
    };
    
}

  render() {

    var is_logedIn = localStorage.getItem('is_logedIn') ||document.cookie;

    const content = is_logedIn ? (
      <ul className="list-unstyled user-profile-nav">
        <li><a onClick={this.logOut.bind(this)}><i className="icon ion-power"></i> Sign Out</a></li>
      </ul>
    ) : (
      <ul className="list-unstyled user-profile-nav">
        <li><a href="/signIn"><i className="icon ion-power"></i> Sign In</a></li>
        <li><a href="/Register"><i className="icon ion-power"></i> Register</a></li>
      </ul>
    );

    if (this.state.toLogin === true) {
      return <Redirect to='/signIn' />
   }

    return (
      <div className="sl-header">
        <div className="sl-header-left">
        <div className="navicon-left hidden-md-down"><a id="btnLeftMenu" href=""><i className="icon ion-navicon-round"></i></a></div>
        <div className="navicon-left hidden-lg-up"><a id="btnLeftMenuMobile" href=""><i className="icon ion-navicon-round"></i></a></div>
      </div>
      <div className="sl-header-right">
        <nav className="nav">
          <div className="dropdown">
            <a href="" className="nav-link nav-link-profile" data-toggle="dropdown">
              <span className="logged-name">Settings</span>
            </a>
            <div className="dropdown-menu dropdown-menu-header wd-200">
             {content}
            </div>
          </div>
        </nav>
        <div className="navicon-right">
          <a id="btnRightMenu" href="" className="pos-relative">
            <i className="icon ion-ios-bell-outline"></i>
           
            <span className="square-8 bg-danger"></span>           
          </a>
        </div>
      </div>
    
    </div>
    );
  }

  logOut(){
    logOut();
    this.setState({toLogin:true});
  }
}

export default Header;
