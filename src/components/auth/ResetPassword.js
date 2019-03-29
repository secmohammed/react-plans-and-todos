import React, { Component } from "react";
import { Col, Input, Icon, Button } from "react-materialize";
import { connect } from "react-redux";
import { resetPassword } from "../../store/actions/authActions.js";
import { setNotification } from '../../store/actions/notificationActions'

import qs from 'qs'
class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
        this.state = {
            email: "",
            code: this.query.oobCode
        };
    }
    componentWillMount() {
        if (this.props.isAuthenticated) {
            this.props.history.push('/')
            this.props.setNotification({
                message: 'You are already logged in',
                type: 'warning'
            })

        }
        if (!this.query.oobCode) {
            this.props.history.push('/')
            this.props.setNotification({
                message: 'The token was not passed',
                type: 'error'
            })
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.resetPassword(this.state)
    };
    render() {
        return (
            <div className="container">
                <Col>

                    <form onSubmit={this.handleSubmit}>
                        <Input
                            name="password"
                            label="password"
                            validate
                            type="password"
                            labelClassName="white-text"
                            onChange={this.handleChange}>
                            <Icon>lock</Icon>
                        </Input>
                        <Button waves="light">Change Password</Button>
                    </form>
                </Col>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};
export default connect(
    mapStateToProps,
    {
        resetPassword,
        setNotification
    }
)(ResetPassword);
