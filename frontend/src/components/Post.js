import React from 'react';
import data from '../data.json';

const Post = () => {

    const fetchedPost = data[0];

    const url = fetchedPost.image.url;
    const description = fetchedPost.description;
    const likes = fetchedPost.likes;

    const API_URL = 'http://localhost:1337';
    const formatImageURL = (url) => `${API_URL}${url}`;

    return (
        <div>
            <img src={formatImageURL(url)} alt='imag' />
            <h4>{description}</h4>
            <div>
                <span>Likes: {likes}</span>
            </div>
        </div>
    )
}

export default Post;