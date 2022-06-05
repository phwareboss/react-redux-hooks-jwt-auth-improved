import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Logout, Register, ForgotPassword, LandingPage } from '../components';

function PublicRoutes() {
	return (
		<Fragment>
			<Routes>
				<Route index element={<LandingPage />} />	
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/register" element={<Register />} />	
				<Route path="/login" element={<Login />} />	
				<Route path="/logout" element={<Logout />} />	
			</Routes>
		</Fragment>
	)
}

export default PublicRoutes;