import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import NavigationBar from "./components/layout/NavigationBar";
import {registerRoutes} from './routes'
import { connect } from "react-redux";

import Spinner from './components/Spinner'
class App extends Component {
	render() {
		if(this.props.isLoading) {
			return (
				<div className="App">
					<BrowserRouter>
						<NavigationBar />
					</BrowserRouter>
				   <Spinner />
			   </div>
			);
		}
		return (
			<BrowserRouter>
				<div className="App">
					<NavigationBar />
					<Switch>
						{registerRoutes()}
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
const mapStateToProps = state => {
	return {
		isLoading: state.loading.loading
	};
};
export default connect(mapStateToProps,{})(App);
