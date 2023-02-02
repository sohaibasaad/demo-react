import React from 'react'
import PropTypes from 'prop-types'
import './css/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg mainNav ${props.mode}`}>
                <div className="container">
                    <Link className="navbar-brand logo" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mainNavUl">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn custom_btn btn_main mb-0" type="button">Search</button>
                        </form> */}
                        <div className="form-check form-switch custom_form_switch">
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" aria-checked="true" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.toggleModeButton}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Home",
    aboutText: "About"
}