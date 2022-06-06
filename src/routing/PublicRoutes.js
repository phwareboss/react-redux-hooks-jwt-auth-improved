import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, LoginDemo, Logout, Register, Forgot } from '../components/public-modules';

function PublicRoutes() {
	return (
		<Fragment>
			<Routes>
				<Route index element={<Home />} />	
				<Route path="/forgot" element={<Forgot />} />
				<Route path="/register" element={<Register />} />	
				<Route path="/login" element={<LoginDemo />} />	
				<Route path="/logout" element={<Logout />} />	
			</Routes>
		</Fragment>
	)
}

export default PublicRoutes;