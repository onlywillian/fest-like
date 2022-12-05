import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/chat-logo.jpg';

import { Button } from './GlobalStyles';


const ContainerPage = ({ type }) => {
    const handleFormSubmit = e => {
        e.preventDefault();
    };

    return ( 
        <Container>
            <Header>
                <HeaderDiv>
                Fest Like é sua plataforma de curtição. Dividir opiniões é fundamental! Diz aí vc curte ou não?
                </HeaderDiv>
                <HeaderLogo src={Logo}/>
            </Header>
            <Form method="post" onSubmit={handleFormSubmit}>
                <Input type="text" placeholder='Email'/>
                <Input type="text" placeholder='Senha'/>
                <P>* Ao Clicar no botão abaixo você está concordando com todos os Termos de Usuário do nosso site</P>
                <Link to="/feed">
                  <Button type='submit'>{type === 'signup' ? 'Cadastrar-se' : 'Login'}</Button>
                </Link>
                <div>
                    {type === 'signup' ? <Link to={'/login'}>Não tem uma conta? Faça Login</Link> 
                        : 
                        <Link to={'/cadastrar'}>Já possui uma conta? Cadastrar-se</Link>}
                </div>
            </Form>
        </Container>
     );
}
 
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled(Center)`
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`
const Header = styled.div`
  display: flex;
  border: 1px solid #009;
  height: 20%;
  width: 50vw;
`
const HeaderDiv = styled(Center)`
  flex: 2;
  font-size: 1.6rem;
  padding: 20px;
  text-align: center;
  background: #009;
  color: white;
`
const HeaderLogo = styled.img`
  flex: 1;
  border-left: 1px solid #009;
  max-width: 200px;
  max-height: 200px;
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 50%;
  width: 30vw;
  padding: 10px;
`
const Input = styled.input`
  padding: 20px;
  outline: 0;

  &:focus {
    outline: 1px solid #009;
  }
`
const P = styled.p`
  color: #555;
  font-size: .7rem;
`

export default ContainerPage;