import React, { useState } from 'react';
import axios from 'axios';

function Register(props) {

    const[fname, setFname] = useState('');
    const[lname, setLname] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[dob, setDob] = useState('');
    const[role, setRole] = useState('');

    async function submit(){

        const FormData = {
            "firstname": fname,
            "lasttname" : lname,
            "email": email,
            "password": password,
            "role" : role,
        }

        const submitForm = await axios({
            url: "http://localhost:5000/register",
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
                    Register Form
                </h3>
                <div className="mb-3">
                    <label>First Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter first name"
                        value={fname}
                        onChange={({target}) => setFname(target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Last Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter last name"
                        value={lname}
                        onChange={({target}) => setLname(target.value)}
                    />
                </div>

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
                        value={[password]}
                        onChange={({target}) => setPassword(target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Date of birth</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter your dob"
                        value={dob}
                        onChange={({target}) => setDob(target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Role</label>
                    <select
                        type="text"
                        className="form-control"
                        placeholder="Enter your email"
                        value={role}
                        onChange={({target}) => setRole(target.value)}
                    >
                        <option value="admin">Admin</option>
                        <option value="user">User</option>

                    </select>
                </div>

                <div className="mb-3">
                    <button type='button'  onClick={submit}>
                        Register
                    </button>
                </div>

            </form>
        </div>
    </div>
  </>
    )
}

export default Register;
