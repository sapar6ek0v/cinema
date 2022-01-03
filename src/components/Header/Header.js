import React from 'react';
import {Container} from "react-bootstrap";
import HeaderDropDown from "./HeaderDropDown";
import HeaderBtn from "./HeaderBtn";
const Header = () => {


    window.onscroll = function onScroll () {

        const header = document.querySelector('.header')

        if ( window.pageYOffset > 100 ) {
            header.classList.add('header-fix')
        } else  {
            header.classList.remove('header-fix')
        }
    }


    return (
        <header className='header'>
            <Container>
                <div className='d-flex'>
                    <div className='about-box d-flex align-items-center'>
                        <HeaderBtn title={'home'} item={''} />
                        <HeaderDropDown />
                        <HeaderBtn title={'serials'} item={''}/>
                        <HeaderBtn title={'community'} item={''}/>
                        <HeaderBtn title={'news'} item={'/'}/>
                    </div>
                    <div className='register-box d-flex align-items-center'>
                        <HeaderBtn title={'help'} item={''} />
                        <HeaderBtn title={'login'} item={''} />

                        <button  className='register-button' >
                            sign up
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;