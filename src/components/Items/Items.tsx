import React from 'react';

import shoes from '../../images/shoes.png'
import Rate from '../Rate/Rate';
import whatsapp from '../../assets/whatsapp.png'
import './styles.css'


interface ItemsProps {
  increment: number;
}
const Items: React.FC<ItemsProps> = ({increment}) => {
  return (
      <div className="product-container" style={{position: 'relative', left: `-${increment*240}px`}}>
            <div id="poligon">OFF</div>
        <img src={shoes} alt="" />
        <div className="description">
            <span>Sapato Floater Preto</span>
            <div className="ranking">
                <Rate/>
            </div>
            <p>de R$ 299,90</p>
            <strong>Por R$ 259,90</strong>
            <p>ou em 9x de R$ 28,87</p>

        </div>
        <a href="/">
          <img src={whatsapp} alt="" />
          comprar
          </a>
      </div>
  )
}

export default Items;