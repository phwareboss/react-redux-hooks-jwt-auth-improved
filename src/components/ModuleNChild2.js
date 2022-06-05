import React from 'react';
import { JumbotronWrapper } from './common';

class ModuleNChild2 extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        };
    }
	render() {
		return (
			<JumbotronWrapper title="Module - N - Child - 2" col={{md: '12'}} />
		);
	}

}
export default ModuleNChild2;