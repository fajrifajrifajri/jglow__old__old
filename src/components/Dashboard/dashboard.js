// Import React & Required libs
import React, { Component } from 'react';

// Assets & Components include
import '../../Assets/css/index.css';
import Sidebar from './.Main Components/sidebar';

class Dashboard extends Component {
	
  render() {
    return (
    <div id="dashboard" className="grid grid-cols-12">
		<div className="col-span-2">
			<Sidebar/>
		</div>
		<div className="col-span-10">
			
		</div>
    </div>
    );
  }
}

export default Dashboard;