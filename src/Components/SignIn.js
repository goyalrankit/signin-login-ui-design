import React from 'react'
import AnimationPage from './AnimationPage';

const SignIn = () => {

        return (
        <>
            <div className="signin-div">
                <div className="form-part">

                <div className="form">
                    <input type="text" placeholder="Full Name"/>
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="phone" placeholder="Phone"/>
                    <input type="text" placeholder="Gender"/>
                    <input type="password" placeholder="Password"/>


                    <button className="signin-button">SIGN IN </button>

                    <div className="login">
                        <small>Already have an account?  <span >Login</span> </small>
                    </div>

                </div>
                    <div className="image">
                        <div className="image-part"></div>
                            <AnimationPage />
                        </div>    
                    </div>
            </div>
        </>
        )
    
}

export default SignIn;