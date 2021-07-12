import React from 'react'
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'


const Home = () => {

    return (

        <Container>
            <GlobalStyle />
            <InnerContainer>
                <LogoContainer />
                <JoinInfo><p>test</p></JoinInfo>
            </InnerContainer>
        </Container>
    )


}

const GlobalStyle = createGlobalStyle`
  body {
    background: black;
  }`


const OutterContainer = styled.div`
display: flex;
height: 100%;
width: 100%;
`;

const Container = styled.div`
height: 100%;
width: 100%;
`;

const InnerContainer = styled.div`

height: 100%;
width: 100%;
`;

const LogoContainer = styled.div`
display: flex;
justify-content:center; // centers in the flex direction and the default flex-direction is row
align-items:center; // centers perpendicular to the flex direction
height: 100vh; // 100% view height
width: 100vw; // 100% view width
position: absolute; // so it goes behind the current content
`;


const JoinInfo = styled.section`
align-items: center;
justify-content: center;
color: white;
`
export default Home;