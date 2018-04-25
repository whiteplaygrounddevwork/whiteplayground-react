"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  { Redirect } from 'react-router-dom';
import {register} from '../../services/userService';

export class Register extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            email: "",
            password:"",
            confirmPassword:"",
            errorMessage:"",
            isValid:true,
            toLogin:false
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

    render(){
        const showErrors = !this.state.isValid? 
                            this.renderError()
                            : null;
        if (this.state.toLogin === true) {
            return <Redirect to='/signIn' />
         }
        return(
            <div className="d-flex align-items-center justify-content-center bg-sl-primary ht-md-100v">
            

                <div className="login-wrapper wd-300 wd-xs-400 pd-25 pd-xs-40 bg-white">
                    <div className="signin-logo tx-center tx-24 tx-bold tx-inverse">starlight <span className="tx-info tx-normal">admin</span></div>
                    <div className="tx-center mg-b-60">Professional Admin Template Design</div>
                    {showErrors}
                    <div className="form-group">
                        <input type="text" name ='email' className="form-control" placeholder="Enter your Email*" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <input type="password" name = 'password' className="form-control" placeholder="Password*" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <input type="password" name ='confirmPassword' className="form-control" placeholder="Confirm Password*" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group tx-12">By clicking the Sign Up button below, you agreed to our privacy policy and terms of use of our website.</div>
                    <button onClick={this.signUp.bind(this)} className="btn btn-info btn-block">Sign Up</button>

                    <div className="mg-t-40 tx-center">Already have an account? <a href="/signIn" className="tx-info">Sign In</a></div>
                </div>
            </div>
        );
    }

    signUp(){
        this.setState({
            errorMessage:'',
            isValid:true
        })
        var email = this.state.email;
        var password = this.state.password;
        var confirmPassword = this.state.confirmPassword;

        if(!email || !password || !confirmPassword){
            this.setState({errorMessage:'All fields are required.',isValid:false});
        }else if(password !== confirmPassword){
            this.setState({errorMessage:'Passwords do not match.',isValid:false});
        }else{
            var user ={
                Email:email,
                Password:password
            };
            var self =this;
            register(user,function(response){
                debugger;
                if(!response.data.isPassed){
                    self.setState({errorMessage:response.data.message,isValid:false});
                }
                else{
                    self.setState({toLogin:true});
                }
            },function(errorResponse){
                self.setState({errorMessage:'Registration Failed.',isValid:false});
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
export default connect(mapStateToProps, mapDispatchToProps)(Register);