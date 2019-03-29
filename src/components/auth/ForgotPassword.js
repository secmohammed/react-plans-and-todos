import React, { Component } from "react";
import { Col, Input, Icon, Button } from "react-materialize";
import { connect } from "react-redux";
import { sendPasswordResetEmail } from "../../store/actions/authActions.js";
import { setNotification } from '../../store/actions/notificationActions'

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
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
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.sendPasswordResetEmail(this.state.email)
    };
    render() {
        return (
            <div className="container">
                <Col>

                    <form onSubmit={this.handleSubmit}>
                        <Input
                            name="email"
                            label="email"
                            validate
                            labelClassName="white-text"
                            onChange={this.handleChange}>
                            <Icon>account_circle</Icon>
                        </Input>
                        <Button waves="light">Send me an Email</Button>
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
        sendPasswordResetEmail,
        setNotification
    }
)(ForgotPassword);
