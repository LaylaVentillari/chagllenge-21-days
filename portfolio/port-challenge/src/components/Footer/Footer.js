import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
    <LinkColumn>
    <LinkTitle>Discord</LinkTitle>
    <LinkItem href="tel:111-111-111">nite#4379</LinkItem>
    </LinkColumn>
    <LinkColumn>
    <LinkTitle>Email</LinkTitle>
    <LinkItem href="mailto:laylaventilari5@gmail.com">laylaventilari5@gmail.com</LinkItem>
    </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Layla Ventilari</Slogan>      
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com/LaylaVentillari">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/layla-ventilari-135574145/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/layla.ventilari/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>   
    </FooterWrapper>
  );
};

export default Footer;
