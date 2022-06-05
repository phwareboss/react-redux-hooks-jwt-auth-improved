import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"; 

class HeaderNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearch: false,
            currentUser: undefined,
        };
    }
    componentDidMount() {
        const user = this.props.user;
        if (user) {
            this.setState({
                currentUser: user,
                showSearch: user.roles.includes("HEADER_SEARCH"),
            });
        }
    }
    render() {
        const { currentUser, showSearch } = this.state;
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user,
    };
}
export default connect(mapStateToProps)(HeaderNavBar);
