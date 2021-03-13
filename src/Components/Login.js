import React,{useState} from 'react';
import AnimationPageOpen from './AnimationPageOpen';

const Login = () =>
{

    const [userEmail,setEmail] = useState();
    const [userPassword, setUserPassword] = useState();


    const inputEmailChange =(event) =>
    {
        setEmail(event.target.value);
    }

    const inputPasswordChange = (event) =>
    {
        setUserPassword(event.target.value);
    }

    const loginClicked =() =>
    {
       setEmail("");
       setUserPassword(""); 
       alert("Done");  
    }



  return (
        <>
            <div className="signin-div">
                <div className="form-part">

                <div className="form">

                    <input type="email" 
                           placeholder="Email"
                           onChange = { inputEmailChange }
                           value = {userEmail}

                    />
                    
                    <input type="password" 
                           placeholder="Password"
                           onChange = { inputPasswordChange }
                           value = {userPassword}
                    />
                                                
                        <div className="forget">
                            <small className="forget-small">Forgot Password? <span >RESET PASSWORD</span> </small>
                        </div>
                    <button className="signin-button" onClick={loginClicked}>LOGIN </button>

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
        );
};

export default  Login;