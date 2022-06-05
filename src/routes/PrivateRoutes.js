import React, { Fragment } from 'react';
import { Navigate, useRouteMatch } from 'react-router-dom';
import { getAllowedRoutes, isLoggedIn } from '../helpers';
import { PrivateRoutesConfig } from "../config";
import { TopNav } from '../components/common';
import MapAllowedRoutes from '../routes/MapAllowedRoutes';

function PrivateRoutes() {
	const match = useRouteMatch('/app');
	let allowedRoutes = [];

	if (isLoggedIn()) allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
	else return <Navigate to="/" />;

	return (
		<Fragment>
			<TopNav routes={allowedRoutes} prefix={match.path} className="bg-white" />
			<MapAllowedRoutes routes={allowedRoutes} basePath="/app" isAddNotFound />
		</Fragment>
	);
}

export default PrivateRoutes;