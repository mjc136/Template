import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss'; // Ensure this path is correct

const Navbar: React.FC = () => {
    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="light">
                <div className="container d-flex justify-content-between align-items-center p-0">
                    {/* Logo */}
                    <NavLink className="navbar-brand p-0" to="/">
                        <img src="./Images/Test-Logo.svg" alt="Logo" width="100" height="50" />
                    </NavLink>

                    {/*not working*/}
                    {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="test" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">*/}
                    {/*    <span className="navbar-toggler-icon"></span>*/}
                    {/*</button>*/}

                    {/* Navigation Links */}
                    <div className="collapse navbar-collapse" id="test">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-pills">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} text-white`}
                                    to="/"
                                    end
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} text-white`}
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} text-white`}
                                    to="/item1"
                                >
                                    Item 1
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} text-white`}
                                    to="/item2"
                                >
                                    Item 2
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} text-white`}
                                    to="/item3"
                                >
                                    Item 3
                                </NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
