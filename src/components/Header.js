import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid p-0">
                        <Link className="navbar-brand fw-bold" to="/home">Logo Here</Link>
                        <button id="navbar-toggle" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/total-payments">Total Payments</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/verify-payment">Veified Payments</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
