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
import UserDashboard from 'containers/UserDashboard/Loadable';
import AdminDashboard from 'containers/AdminDashboard/Loadable';
import  { Redirect } from 'react-router-dom';
import {logOut} from '../../services/userService';

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
        toLogin:(localStorage.getItem('is_logedIn') && localStorage.getItem('access_token'))||document.cookie, 
        isAdmin:true,
        isUser:false
    };
    this.handleChange = this.handleChange.bind(this);
}

  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  renderAdminDashboard(){
    return(
      <AdminDashboard/>
    );
  }

  renderUserDashboard(){
    return(
      <UserDashboard/>
    );
  }

  handleChange(event){
    
    this.setState({
      isAdmin:event.target.value==1,
      isUser:event.target.value==2
    });
  }

  render() {
    if (!this.state.toLogin) {
      debugger;
      logOut();
      return <Redirect to='/signIn' />
   }

   var adminDash = this.state.isAdmin && !this.state.isUser ?this.renderAdminDashboard():null;
   var userDash = !this.state.isAdmin && this.state.isUser ? this.renderUserDashboard():null;
    return (
      <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
      </Helmet>  
      <LeftMenu/>    
      <Header />     
      <div className ="container"style={{"margin-top":"75px"}}> 
        <div className="row">
          <div className="col-md-10">
          </div>
          <div className="col-md-2">
            <select className="form-control" onChange={this.handleChange}>
              <option value="1">Admin</option>
              <option value="2">User</option>
            </select>
          </div>          
        </div>   
        <div className="row" style={{"margin-top":"10px"}}>
          {adminDash}       
          {userDash}
        </div>
      </div>      
      
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

