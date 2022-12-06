import styled from 'styled-components';

import Perfil from './Perfil';

const PublishArea = () => {
    return ( 
        <Container>
            <Perfil />
            <Wrapper>
                <Nome>Flavin do Pneu</Nome>
                <Input placeholder='Escreva algo para publicar'/>
                <div style={{display: 'flex', gap: 50, margin: '5px'}}>
                    <ImageIcon>Imagem</ImageIcon>
                    <Button>Publicar</Button>
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
const ImageIcon = styled.i`
    flex: 1;
`
const Button = styled.button`
    flex: 1;
    border-radius: 0;
    background: #009;
    color: white;
    font-weight: bold;
    border: none;
    outline: 0;
    max-height: 30px;
    max-width: 80px;
`
export default PublishArea;