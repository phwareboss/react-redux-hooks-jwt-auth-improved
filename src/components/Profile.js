import React from 'react';
import { JumbotronWrapper } from './common';

class Profile extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        };
    }
	render() {
		return (
			<JumbotronWrapper title="Profile" />
		);
	}

}
export default Profile;