import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export class Navbar extends Component {
	constructor(props){
		super(props);
	}

	logout(){
		console.log('logout button clicked')
		this.props.dispatch({type: 'LOGOUT_USER_ASYNC'})
	}

	render(){
		let loginLogout;
		if(this.props.user){
			loginLogout = <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
		}else{
			loginLogout = <li><Link to={`/login`}>Login</Link></li>
		}



		return(
  				<nav className="navbar navbar-default navbar-fixed-bottom">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <span className="navbar-brand" href="#">Brand</span>
				    </div>
				        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					      <ul className="nav navbar-nav">
					        <li><a href="#">Link</a></li>
					        <li><a href="#">Link</a></li>
					        {loginLogout}
					      </ul>
					      <ul className="nav navbar-nav navbar-right">
					        <li><a href="#">Link</a></li>
					      </ul>
					    </div>
				  </div>
				</nav>
			)
	}
}

function mapStateToProps(state){
	return state.get('registration').toJS()
}

export default connect(mapStateToProps)(Navbar)