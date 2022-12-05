import React from 'react';

import styled from 'styled-components';

const Footer = () => {
    return ( 
        <Container>
            <Images />
            <Images />
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