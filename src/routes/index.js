import React, { memo } from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import { history } from "../helpers/history";
import PrivateRoutes from './PrivateRoutes';
import Auth from './Auth';

function AppRoutes() {
	return (
		<Router history={history}>
			<Routes>
				<Route index element={<Auth />} />
				<Route path="/app" element={<PrivateRoutes />} />
			</Routes>
		</Router>
	)
}

export default memo(AppRoutes);
