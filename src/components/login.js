// Import React & Required libs
import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';
import axios from 'axios';

// Styling
import '../Assets/css/index.css';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

// Assets include
import logo from '../Assets/img/Logo JGLOW.png';
import logoSaturated from '../Assets/img/Logo JGLOW saturated.png';

class Login extends Component {
	constructor(props) {
		super(props);
		
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		
		this.state = {
			username: '',
		}
	}
	
	
	onChangeUsername(e) {
		this.setState({
			username: e.target.value
		});
	}
	
	onSubmit(e) {
		e.preventDefault();
		
		const user = {
			username: this.state.username,
		}
		
		console.log(user);
		
		axios.post('http://localhost:5000/users/add', user)
		.then(res => console.log(res.data));
		
		this.setState({
			username: ''
		})
	}
	
  render() {
    return (
    <div id="login" className="flex bg-pink-light h-screen">
		<div className="m-auto">
			<img src={logoSaturated} className="w-9/12 m-auto mb-8" alt="logo saturated"/>
			<form onSubmit={this.onSubmit} className="bg-white border rounded-lg p-6 shadow-md">
				<div className="flex-col">
					<img src={logo} alt="logo" className="block m-auto"/>
					<h1 className="block m-auto text-center text-xl font-bold">PT. JGLOW BEAUTYCARE</h1>
				</div>
				<div className="flex bg-gray-100 mt-4 rounded-t text-sm">
					<FontAwesomeIcon icon={faUser} className="text-gray-400 p-3 fa-3x" />
					<input type="text" name="username" value={this.state.username} onChange={this.onChangeUsername} placeholder="E-mail" className="bg-gray-100 pl-2 w-full"/>
				</div>
				<div className="flex bg-gray-100 mb-4 rounded-b text-sm">
					<FontAwesomeIcon icon={faLock} className="text-gray-400 p-3 fa-3x" />
					<input type="text" placeholder="Password" className="bg-gray-100 pl-2 w-full"/>
				</div>
				<input type="submit" value="Log in" className="bg-green-300 text-white w-full py-2 cursor-pointer"/>
			</form>
		</div>
    </div>
    );
  }
}

export default Login;