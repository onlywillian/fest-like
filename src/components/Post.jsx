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
                    <ImageIcon>COmment</ImageIcon>
                </div>
            </Wrapper>
        </Container>
     );
}

const Container = styled.div`
    display: flex;
    max-height: 300px;
    min-height: 100px;
    border-bottom: 1px solid #aaa;
`
const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`
const Nome = styled.b`
    margin: 0 5px;
    font-weight: bold;
    font-size: .8rem;
`
const ImageIcon = styled.i`
    
`
const Text = styled.div`
    
`
export default Post;