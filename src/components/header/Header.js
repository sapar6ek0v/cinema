import React from 'react';
import {NavLink} from "react-router-dom";
import {Container, Dropdown} from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Container>
                <div className='header'>
                    <div className='about-box d-flex align-items-center'>
                        <NavLink className='link' to='/'>
                            home
                        </NavLink>
                        <NavLink className='link' to='/'>
                            serials
                        </NavLink>
                        <NavLink className='link' to='/'>
                            news
                        </NavLink>
                        <NavLink className='link' to='/'>
                            community
                        </NavLink>
                    </div>
                    <div className='register-box d-flex align-items-center'>
                        <Dropdown className='drop-button'>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <NavLink className='link' to='/all-films' >
                                    Movies
                                </NavLink>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >
                                    <NavLink to='/popular' >
                                        Popular
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <NavLink className='link' to='/'>
                            help
                        </NavLink>
                        <NavLink className='link' to='/'>
                            login
                        </NavLink>
                        <NavLink  className='link register-button' to='/'>
                            sign up
                        </NavLink>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;