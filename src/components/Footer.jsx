import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Footer = () => {
    return ( 
        <Container>
            <Link to={'/feed'} style={{width: '10%', height: '80%', background: 'gray', minHeight: 25, margin: '5px 0'}}>
                <Images />
            </Link>
            <Link to={'/user/1'} style={{width: '10%', height: '80%', background: 'gray', minHeight: 25, margin: '5px 0'}}>
                <Images />
            </Link>
            
        </Container>
     );
}
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1;
    border-top: 1px solid #aaa;
`
const Images = styled.div`
    width: 10%;
    height: 80%;
    background: gray;
`
 
export default Footer;