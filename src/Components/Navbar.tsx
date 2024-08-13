import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.scss'; // Ensure this path is correct

const Navbar: React.FC = () => {
    const location = useLocation();

    // Function to map pathnames to user-friendly titles
    const getPageTitle = (pathname: string) => {
        switch (pathname) {
            case '/':
                return 'Home';
            case '/contact':
                return 'Contact Us';
            case '/item':
                return 'Item 1';
            case '/item2':
                return 'Item 2';
            case '/item3':
                return 'Item 3';
            default:
                return 'Welcome';
        }
    };

    return (
        <div className="nav-img d-inline-flex p-0 border-bottom position-relative">
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-dark" data-bs-theme="light">
                    <div className="container d-flex justify-content-between align-items-center p-0">
                        {/* Logo */}
                        <NavLink className="navbar-brand p-0" to="/">
                            <img src="./Images/Test-Logo.svg" alt="Logo" width="100" height="100" />
                        </NavLink>

                        {/* Corrected Button */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Navigation Links */}
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav nav-pills">
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
                                        to="/item"
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
                                <button className="btn btn-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Header text overlay on the image */}
            <h1 className="position-absolute top-50 start-50 translate-middle text-white">{getPageTitle(location.pathname)}</h1>
        </div>
    );
}

export default Navbar;
