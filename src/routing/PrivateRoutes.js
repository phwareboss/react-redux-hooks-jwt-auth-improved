import React, { Fragment } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


import { isLoggedIn } from '../helpers';
import { getAllowedRoutes } from "../config/PrivateRoutes.config";

import { HeaderNavBar } from '../components/Navbars';
import MapAllowedRoutes from '../routing/MapAllowedRoutes';

import APP_CONSTANTS from '../config/Constants.config';

function PrivateRoutes() {
	//console.log(match);
	let allowedRoutes = [];

	if (isLoggedIn()) allowedRoutes = getAllowedRoutes();
	else return <Navigate to="/" />;
	
	//console.log(allowedRoutes);

	return (
		<Fragment>
			<HeaderNavBar routes={allowedRoutes} basePath={ APP_CONSTANTS.AUTH_BASE_PATH } className="bg-white" />
			<MapAllowedRoutes routes={allowedRoutes} basePath={ APP_CONSTANTS.AUTH_BASE_PATH } isAddNotFound />
		</Fragment>
	);
}

export default PrivateRoutes;