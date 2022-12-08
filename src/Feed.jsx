import React, { useState } from 'react';

import styled from 'styled-components';

import Header from './components/Header';
import PublishArea from './components/PublishArea';
import PostsArea from './components/PostsArea';
import Footer from './components/Footer';

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            id: Math.random(10),
            userName: 'Will_lindo',
            postText: 'Que dia lindo hoje!'
        },
        {
            id: Math.random(10),
            userName: 'gabriel789',
            postText: 'Copa do mundo está muito dura, quem confia no HEXA?'
        },
    ])

    const handleButtonPublishClick = (name, data, set) => {
        let newPosts = [...posts, {
            id: Math.random(10),
            userName: name,
            postText: data
        }];

        set('')

        return setPosts(newPosts);
    }

    return ( 
        <Container>
            <Header />
            <PublishArea handleButtonPublishClick={handleButtonPublishClick}/>
            <PostsArea posts={posts}/>
            <Footer />
        </Container>
     );
}
const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`
 
export default Feed;