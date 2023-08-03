
import React from "react";
import { Link } from "react-router-dom";
import './assets/css/Login.css'

function Login() {
    return (
        <div className='loginbg'>
            <div className="container">
                <div className="custom-form-main">
                    <form className="custom-form">
                        <h4 className='main-heading'>login</h4>
                        <div className="mb-3">
                            <label htmlFor="txtEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="txtEmail" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="txtPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="txtPassword" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                        </div>
                        <Link to="/home" className="btn btn-primary custom-button">Login</Link>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login
