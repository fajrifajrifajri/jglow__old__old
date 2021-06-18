// Import React & Required libs
import React, { Component } from 'react';

// Assets & Components include
import '../../Assets/css/index.css';
import Sidebar from './sidebar';
import { TableOrder } from './Order/table-order';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faChevronDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class Order extends Component {
	
  render() {
    return (
    <div className="grid grid-cols-12">
		<div className="col-span-2">
			<Sidebar/>
		</div>
		<div className="col-span-10 bg-gray-100">
			<div className="grid grid-cols-12 gap-x-3 my-8 text-pink-dark">
				<div className="col-start-9 col-span-3 text-right">
					<h5 className="text-sm">Masuk sebagai</h5>
					<button>
						<FontAwesomeIcon icon={faChevronDown} className='fa-lg w-16 mr-4' />
						<span className="text-3xl font-bold underline">DISTRIBUTOR</span>
					</button>
				</div>
				<div className="col-span-1">
					<FontAwesomeIcon icon={faAddressCard} className="fa-3x" />
				</div>
			</div>
			<div className="bg-white min-h-screen rounded-tl-lg ml-12 p-12">
				<div className="grid grid-cols-12 mb-8">
					<div className="col-start-8 col-span-4">
						<h5 className="text-center">Order minggu ini</h5>
					</div>
					<div className="col-span-6">
						<button className="bg-pink-dark text-white text-xl py-2 pl-4 pr-6 rounded-full">
							<FontAwesomeIcon icon={faChevronLeft} className='fa-lg w-16 mr-2' />
							<span className="font-bold">
								Order
							</span>
						</button>
					</div>
					<div className="col-span-6 flex gap-x-1">
						<button className="flex-1 bg-yellow-400 p-2 border border-black">30 MENUNGGU</button>
						<button className="flex-1 bg-green-400 p-2 border border-black">24 ORDER</button>
						<button className="flex-1 bg-red-400 p-2 border border-black">4 CANCELLED</button>
					</div>
				</div>
				<TableOrder/>
			</div>
		</div>
    </div>
    );
  }
}

export default Order;