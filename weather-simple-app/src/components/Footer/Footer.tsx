import React from 'react';
import { FooterContainer } from './styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        Developed by<br/><a href="https://www.instagram.com/oleg.nyzhnyk/" target="_blank">Oleg Nyzhnyk</a> & <a href="https://www.instagram.com/sasha_hrynevych/" target="_blank">Sasha Hrynevych</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
