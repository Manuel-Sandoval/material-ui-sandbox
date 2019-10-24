import React, { Component } from 'react';

//import Breakpoints from './components/Grids/Breakpoints/Breakpoints';
//import Breakpoints from './components/Grids/Breakpoints/AutoBreakpoints';
//import FillingSpace from './components/Grids/FillingSpace/FillingSpace'
//import ColumnDirection from './components/Grids/ColumnDirection/ColumnDirection'
import FixedPosition from './components/AppBar/FixedPosition/FixedPosition' 
class App extends Component {
	render () {
		return (
			<div>
				<FixedPosition />
			</div>
		);
	}
}

export default App;
