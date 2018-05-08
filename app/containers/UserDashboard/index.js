"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  { Redirect } from 'react-router-dom';
import LoadingIndicator from '../LoadinIndicator/LoadingIndicator';
import {login} from '../../services/userService';

export class UserDashboard extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isValid:true,
            toHome:false,            
            isLoading:false
        };
    }


    render(){     

        return(   
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xl-4">
                        <div className="card bg-c-blue order-card">
                            <div className="card-body">
                                <div className="row" style={{"border-bottom": "1px solid #040404"}}>
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-7 headerCard">Execute Dashboard</div>
                                    <div className="col-md-3">
                                        <i className="fa fa-cog f-left"></i>
                                        <i className="fa fa-plus-circle f-right"></i>
                                    </div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-10">12 alerts to be reviewed</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-clock-o f-left"></i></div>
                                    <div className="col-md-10">3 tasks overdue</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-arrow-down f-left"></i></div>
                                    <div className="col-md-10">1 ongoing tasks to be completed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-4">
                        <div className="card bg-c-blue order-card">
                            <div className="card-body">
                                <div className="row" style={{"border-bottom": "1px solid #040404"}}>
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-7 headerCard">Methodology Module</div>
                                    <div className="col-md-3">
                                        <i className="fa fa-cog f-left"></i>
                                        <i className="fa fa-plus-circle f-right"></i>
                                    </div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-10">12 alerts to be reviewed</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-clock-o f-left"></i></div>
                                    <div className="col-md-10">3 tasks overdue</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-arrow-down f-left"></i></div>
                                    <div className="col-md-10">1 ongoing tasks to be completed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-4">
                        <div className="card bg-c-blue order-card">
                            <div className="card-body">
                                <div className="row" style={{"border-bottom": "1px solid #040404"}}>
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-7 headerCard">Surveillance Module</div>
                                    <div className="col-md-3">
                                        <i className="fa fa-cog f-left"></i>
                                        <i className="fa fa-plus-circle f-right"></i>
                                    </div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-10">12 alerts to be reviewed</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-clock-o f-left"></i></div>
                                    <div className="col-md-10">3 tasks overdue</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-arrow-down f-left"></i></div>
                                    <div className="col-md-10">1 ongoing tasks to be completed</div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-md-4 col-xl-4">
                        <div className="card bg-c-blue order-card">
                            <div className="card-body">
                                <div className="row" style={{"border-bottom": "1px solid #040404"}}>
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-7 headerCard">Modeling Module</div>
                                    <div className="col-md-3">
                                        <i className="fa fa-cog f-left"></i>
                                        <i className="fa fa-plus-circle f-right"></i>
                                    </div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-10">12 alerts to be reviewed</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-clock-o f-left"></i></div>
                                    <div className="col-md-10">3 tasks overdue</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-arrow-down f-left"></i></div>
                                    <div className="col-md-10">1 ongoing tasks to be completed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-4">
                        <div className="card bg-c-blue order-card">
                            <div className="card-body">
                                <div className="row" style={{"border-bottom": "1px solid #040404"}}>
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-7 headerCard">Dayta Enrichment Module</div>
                                    <div className="col-md-3">
                                        <i className="fa fa-cog f-left"></i>
                                        <i className="fa fa-plus-circle f-right"></i>
                                    </div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-10">12 alerts to be reviewed</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-clock-o f-left"></i></div>
                                    <div className="col-md-10">3 tasks overdue</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-arrow-down f-left"></i></div>
                                    <div className="col-md-10">1 ongoing tasks to be completed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-4">
                        <div className="card bg-c-blue order-card">
                            <div className="card-body">
                                <div className="row" style={{"border-bottom": "1px solid #040404"}}>
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-7 headerCard">Documentation Module</div>
                                    <div className="col-md-3">
                                        <i className="fa fa-cog f-left"></i>
                                        <i className="fa fa-plus-circle f-right"></i>
                                    </div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-10">12 alerts to be reviewed</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-clock-o f-left"></i></div>
                                    <div className="col-md-10">3 tasks overdue</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-arrow-down f-left"></i></div>
                                    <div className="col-md-10">1 ongoing tasks to be completed</div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-md-4 col-xl-4">
                        <div className="card bg-c-blue order-card">
                            <div className="card-body">
                                <div className="row" style={{"border-bottom": "1px solid #040404"}}>
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-7 headerCard">Reporting Module</div>
                                    <div className="col-md-3">
                                        <i className="fa fa-cog f-left"></i>
                                        <i className="fa fa-plus-circle f-right"></i>
                                    </div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-10">12 alerts to be reviewed</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-clock-o f-left"></i></div>
                                    <div className="col-md-10">3 tasks overdue</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-arrow-down f-left"></i></div>
                                    <div className="col-md-10">1 ongoing tasks to be completed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-4">
                        <div className="card bg-c-blue order-card">
                            <div className="card-body">
                                <div className="row" style={{"border-bottom": "1px solid #040404"}}>
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-7 headerCard">Validation Module</div>
                                    <div className="col-md-3">
                                        <i className="fa fa-cog f-left"></i>
                                        <i className="fa fa-plus-circle f-right"></i>
                                    </div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-10">12 alerts to be reviewed</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-clock-o f-left"></i></div>
                                    <div className="col-md-10">3 tasks overdue</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-arrow-down f-left"></i></div>
                                    <div className="col-md-10">1 ongoing tasks to be completed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-4">
                        <div className="card bg-c-blue order-card">
                            <div className="card-body">
                                <div className="row" style={{"border-bottom": "1px solid #040404"}}>
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-7 headerCard">Optimization Module</div>
                                    <div className="col-md-3">
                                        <i className="fa fa-cog f-left"></i>
                                        <i className="fa fa-plus-circle f-right"></i>
                                    </div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-puzzle-piece f-left"></i></div>
                                    <div className="col-md-10">12 alerts to be reviewed</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-clock-o f-left"></i></div>
                                    <div className="col-md-10">3 tasks overdue</div>
                                </div>
                                <div className="row card-body-item">
                                    <div className="col-md-2"><i className="fa fa-arrow-down f-left"></i></div>
                                    <div className="col-md-10">1 ongoing tasks to be completed</div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>        
        );
    }
   

}function mapStateToProps(state) {
  return {state: state}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({  
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);