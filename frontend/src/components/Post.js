import React, { useState, useEffect } from 'react';

const Post = () => {

    const [posts, setPosts] = useState([]);

    const getData = async () => {
        const res = await fetch('http://localhost:1337/posts');
        const data = await res.json();
        setPosts(data)
    }

    useEffect(() => {
        getData()
    }, []);

    const API_URL = 'http://localhost:1337';
    const formatImageURL = (url) => `${API_URL}${url}`;

    return (
        <>
            {
                posts.map(item => (
                    <div className="post" key={item.id}>
                        <img className="post_image" src={formatImageURL(item.image.url)} alt='imag' />
                        <h4>{item.description}</h4>
                        <div>
                            <span>Likes: {item.likes}</span>
                        </div>
                    </div>
                )
                )
            }

        </>
    )
}

export default Post;