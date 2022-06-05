import React from 'react';
import { JumbotronWrapper } from './common';

class ModuleNChild3 extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        };
    }
	render() {
		return (
			<JumbotronWrapper title="Module - N - Child - 3" col={{md: '12'}} />
		);
	}

}
export default ModuleNChild3;