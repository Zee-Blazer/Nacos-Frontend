import React, { useState, useEffect } from 'react';

import { useNavigate, Link } from 'react-router-dom';

// API
import api from '../axios';

export const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const excoLogin = (e) => {
        e.preventDefault()
        api.post('/request/login', { email, password })
        .then( response => {
            window.localStorage.setItem("User", JSON.stringify(response.data.user));
            navigate('/');
        } )
        .catch( err => console.log(err) )
    }

    return (
        <div className="form__style">
            <div class="container">
                <div class="screen">
                    <div class="screen__content">
                        <h3 className="form__title">Login</h3>
                        <form class="login">
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input 
                                    type="text" 
                                    class="login__input" 
                                    placeholder="Email" 
                                    value={email}
                                    onChange={ e => setEmail(e.target.value) }
                                />
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input 
                                    type="password" 
                                    class="login__input" 
                                    placeholder="Password" 
                                    value={password}
                                    onChange={ e => setPassword(e.target.value) }
                                />
                            </div>
                            <button class="button login__submit" onClick={ excoLogin }>
                                <span class="button__text">Log In Now</span>
                                <i class="button__icon fas fa-chevron-right"></i>
                            </button>				
                        </form>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>		
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>		
                    <Link to="/signup">Signup</Link>
                </div>
            </div>
        </div>
    )
}
