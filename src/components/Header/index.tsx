import React from 'react';

import gobeyond from "../../assets/gobeyond_logo_white.png"
import search from "../../assets/search.svg"
import user from "../../assets/user.svg"
import cart from "../../assets/cart.svg"

import { Container } from './styles';

const Header: React.FC = () => {
  return (
      <Container>
          <div className="header-container">
            <img src={gobeyond} alt="" />
            <div className="menu">
                <ul>
                    <li><a href="http://">Home</a></li>
                    <li><a href="http://">Categoria 1</a></li>
                    <li><a href="http://">Categoria 2</a></li>
                    <li><a href="http://">Contato</a></li>
                </ul>
    
            </div>
            <div className="search-container">
                <input type="text" name="content-search" id="content-search" placeholder="O que está procurando?"/>
                <img className="vector-icons" src={search} alt=""/>
            </div>
            <div className="user-container">
                <a href="http://" >
                    <img src={user} alt=""/>
                    <span>Minha conta</span>
                </a>
                <a href="http://">
                    <img src={cart} alt=""/>
                </a>
            </div>
        </div>
      </Container>
  )
}

export default Header;