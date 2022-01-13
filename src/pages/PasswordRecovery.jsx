import React from 'react';
import '../styles/PasswordRecovery.scss';

import logo from '@logos/logo_yard_sale.svg';

const PasswordRecovery = () => {
    return (
        <div className="PasswordRecovery">
            <div className="PasswordRecovery-container">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="title">Password Recovery</h1>
                <p className="subtitle">Inform the email address use to create your account</p>
                <form action="/" className="form">
                    <label htmlFor="email" className="label">Email adrress</label>
                    <input type="email" id="email" placeholder="Email" className="input input-email" />
                    <input type="submit" value="confirm" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export default PasswordRecovery;