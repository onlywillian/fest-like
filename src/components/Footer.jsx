import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import Usuario from '../assets/usuario';
import House from '../assets/house';


const Footer = () => {
    return ( 
        <Container>
            <Link 
                to={'/feed'} 
                style={{
                    width: '10%', height: '80%', minHeight: 25, cursor: 'pointer',
                    margin: '5px 0', display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}
            >
                <House fill='blue'/>
            </Link>

            <Link 
                to={'/user/1'} 
                style={{
                    width: '10%', height: '80%', minHeight: 25, cursor: 'pointer',
                    margin: '5px 0', display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}
            >
                <Usuario fill='gray'/>
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
export default Footer;