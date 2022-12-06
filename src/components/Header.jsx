import React from 'react';

import styled from 'styled-components';

import SLogo from '../assets/logo';

const Header = () => {
    return ( 
        <Head>
            <Perfil />
            <SLogo style={{flex: 1}}/>
        </Head>
     );
}

const Head = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background: var(--main-gray-color);
    border-bottom: 1px solid #aaa;
    width: 100vw;
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