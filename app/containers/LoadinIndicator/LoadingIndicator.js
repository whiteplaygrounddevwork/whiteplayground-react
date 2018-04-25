"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import img_loading from '../../images/Spinner.svg';


class LoadingIndicator extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        let dim={
            width:"100%",
            //height:"100%",
            position:"fixed",
            zIndex:100,
            top:0,
            bottom:0,
            backgroundColor:"black",
            opacity:"0.5",
            left:0,
            right:0
        }
        return( 
           <div style={dim}>  
              
            <img src={img_loading} className="loadingImage" 
                 style={{display: "inline-block" , 
                 position: "fixed",
                 top: "0",
                 bottom: "0",
                 left: "0",
                 right: "0",
                 width: "200px",
                 height: "100px",
                 margin: "auto",
                 zIndex: "99"}}/>
            </div>
            )
    }

}
function mapStateToProps(state) {
    return {state: state}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(LoadingIndicator);