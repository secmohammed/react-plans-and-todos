import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { Col, Row } from "react-materialize";
export default class Spinner extends Component {
	render() {
		return (
			<Row center>
				<Col s={12}>
					<Loader type="Circles" height={80} width={80} />
				</Col>
			</Row>
		);
	}
}
