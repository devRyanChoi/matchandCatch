import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [adminpass, setAdminpass] = useState('');
    const navigate = useNavigate();
    const handleClick = () => navigate('/');
    function validate(userEmail, userPa,adminPa) {
        if(!adminPa){
            const search = props.seller.filter((sell) => sell.email == userEmail)
        const user = {id: search[0].id, admin: false, status:true, name:search[0].name}
        props.removeLogin(user);
        props.setLogin(user);
        } else {
            const search = props.dealer.filter((deal) => deal.email == userEmail)
            console.log(search);
        const user = {id: search[0].id, admin: true, status:true, name:search[0].name}
        props.removeLogin(user);
        props.setLogin(user);
        }
        
        
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <label htmlFor="password">admin</label>
                <input value={adminpass} onChange={(e) => setAdminpass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button onClick={()=>{validate(email,pass,adminpass); handleClick()}}>Log In</button>

            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}