import React from 'react';

import initializeAuthentication from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';


initializeAuthentication();


const Login = () => {

    const { handleGoogleSignIn, handleEmailRegister, handlemailchange, handlepasswordchange, error, toggleLogin, islogin } = useAuth();


    return (
        <div className='pt-5'>
            <h3 style={{ fontFamily: "roboto", fontWeight: "bold" }}>Please {islogin ? "Login" : "Register"}</h3>
            <div className='m-auto border shadow p-5 w-50'>
                <form onSubmit={handleEmailRegister}>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3" onBlur={handlemailchange} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3" onBlur={handlepasswordchange} />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-sm-10 offset-sm-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={toggleLogin} />
                                <label class="form-check-label" for="gridCheck1" >
                                    Already Registered?
                                </label>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div>{error}</div>
                    <br />
                    <button type="submit" class="btn btn-primary">{islogin ? "Login" : "Register"}</button>
                </form>

                <br /><br />

                <button onClick={handleGoogleSignIn} className='btn-danger'>Google Sign in</button>

            </div>
        </div>
    );
};

export default Login;