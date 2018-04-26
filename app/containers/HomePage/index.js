"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LeftMenu from 'components/LeftMenu';
import  { Redirect } from 'react-router-dom';


const AppWrapper = styled.div`
  width:100%
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export class HomePage extends React.Component { 

  constructor(props){
    super(props);
    this.state ={
        toLogin:localStorage.getItem('is_logedIn') && localStorage.getItem('access_token'), 
    };
}

  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    if (!this.state.toLogin) {
      return <Redirect to='/signIn' />
   }

    return (
      <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
      </Helmet>
      <LeftMenu/>
      <Header />
    </AppWrapper>
    );
  }
}function mapStateToProps(state) {
  return {state: state}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({  
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

