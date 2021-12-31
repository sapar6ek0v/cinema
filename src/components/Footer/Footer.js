import React from 'react';
import logo from '../../image/logo-movie.svg'
import {Container} from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
               <div className='footer'>
                   All site materials are available thanks to
                   <a href="https://www.themoviedb.org/tv/132375-um-lugar-ao-sol">
                       <img className='footer-img' src={logo} alt="logo"/>
                   </a>
               </div>
            </Container>
        </footer>
    );
};

export default Footer;