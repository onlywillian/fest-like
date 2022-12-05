import { useState } from "react";
import { auth } from "./service/firebaseConfig";
import { useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import styled from 'styled-components';
import Logo from './assets/chat-logo.jpg';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  function SignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  //CARREGANDO
  if (loading) {
    return <p>carregando...</p>;
  }

  //USUARIO LOGADO
  if (user) {
    alert('Usuario logado')
    return console.log(user);
  }

  //ERRO AO LOGAR
  if(error){
    if(error.code == 'auth/user-not-found'){
      console.log("Usuario nao encontrado")
    }
    if(error.code == 'auth/wrong-password'){
      console.log('Senha invalida')
    }
  }

  return (
    <Container>
      <Header>
        <HeaderDiv>
          Fest Like é sua plataforma de curtição. Dividir opiniões é fundamental! Diz aí vc curte ou não?
        </HeaderDiv>
        <HeaderLogo src={Logo}/>
      </Header>
      <Form method="post">
        <Input type="text" placeholder='Email'  onChange={(e) => setEmail(e.target.value)}/>
        <Input type="text" placeholder='Senha'  onChange={(e) => setPassword(e.target.value)}/>
        <Button type='submit' onClick={SignIn}>Enviar</Button>
      </Form>
    </Container>
  )
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
  font-size: 2rem;
  text-align: center;
`
const HeaderLogo = styled.img`
  flex: 1;
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
const Button = styled.button`
  padding: 20px;
  background: #009;
  color: white;
`

export default App
