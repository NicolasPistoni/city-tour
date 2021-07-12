import React from 'react'
import styled, {css} from 'styled-components'
import {fadeIn} from './Styled/index' //reutilizar estilos

const OutterWraper = styled.div`
width:25%;
background-color: blueviolet;
margin-top: 2rem
`



const Button = ({children, primary, margin}) => {
    return(
          <Boton primary={primary} margin={margin}>{children}</Boton> 
    )
}

const Boton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: ${({margin})=> margin || '2rem'};
  padding: 1em;
  display: flex;
  margin-bottom: 1rem;
  animation: 2s ${fadeIn} ease-in;

${({primary}) => primary && css `background: palevioletred; color: white;`}
${OutterWraper}:hover & {
  color:red
}
`
//puedo usar ternarios en las propiedades del styled
/*const SuperButton = styled(Boton)` 
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: blue;
margin: 0 1em;
padding: 0.25em 1em;
display: flex;
margin-bottom: 1rem;

`*///si tengo otro componente de otra libreria, le dijo entre parentesis que estilo tiene

export default Button

