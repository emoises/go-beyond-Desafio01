import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope as email } from '@fortawesome/free-solid-svg-icons'
import { faHeadset as contact } from '@fortawesome/free-solid-svg-icons'
import github from '../../assets/github-brands.svg'
import linkedin from '../../assets/linkedin-brands.svg'
import corebiz from '../../assets/corebiz.svg'
import vtex from '../../assets/vtex.svg'
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
      <Container>
        <div className="adress">
            <span>Localização</span>
            <div className="decoration"></div>
            Avenida Andrômeda, 2000. Bloco 6 e 8. <br />
            <br />
            Alphavile SP <br />
            <br />
            brasil@corebiz.ag <br />
            <br />
            +55 11 3090 1039
        </div>
        <div className="contact">
            <a href="/">
                <FontAwesomeIcon icon={email} size='2x'/>
                <span>
                Entre em contato
                </span>
            </a>
            <a href="/">
                <FontAwesomeIcon icon={contact} size='2x'/>
                <span>
                fale com o nosso consultor online
                </span>
            </a>
        </div>
        <div className="logos">
            <div className="sponsors">
                <div className="corebiz">
                    Created by
                    <img src={corebiz} alt="" />
                </div>
                <div className="vtex">
                    Powered by
                    <img src={vtex} alt="" />
                </div>
            </div>
            <div className="developer">
                Developed by <br />
                <span>Eduardo Moisés da Silva</span>
                <div className="social-midia">
                    <a href="https://github.com/emoises" target='_blank'>
                        <img src={github} alt="github"  />
                    </a>
                    <a href="https://www.linkedin.com/in/eduardomoises/" target='_blank'>
                        <img src={linkedin} alt="linkedin"  />
                    </a>
                </div>
            </div>
        </div>
      </Container>
  );
}

export default Footer;