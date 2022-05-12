import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { getCookie } from 'cookies-next';

const posts = () => {
    const [postsData, setPostsData] = useState();
    const [loaded, setLoaded] = useState(false);
    const [userID, setUserID] = useState('');

    const userCookie = getCookie('userId');

    const getPostsData = async () => {
        const posts = await axios.get("/api/posts")
        setPostsData(posts.data);
        setLoaded(true);
    };

    useEffect(() => {
        setUserID(userCookie)
    }, [userCookie])

    useEffect(() => {
        getPostsData()
    }, [setPostsData])

    return (
        <div>
            {userID &&
                <Link href={'/newpost'}>Nouveau poste</Link>
            }
            
            <h1>Les postes</h1>

            <ul>
                {!loaded &&
                    <p>Loading...</p>
                }
                {loaded && postsData.map(post => {
                    return (
                        <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
                    )
                })}
            </ul>
        </div>
    );
};

export default posts;