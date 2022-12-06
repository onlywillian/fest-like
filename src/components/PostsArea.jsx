import { useState } from 'react';

import styled from 'styled-components';

import Post from './Post';

const PostsArea = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            userName: 'Will',
            postText: 'asldasdasldsad'
        },
        {
            id: 2,
            userName: 'Will',
            postText: 'asldasdasldsadasldasdasldsadas ldasdasldsadasldasdasldsa dasldasd asldsadas ld asdasldsad asl dasdasldsad'
        },
        {
            id: 3,
            userName: 'Will',
            postText: 'asldasdasldsad'
        },
        {
            id: 4,
            userName: 'Will',
            postText: 'asldasdasldsad'
        },
        {
            id: 5,
            userName: 'Will',
            postText: 'asldasdasldsad'
        },
    ])

    return ( 
        <Container>
            {posts.map(post => (
                <Post key={post.id} userName={post.userName} postText={post.postText}/>
            ))}
        </Container>
     );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 8;
    overflow-y: auto;
`
export default PostsArea;