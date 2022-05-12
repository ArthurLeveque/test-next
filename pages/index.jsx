import React, { useState, useEffect } from 'react';
import { getCookie, removeCookies } from 'cookies-next';
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter()
    const [token, setToken] = useState();

    const userCookie = getCookie('token');

    const disconnectUser = () => {
        removeCookies('token');
        removeCookies('userId');
        router.push('/');
    }

    useEffect(() => {
        setToken(userCookie)
    }, [userCookie])

    return (
        <div>
            {!token && 
                <div>
                    <a href="/login">Se connecter</a><br />
                    <a href='/register'>S'inscrire</a>
                </div>
            }
            {token && 
                <div>
                    <button  onClick={() => disconnectUser()}>Se déconnecter</button>
                </div>
            }
            <br />
            <a href="/posts">Voir les posts</a>
        </div>
    );
};

export default index;