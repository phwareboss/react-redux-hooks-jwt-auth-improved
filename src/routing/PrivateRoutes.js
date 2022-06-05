import React, { Fragment } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


import { getAllowedRoutes, isLoggedIn } from '../helpers';
import { PrivateRoutesConfig } from "../config";

import { HeaderNavBar } from '../components/Navbars';
import MapAllowedRoutes from '../routing/MapAllowedRoutes';

import { APP_CONSTANTS } from '../config/constants';

function PrivateRoutes() {
	//console.log(match);
	let allowedRoutes = [];

	if (isLoggedIn()) allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
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