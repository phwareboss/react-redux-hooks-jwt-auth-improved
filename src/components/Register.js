import React from 'react';
import { Link } from 'react-router-dom';
import { JumbotronWrapper } from './common';

class Register extends  React.Component {
	constructor(props) {
        super(props);
        this.state = {
        };
    }
	render() {
		return (
			<JumbotronWrapper title="Register">
			<Link to="/login">
				Back to login
			</Link>
		</JumbotronWrapper>
		);
	}

}
export default Register;


