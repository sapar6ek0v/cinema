import React, {useContext} from 'react';
import {Container, DropdownButton} from "react-bootstrap";
import './header-dropdown.css'
import HeaderDropDown from "./HeaderDropDown";
import HeaderBtn from "./HeaderBtn";
import {Link} from "react-router-dom";
import {LanguageContext} from "../../context/LanguageContext";
const Header = () => {
    const {language, setLanguage} = useContext(LanguageContext)

    window.onscroll = function onScroll () {

        const header = document.querySelector('.header')

        if ( window.pageYOffset > 100 ) {
            header.classList.add('header-fix')
        } else  {
            header.classList.remove('header-fix')
        }
    }

    const changeLang = () => {
        setLanguage(language === 'ru' ? 'en' : 'ru')
    }

    return (
        <header className='header'>
            <Container>
                <div className='d-flex md-header'>
                    <div className='about-box d-flex align-items-center'>
                        <HeaderBtn title={'home'} item={''} />
                        <HeaderDropDown />
                        <DropdownButton id="dropdown-basic-button" title="Serials">
                            <Link to='tv-serials/popular?page=1' className='dropdown-link'>
                                Popular
                            </Link>
                            <Link to='tv-serials/on-the-air?page=1' className='dropdown-link'>
                                On the air
                            </Link>
                            <Link to='tv-serials/top-rated?page=1' className='dropdown-link'>
                                top rated
                            </Link>
                        </DropdownButton>
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
                    <button onClick={changeLang}>{language}</button>
                </div>
            </Container>
        </header>
    );
};

export default Header;