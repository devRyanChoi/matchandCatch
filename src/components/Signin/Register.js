import React, { useRef, useState, useEffect } from "react";
import axios from './api/axios';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const REGISTER_URL = '/signin';


export const Register = (props) => {
    console.log(typeof(EMAIL_REGEX));
    const emailRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pass, setPass] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
    
    const [matchPass,setMatchPass] = useState('');
    const [validMatch,setValidMatch ] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    function validation(emailAddres, passWord, passWordConfirm) {
        //if pa === passWord;
        //if em === emailAddress.
        //name
        //setUser = 
        props.state.sellers.map((user) => {
            //if user.email == userInputEmail
            //if user.pass == userInputPassword
            // user.id
            // props.state.user = setState(user: user.id);
        })
    }

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPass(PASS_REGEX.test(pass));
        setValidMatch(pass === matchPass);
    }, [pass, matchPass])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PASS_REGEX.test(pass);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        } 
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ email, pass }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setEmail('');
            setPass('');
            setMatchPass('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            useRef.current.focus();
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <div className="register-form" >
            <label htmlFor="email">Email:</label>
            <input 
            type="email" 
            id="email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}

            />
            
            <label htmlFor="password">Password:</label>

            <input 
            type="password" 
            id="password" 
            onChange={(e) => setPass(e.target.value)} 
            value={pass} 
            required
            placeholder="********" 
            name="password" />


            <label htmlFor="confirm_pass">
                        Confirm Password: </label>
            <input 
            type="password"
            id="confirm_pass" 
            onChange={(e) => setMatchPass(e.target.value)} 
            value={matchPass} 
            placeholder="********" 
            name="password" />


            <button onClick={() => (console.log("Button CLicked"))}>Register</button>
            {/* <button type="submit">Register</button> */}



        </div>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}