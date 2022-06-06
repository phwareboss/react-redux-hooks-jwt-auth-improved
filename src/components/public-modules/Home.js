import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { HeaderNavBar } from '../Navbars';

const navOptions = [
	{title: 'Login', path: '/login'},
	{title: 'Register', path: '/register'}
];

function Public_Home() {
	return (
		<>
			<HeaderNavBar routes={navOptions} />
			<Card className="text-center">
				<Card.Header>PUBLIC MODULE</Card.Header>
				<Card.Body>
					<Card.Title>Home</Card.Title>
				</Card.Body>
			</Card>
		</>
	);
}
export default Public_Home;
