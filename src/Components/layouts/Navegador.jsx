import React from 'react'
import {Navbar} from 'react-bootstrap'
import logo from './logo.svg';
import { Link } from 'react-router-dom'
import styled from 'styled-components'





const navBar = () => {
    return(
        <div>
        <Navbar expand="lg" variant="dark" bg="dark" >

            <Navbar.Brand >LOREM IPSUM
            <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            </Navbar.Brand>

            <Container>

              <Navigation>
                <Link to='/home' className='link'> Home </Link>
                <Link to='/news' className='link'> News </Link>
                <Link to='/details'className='link'> Details </Link>
                <Link to='/contacts'className='link'> Contacts </Link>
              </Navigation>

            </Container>


        </Navbar>
      </div>
    )
}


const Navigation = styled.a`

.link{
 padding: 2rem;
 cursor: pointe;
 text-align: center;  
 padding-left: 1rem;
}

`;

const Container = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
position:relative
`;

export default navBar