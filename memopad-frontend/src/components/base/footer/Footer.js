import React from 'react';
import {
    Container
} from 'semantic-ui-react';
import styled from 'styled-components';

const FooterBox = styled.div`
    background-color: #2b2a2a;
    color: white;
    // position:absolute;
    // left:0;
    // right:0;
    // bottom:0;
    height:60px;
    padding-top:20px;
`

const Footer = ({}) => {
    return (
        <FooterBox>
            <Container>
                contact : holnet1026@gmail.com
            </Container>
        </FooterBox>
    )
}

export default Footer;