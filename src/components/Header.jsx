import React from 'react'
import { AiOutlineQuestionCircle } from "react-icons/ai";
import boldLogo from '../assets/BOLD.png'

const Header = () => {
  return (
    <header>
        <img className='header__logo' src={boldLogo} alt="Bold fintech" />
        <nav className='header__nav'>
            <ul>
                <li><a href="">Mi negocio</a></li>
                <li><a href="">Ayuda <AiOutlineQuestionCircle /></a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header