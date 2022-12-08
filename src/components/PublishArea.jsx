import styled from 'styled-components';

import Perfil from './Perfil';

import Galeria from '../assets/galeria';
import { useState } from 'react';

const PublishArea = ({ handleButtonPublishClick }) => {
    const [userName, setUserName] = useState('Flavin do Pneu');
    const [postData, setPostData] = useState('');

    return ( 
        <Container>
            <Perfil />
            <Wrapper>
                <Nome>Flavin do Pneu</Nome>
                <Input placeholder='Escreva algo para publicar' value={postData} onInput={e => setPostData(e.target.value)}/>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5px'}}>
                    <Galeria style={{height: 40, width: 40, cursor: 'pointer'}}/>
                    <Button 
                        onClick={() => handleButtonPublishClick(userName, postData, setPostData)}
                    >
                        Publicar
                    </Button>
                </div>
            </Wrapper>
        </Container>
     );
}

const Container = styled.div`
    display: flex;
    gap: 20px;
    flex: 1;
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
const Input = styled.input`
    flex: 1;
    padding: 10px 5px;
    outline: 0;
    font-size: .8rem;
    margin: 0 5px;
`
const Button = styled.button`
    flex: 1;
    border-radius: 0;
    background: var(--main-blue-color);
    color: white;
    font-weight: bold;
    border: none;
    outline: 0;
    min-height: 30px;
    max-height: 50px;
    max-width: 80px;
    cursor: pointer;
`
export default PublishArea;