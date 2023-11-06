import styled from "styled-components";
import alumniBackgroundImage from '../../assets/images/alumniBackgroundImage.jpeg';


export const BackgroundImageHome = styled.div`
  position: relative;
  background-color: #FEE8D0;
  background-image: url(${alumniBackgroundImage});
  background-size: cover;
  height: 60vh;
  padding: 20px;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); 
  }
`;

export const HeaderTitle = styled.span`
color: var(--Main-Red-Color, #D42029);
font-family: Miriam Libre;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
color: #E4007E, #35AAE2;
background: linear-gradient( 
            to left, #f32170, #ff6b08, 
             #cf23cf, #eedd44); 
        -webkit-text-fill-color: transparent; 
        -webkit-background-clip: text;
        position: relative;
`;


export const WhatIsAlumniContainer = styled.div`
background: linear-gradient(270deg, rgba(9, 92, 107, 0.53) 0.01%, rgba(9, 92, 107, 0.00) 82.82%);
padding: 20px 50px;
display: flex;
flex-direction: column;
gap: 50px;
filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.40));
`;


export const HeaderTitleText = styled.div`
text-align: center;
color: #000;
font-family: Miriam Libre;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;


export const ContainerForText = styled.div`
border: 5px solid #D42029;
background-color: #015767;
padding: 10px;
`;

export const SubTitleText = styled.div`color: #000;
text-align: justify;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 180.182%; /* 36.036px */`


export const FormStyle = styled.input`
width: 100%;
background-color: transparent;
padding: 10px;
&::placeholder {
  color: #fff;
}
`;

export const ConfirmButton = styled.button`
width: 100%;
background-color: transparent;
color: #fff;
`;