import React from 'react';
import { HeaderNavBar } from '../components/Navbars';

const navOptions = [
	{title: 'Login', path: '/login'},
	{title: 'Register', path: '/register'}
];

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render() {
        return (
            <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
			<HeaderNavBar routes={navOptions}/>
			<div className="w3-display-middle">
				<h1 className="w3-jumbo w3-animate-top">LANDING PAGE</h1>
			
			</div>
			
		</div>
        );
    }
}
export default LandingPage;
