import React from 'react';
import AnimationPageOpen from './AnimationPageOpen';

const Login = () =>
{
  return (
        <>
            <div className="signin-div">
                <div className="form-part">

                <div className="form">
                  
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                        <div className="forget">
                            <small className="forget-small">Forgot Password? <span >RESET PASSWORD</span> </small>
                        </div>
                    <button className="signin-button">LOGIN </button>

                    <div className="login">
                        <small>Don't have an account?  <span >SIGN IN</span> </small>
                    </div>

                </div>
                    <div className="image">
                        <div className="image-part"></div>
                            <AnimationPageOpen />
                        </div>    
                    </div>
            </div>
        </>
        )
}

export default  Login;