import styled from 'styled-components';

import Post from './Post';

const PostsArea = ({ posts }) => {
    const text = posts[0] == null ? 
    "Você não postou nada ainda, tente fazer seu primeiro post." :
    "Os posts terminam aqui!"

    return ( 
        <Container>
            {posts.map(post => (
                <Post key={post.id} userName={post.userName} postText={post.postText}/>
            ))}
            <Last style={{}}>
                <Text>{text}</Text>
            </Last>
        </Container>
     );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 8;
    overflow-y: auto;
`
const Last = styled.div`
    margin: 20px 0;
    display: flex;
    width: 100%;
    justify-content: center;
`
const Text = styled.div`
    font-size: .9rem;
    color: gray;
`
export default PostsArea;