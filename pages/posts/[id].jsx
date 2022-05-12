import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';

const posts = () => {
    const router = useRouter()
    const { id } = router.query

    const [postData, setPostData] = useState();
    const [postAuthor, setAuthorData] = useState();
    const [postComments, setPostComments] = useState();
    const [loaded, setLoaded] = useState(false);

    const [userID, setUserID] = useState('');
    const [commentContent, setCommentContent] = useState('');

    const userCookie = getCookie('userId');

    const getPostData = async () => {
        const post = await axios.get(`/api/posts/${id}`);
        setPostData(post.data);
        console.log(post.data)

        setAuthorData(post.data.author);
        setPostComments(post.data.comments);
        setLoaded(true);
    };

    const data = {
        content: commentContent,
        userId: parseInt(userID),
        postId: parseInt(id)
    };

    const postComment = () => {
        axios.post(`/api/posts/${id}/comment`, data);
    }

    useEffect(() => {
        setUserID(userCookie)
    }, [userCookie])

    useEffect(() => {
        if(id) {
            getPostData()
        }
    }, [id])


    return(
        <div>
            <a href="/posts">Retour aux postes</a>
            {!loaded &&
                <p>Loading...</p>
            }
            {loaded && postData &&
                <div>
                    <h1>{postData.title}</h1>
                    <i>Par : {postAuthor.name}</i>
                    <p>{postData.content}</p>

                    <hr />

                    {userID &&
                        <div>
                            <h2>Poster un commentaire</h2>
                            <textarea cols="30" rows="10" onChange={(e) => setCommentContent(e.target.value)}>{commentContent}</textarea><br />
                            <button onClick={() => postComment()}>Envoyer</button>
                        </div>
                    }

                    <ul>
                        {postComments.map(comment => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.user.name}</p>
                                    <p>{comment.content}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </div>
    );
};

export default posts;