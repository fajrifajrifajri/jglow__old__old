// Import React & Required libs
import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTruck, faBoxOpen, faUserSecret, faUsersCog, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

// Styling
import '../../Assets/css/index.css';
import "./Sidebar/accordion.css";

// Assets & Components include
import logo from '../../Assets/img/Logo JGLOW.png';
import Accordion from "./Sidebar/accordion";

class Sidebar extends Component {
	
  render() {
    return (
    <div id="sidebar" className="h-screen py-16 text-lg">
		<img src={logo} alt="logo" className="block m-auto"/>
		<div className="my-4">
			<button className='accordion w-full'>
				<div className='flex px-4'>
					<FontAwesomeIcon icon={faHome} className='m-auto fa-sm mr-3' />
					<p className="font-bold">Beranda</p>
				</div>
			</button>
			<Accordion
			   fontAwesome={faTruck}
			   title="Order"
			/>
			<Accordion
			   fontAwesome={faBoxOpen}
			   additionalClass="text-gray-200"
			   isDisabled={true}
			   title="Produk"
			/>
			<Accordion
			   fontAwesome={faUserSecret}
			   additionalClass="text-gray-200"
			   isDisabled={true}
			   title="Agent"
			/>
			<Accordion
			   fontAwesome={faUsersCog}
			   additionalClass="text-gray-200"
			   isDisabled={true}
			   title="Kelola User"
			/>
			<button className='accordion w-full'>
				<div className='flex px-4'>
					<FontAwesomeIcon icon={faArrowAltCircleLeft} className='m-auto fa-sm mr-3' />
					<p className="font-bold">Keluar</p>
				</div>
			</button>
		</div>
    </div>
    );
  }
}

export default Sidebar;