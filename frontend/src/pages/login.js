import React, { useState } from 'react';
import axios from 'axios';

function Login(props) {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    async function submit(){

        const FormData = {
            "email": email,
            "password": password 
        }

        const submitForm = await axios({
            url: "http://localhost:5000/login",
            method:'post',
            data : FormData,
        })

        
    }

    return(
  <>
    <div className="mainDiv">
        <div className="loginDiv">
            <form>
                <h3>
                    Login Form
                </h3>

                <div className="mb-3">
                    <label>Email</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input 
                        type="password"
                        className="form-control"
                        placeholder="create Password"
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                    />
                </div>

                <div className="mb-3">
                    <button type='button' onClick={submit}>
                        Login
                    </button>
                </div>

            </form>
        </div>
    </div>
  </>
    )
}

export default Login;
