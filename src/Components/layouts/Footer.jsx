import React from 'react'
import styled from 'styled-components'


// con .+ algo mas creo los divs con clases
function Footer() {
    return (
    <FooterContainer className="main-footer">
        <div className="footer-middle">
            <div className="container">
                <div className="row">

                    {/*Columna 1*/}
                    <div className="col-md-3col-sm-6">
                        <h4>Footer</h4>
                        <ul className='list-unstyled' >
                            <li><a href='/'>Informacion</a></li>
                            <li><a href='/'>Pagina de condiciones</a></li>
                            <li><a href='/'>Indice</a></li>
                            <li><a href='/'>Informacion</a></li>
                            <li><a href='/'>Pagina de condiciones</a></li>
                            <li><a href='/'>Indice</a></li>
                        </ul>
                    </div>

                    {/*Columna 2*/}
                    <div className="col-md-3col-sm-6">
                        
                    </div>
                    
                </div>

                <div className="footer-bottom">
                            <p className='text-xs-center'>
                                &copy;{new Date().getFullYear()} todos los derechos reservados
                            </p>
                </div>

            </div>

        </div>
    </FooterContainer>
    )
}
export default Footer

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);

    
    
}

.footer-bottom {
    padding-top: 1rem;
    padding-bottom: 2rem;
    
}

ul li a{
    color:var(--mainGrey);
}

ul li a:hover{
    color:var(--mainLight);
}

`;