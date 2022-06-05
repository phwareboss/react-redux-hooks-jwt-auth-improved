import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';
import AppRouter from './routing';

class App extends React.Component {
    render() {
       // const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
        return (
            <Container fluid>
                <Row>
                    <Col className="p-0">
                        <AppRouter />
                    </Col>
                </Row>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user,
    };
}
export default connect(mapStateToProps)(App);
