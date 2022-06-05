import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"; 

import HeaderNavBar from "./components/navbar";

//import SampleComponent from "./components/reactsample.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";




import { logout } from "./redux/slices/auth.slice";
import clearMessage from "./redux/slices/message.slice";
import { history } from "./helpers/history";

class App extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };
        history.listen((location) => {
            props.dispatch(clearMessage()); // clear message when changing location
        });
    }
    componentDidMount() {
        const user = this.props.user;
        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }
    }
    logOut() {
        this.props.dispatch(logout());
    }
    render() {
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
        return (
            <Router history={history}>
                <HeaderNavBar />
                <div className="container mt-3">
                    <Routes>
                        <Route index element={<Home/>} />
                        <Route path="/home" element={<Home/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/profile" element={<Profile/>} />
                        <Route path="/user" element={<BoardUser/>} />
                        <Route path="/mod" element={<BoardModerator/>} />
                        <Route path="/admin" element={<BoardAdmin/>} />
                    </Routes>
                </div>
            </Router>
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
