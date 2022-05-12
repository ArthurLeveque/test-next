import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userID, setUserID] = useState('');

    const userCookie = getCookie('userId');

    const data = {
        title: title,
        content: content,
        authorId: parseInt(userID)
    };

    const postFetchRequest = async () => {
        const request = await axios.post("/api/newpost", data);
        if(request.status === 200) {
            router.push(`/posts/${request.data.id}`)
        }
    }

    useEffect(() => {
        setUserID(userCookie)
    }, [userCookie])

    return (
        <div>
            <form action="post">
                <label htmlFor="input-title-post">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id='input-title-post' />

                <label htmlFor="input-content-post">Content</label>
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} id='input-content-post' />

                <button type="button" onClick={() => postFetchRequest()}>post</button>
            </form>
        </div>
    );
};

export default index;