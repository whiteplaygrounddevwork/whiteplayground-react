"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  { Redirect } from 'react-router-dom';
import LoadingIndicator from '../LoadinIndicator/LoadingIndicator';
import {login} from '../../services/userService';

export class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            email: "",
            password:"",
            errorMessage:"",
            isValid:true,
            toHome:false,            
            isLoading:false
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState({
        [e.target.name]: e.target.value
        });
    }

    renderError(){
        var messageToBeDisplaied = this.state.errorMessage;
        return(
            <div className="alert alert-danger" role="alert">
                <button type="button" className="close" onClick={this.closeErrorPopup.bind(this)}  aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="d-flex align-items-center justify-content-start">
                    <span>{messageToBeDisplaied}</span>
                </div>
            </div>                
        )
    }

    closeErrorPopup(){
        this.setState({
            errorMessage:'',
            isValid:true
        })
    }

    renderLoadingIndicaor(){
        return(
            <LoadingIndicator/>
        );
    }

    render(){
        const showErrors = !this.state.isValid? 
                            this.renderError()
                            : null;
        
        const loadingIndicator = this.state.isLoading?this.renderLoadingIndicaor():null;

        if (this.state.toHome === true) {
            return <Redirect to='/' />
        }
        return(
            <div className="d-flex align-items-center justify-content-center bg-sl-primary ht-100v">
            {loadingIndicator}
                <div className="login-wrapper wd-300 wd-xs-350 pd-25 pd-xs-40 bg-white">
                    <div className="signin-logo tx-center tx-24 tx-bold tx-inverse">starlight <span className="tx-info tx-normal">admin</span></div>
                    <div className="tx-center mg-b-60">Professional Admin Template Design</div>
                    {showErrors}
                    <div className="form-group">
                        <input type="text" className="form-control" name ='email' placeholder="Enter your email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name='password' placeholder="Enter your password" onChange={this.handleChange}/>
                    <a href="" className="tx-info tx-12 d-block mg-t-10">Forgot password?</a>
                    </div>
                    <div>
                    <input type="checkbox" className="custom-control-input" name="rememberMe" id="rememberMeChkBox"/>
                    <label className="custom-control custom-checkbox" for="rememberMeChkBox">Remember me</label>                    
                    </div>
                    <button onClick={this.signIn.bind(this)} className="btn btn-info btn-block">Sign In</button>
                    <div className="mg-t-60 tx-center">Not yet a member? <a href="/Register" className="tx-info">Sign Up</a></div>
                </div>
            </div>
        );
    }

    signIn(){
        this.setState({
            errorMessage:'',
            isValid:true,
            isLoading:true
        })
        var email = this.state.email;
        var password = this.state.password;

        if(!email || !password){
            this.setState({errorMessage:'All fields are required.',isValid:false,isLoading:false});
        }else{
            var user ={
                Email:email,
                Password:password
            };
            var self =this;
            login(user,function(response){
                if(response.statusText != 'OK'){
                    self.setState({errorMessage:'Login Failed.',isValid:false});
                }
                if(!response.data){
                    self.setState({errorMessage:'Login Failed.',isValid:false});
                }
                if(self.state.isValid){
                    debugger;
                    var isRemeberMeChecked = document.getElementById('rememberMeChkBox').checked;
                    if(isRemeberMeChecked){
                        var now = new Date(); //get the current date
                        now.setMonth(now.getMonth() + 1); //add one month to it
                        document.cookie = "rememberMe=true; expires=" + now.toUTCString() + "; path=/";
                    }                    
                    self.setState({toHome:true});
                }
                self.setState({isLoading :false });
            },function(errorResponse){
                self.setState({errorMessage:'Login Failed.',isValid:false,isLoading:false});
            });
        }
    }



}function mapStateToProps(state) {
  return {state: state}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({  
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);