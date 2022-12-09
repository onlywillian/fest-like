import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../service/FirebaseConfig";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/chat-logo.jpg';

import { Button } from './GlobalStyles';


const ContainerPage = ({ type }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);

    const handleFormSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    if (loading) {

      return <p>carregando...</p>;
    }

//QUANDO O USUARIO E CARREGADO COM SUCESSO, REDIRECIONE PARA O FEED E MANDE PARA O SERVER AS VARIAVEIS A SEGUIR
    if (user) {
      const uid = user.user.uid
      const photoURL = user.user.photoURL
      const email = user.user.email

      return console.log(user.user)
    }
    if(error){
      console.log(error.code)
    }

    return ( 
        <Container>
            <Header>
                <HeaderDiv>
                Fest Like é sua plataforma de curtição. Dividir opiniões é fundamental! Diz aí vc curte ou não?
                </HeaderDiv>
                <HeaderLogo src={Logo}/>
            </Header>
            <Form method="post" onSubmit={handleFormSubmit}>
                <Input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <Input type="text" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
                <P>* Ao Clicar no botão abaixo você está concordando com todos os Termos de Usuário do nosso site</P>
                
                  <Button type='submit'>{type === 'signup' ? 'Cadastrar-se' : 'Login'}</Button>
                
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