import styled,{keyframes} from 'styled-components'

export const Wrapper = styled.section`
margin-top: 2rem;
background-color: paleturquoise;
width: 80px

`;

export const MainWrapper = styled.section`    
width: 100%;
max-width: 100%;

`
export const PaginationWrapper = styled.div`
display: flex;
width: 100%;
justify-context: ${({page})=> {
  if(page==='first') return 'flex-end';
  else if(page==='middle') return 'space-between';
  else return 'flex-start';// puedo poner codigo js
}};

`

export const paginaCentrada = styled.section`
display: flex;
justify-content:center; // centers in the flex direction and the default flex-direction is row
align-items:center; // centers perpendicular to the flex direction
height: 100vh; // 100% view height
width: 100vw; // 100% view width
position: absolute; // so it goes behind the current content
`

export const fadeIn = keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1;
}

`