import React, { memo } from 'react';
import { JumbotronWrapper } from './common';
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render() {
        return (
            <JumbotronWrapper title="Dashboard" />
        );
    }
}
export default memo(Dashboard);
