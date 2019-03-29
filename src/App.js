import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import NavigationBar from "./components/layout/NavigationBar";
import {registerRoutes} from './routes'
import { ToastsStore, ToastsContainer } from "react-toasts";
import { clearNotification } from "./store/actions/notificationActions";
import { connect } from "react-redux";
class App extends Component {
	componentDidUpdate() {
		if (this.props.message) {
			ToastsStore[this.props.type](this.props.message);
			this.props.clearNotification();
		}
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<NavigationBar />
					<Switch>
						{registerRoutes()}
					</Switch>
					<ToastsContainer store={ToastsStore} />
				</div>
			</BrowserRouter>
		);

	}
}
const mapStateToProps = state => {
	return {
		isLoading: state.loading.loading,
		message: state.notification.message,
		type: state.notification.type
	};
};
export default connect(mapStateToProps,{
	clearNotification
})(App);
