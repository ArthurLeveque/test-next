import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const register = () => {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const data = {
        email: email,
        password: password
    };

    const loginFetchRequest = async () => {
        const request = await axios.post("/api/login", data);
        if(request.status === 200) {
            router.push('/posts')
        }
    }

    return (
        <div>
            <form action="post">
                <label htmlFor="input-email-login">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id='input-email-login' />

                <label htmlFor="input-password-login">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id='input-password-login'/>

                <button type="button" onClick={() => loginFetchRequest()}>Log in</button>
            </form>
        </div>
    );
};

export default register;