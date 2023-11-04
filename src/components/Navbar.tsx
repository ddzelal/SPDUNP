import styled from 'styled-components';
import skonpLogo from '../assets/images/skonpLogo.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import instagramIcon from '../assets/icons/instagram.svg'
// import facebookIcon from '../assets/icons/facebook.svg'
// import gmailIcon from '../assets/icons/gmail.svg'

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  padding: 10px 80px;
  z-index: 100;
  transition: background 0.3s;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const NavbarMobileWrapper = styled.nav`
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 100;
  transition: background 0.3s;
  top: 65px;
  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`;

const LeftContainer = styled.div`
  width: 20%;
`;

const RightContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: flex-end;
  }

 
`;




const RightContainerFirst = styled.div`
width: 100%;
height: 50%;
border-bottom: 1px solid red;
display: flex;
align-items: center;
gap: 20px;
@media (max-width: 768px) {
    display: none;
  }
`;
const RightContainerSeccound = styled.div`
height: 50%;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
gap: 20px;
@media (max-width: 768px) {
    display: none;
  }
`;

const SkonpLogo = styled.img`
width: 95px;
height: 95px;
@media (max-width: 768px) {
  width: 40px;
  height: 40px;
  }
`;

const LinkText = styled(Link)`
  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none; // Uklonite podvučeno za stilizaciju linka
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #FFF;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease; // Glatki efekat tranzicije
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;


const ImitationIcon = styled.div`
width: 19px;
height: 19px;
background-color: #fff;
border-radius: 50%;
`;


const NavbarInfoText = styled.span`
color: #FFF;
font-family: Miriam Libre;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;`;

const NavbarProjectText = styled.span`
color: var(--Main-Red-Color, #D42029);
font-family: Miriam Libre;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
flex: 1;
text-align: end;
`;
const MobileMenuIcon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: none;
  color:white;
  @media (max-width: 768px) {
    display: block;
  }
`;

const DivForMobileLinke = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
text-align: end;
`;

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Dodajte stanje za mobilni meni

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen); // Funkcija za otvaranje/zatvaranje mobilnog menija
  };
  return (
    <React.Fragment>
    <NavbarWrapper>
        <LeftContainer>
            <SkonpLogo src={skonpLogo}/>
        </LeftContainer>
        <RightContainer>
            <RightContainerFirst>
                <ImitationIcon/>
                <ImitationIcon/>
                <ImitationIcon/>
                <NavbarInfoText>IMAŠ PITANJE? POZOVI: 020 331-338</NavbarInfoText>
                <NavbarProjectText>PROJEKTI</NavbarProjectText>
            </RightContainerFirst>
            <RightContainerSeccound>
                <LinkText to='/'>POČETNA</LinkText>
                <LinkText to='/projects'>PROJEKTI</LinkText>
                <LinkText to='/alumni'>ALUMNI</LinkText>
                <LinkText to='/about'>KONTAKT</LinkText>
            </RightContainerSeccound>
            <MobileMenuIcon onClick={toggleMobileMenu}>☰</MobileMenuIcon>
        </RightContainer>
    </NavbarWrapper>
    <NavbarMobileWrapper>
    {isMobileMenuOpen && ( 
        <DivForMobileLinke>
           <LinkText to='/'>POČETNA</LinkText>
                <LinkText to='/projects'>PROJEKTI</LinkText>
                <LinkText to='/alumni'>ALUMNI</LinkText>
                <LinkText to='/about'>KONTAKT</LinkText>
        </DivForMobileLinke>
      )}
    </NavbarMobileWrapper>
    </React.Fragment>
  );
};

export default Navbar;