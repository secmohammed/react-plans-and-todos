import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/layout/NavigationBar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import UpdateProject from "./components/projects/UpdateProject";
class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<NavigationBar />

					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route path="/project/create" component={CreateProject} />
						<Route path="/project/:id/update" component={UpdateProject} />
						<Route exact path="/project/:id" component={ProjectDetails} />
						<Route path="/auth/login" component={SignIn} />
						<Route path="/auth/register" component={SignUp} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
