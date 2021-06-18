import React, { Component } from 'react';
import axios from 'axios';


// Assets & Components include
import '../../../Assets/css/index.css';
import Sidebar from '../sidebar';
import { Header } from '../header';

export default class CreateOrder extends Component {
	constructor(props) {
		super(props);
		
		this.onChangeNama = this.onChangeNama.bind(this);
		this.onChangeAlamat = this.onChangeAlamat.bind(this);
		this.onChangeNoTelp = this.onChangeNoTelp.bind(this);
		this.onChangeNoAgent = this.onChangeNoAgent.bind(this);
		this.onChangeOrderProduct = this.onChangeOrderProduct.bind(this);
		this.onChangeJumlahOrder = this.onChangeJumlahOrder.bind(this);
		this.onChangeOptionPengiriman = this.onChangeOptionPengiriman.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		
		this.state = {
			nama: '',
			alamat: '',
			noTelp: 0,
			noAgent: 0,
			orderProduct: '',
			jumlahOrder: 0,
			optionPengiriman: '',
		}
	}
		
	componentDidMount() {
		this.setState({
			nama: 'Diana'
		});
	}
	
	onChangeNama(e) {
		this.setState({
			nama: e.target.value
		});
	}
	
	onChangeAlamat(e) {
		this.setState({
			alamat: e.target.value
		});
	}
	
	onChangeNoTelp(e) {
		this.setState({
			noTelp: e.target.value
		});
	}
	
	onChangeNoAgent(e) {
		this.setState({
			noAgent: e.target.value
		});
	}
	
	onChangeOrderProduct(e) {
		this.setState({
			orderProduct: e.target.value
		});
	}
	
	onChangeJumlahOrder(e) {
		this.setState({
			jumlahOrder: e.target.value
		});
	}
	
	onChangeOptionPengiriman(e) {
		this.setState({
			optionPengiriman: e.target.value
		});
	}
	
	onSubmit(e) {
		e.preventDefault();
		
		const order = {
			nama: this.state.nama,
			alamat: this.state.alamat,
			noTelp: this.state.noTelp,
			noAgent: this.state.noAgent,
			orderProduct: this.state.orderProduct,
			jumlahOrder: this.state.jumlahOrder,
			optionPengiriman: this.state.optionPengiriman,
		}
		
		axios.post('http://localhost:5000/order/add', order)
		 .then(res => console.log(res.data));
		
		console.log(order);
	}
	
	render() {
		return (
		
    <div className="grid grid-cols-12">
		<div className="col-span-2">
			<Sidebar/>
		</div>
		<div className="col-span-10 bg-gray-100">
			<Header/>
			<div className="bg-white min-h-screen rounded-tl-lg ml-12 p-12">
			<h3>Buat order baru (admin)</h3>
			<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<label>Nama: </label>
					<input type="text" className="form-control" value={this.state.nama} onChange={this.onChangeNama}/>
				</div>
				<div className="form-group">
					<label>Alamat: </label>
					<input type="text" className="form-control" value={this.state.alamat} onChange={this.onChangeAlamat}/>
				</div>
				<div className="form-group">
					<label>No Telp: </label>
					<input type="text" className="form-control" value={this.state.noTelp} onChange={this.onChangeNoTelp}/>
				</div>
				<div className="form-group">
					<label>No Agent: </label>
					<input type="text" className="form-control" value={this.state.noAgent} onChange={this.onChangeNoAgent}/>
				</div>
				<div className="form-group">
					<label>Order Product: </label>
					<input type="text" className="form-control" value={this.state.orderProduct} onChange={this.onChangeOrderProduct}/>
				</div>
				<div className="form-group">
					<label>Jumlah Order: </label>
					<input type="text" className="form-control" value={this.state.jumlahOrder} onChange={this.onChangeJumlahOrder}/>
				</div>
				<div className="form-group">
					<label>Option Pengiriman: </label>
					<input type="text" className="form-control" value={this.state.optionPengiriman} onChange={this.onChangeOptionPengiriman}/>
				</div>
				<div className="form-group">
					<input type="submit" value="Buat Order" className="btn btn-primary"/>
				</div>
			</form>
		</div>
	</div>
</div>
		)
	}
}