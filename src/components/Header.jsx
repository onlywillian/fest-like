import React from 'react';

import styled from 'styled-components';

import SiteLogo from '../assets/chat-logo.jpg';

const Header = () => {
    return ( 
        <Head>
            <Perfil />
            <Logo>
                <img src={SiteLogo} alt="Site Logo" width={50}/>
            </Logo>
        </Head>
     );
}

const Head = styled.div`
    display: flex;
    flex: 1;
    background: #eee;
    border-bottom: 1px solid #aaa;
    width: 100vw;
`
const Logo = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Perfil = styled.div`
    position: absolute;
    align-self: center;
    height: 40px;
    max-height: 40px;
    width: 40px;
    max-width: 40px;
    border-radius: 50%;
    background: #aaa;
    left: 2vw;
`
 
export default Header;