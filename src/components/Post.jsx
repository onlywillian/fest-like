import styled from 'styled-components';

import Perfil from './Perfil';
import Like from '../assets/like';
import Dislike from '../assets/dislike';
import Comment from '../assets/comentario';

const Post = ({ userName, postText }) => {
    return ( 
        <Container>
            <Perfil />
            <Wrapper>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                    <Nome>{userName}</Nome>
                    <MoreIcon>{'>'}</MoreIcon>
                </div>
                <Text>{postText}</Text>
                <div style={{display: 'flex', margin: '5px', width: '100%', gap: 20}}>
                    <Like style={{width: 15, height: 15, cursor: 'pointer'}}/>
                    <Dislike style={{width: 15, height: 15, cursor: 'pointer'}}/>
                    <Comment style={{width: 15, height: 15, cursor: 'pointer'}}/>
                </div>
            </Wrapper>
        </Container>
     );
}

const Container = styled.div`
    display: flex;
    position: realative;
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
const MoreIcon = styled.i`
    padding: 10px 15px;
    transform: rotate(90deg);
    cursor: pointer;
`
const Text = styled.div`
    margin: 0 5px;
    margin-bottom: 10px;
    font-size: .8rem;
    opacity: .8;
`
export default Post;