import styled from 'styled-components';

import Perfil from './Perfil';

const Post = ({ userName, postText }) => {
    return ( 
        <Container>
            <Perfil />
            <Wrapper>
                <Nome>{userName}</Nome>
                <Text>{postText}</Text>
                <div style={{display: 'flex', margin: '5px'}}>
                    <ImageIcon>Like</ImageIcon>
                    <ImageIcon>Deslike</ImageIcon>
                    <ImageIcon>Comment</ImageIcon>
                </div>
            </Wrapper>
        </Container>
     );
}

const Container = styled.div`
    display: flex;
    gap: 20px;
    border-bottom: 1px solid #aaa;
`
const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`
const Nome = styled.b`
    margin: 0 5px;
    margin-top: 10px;
    font-weight: bold;
    font-size: .8rem;
`
const ImageIcon = styled.i`
    
`
const Text = styled.div`
    margin: 0 5px;
    font-size: .8rem;
    opacity: .8;
`
export default Post;