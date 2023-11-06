import styled from "styled-components";
import aboutBackgroundImage from '../../assets/images/aboutBackgroundImage.jpeg';



export const BackgroundImageHome = styled.div`
  position: relative;
  background-color: #FEE8D0;
  background-image: url(${aboutBackgroundImage});
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


export const MembersTextContainer = styled.div`
width: 100%;
background-color: #FEE8D0;
padding: 20px;
display: flex;
flex-direction: column;
gap: 50px;

`;

export const HeaderTitleText = styled.div`
text-align: center;
color: #000;
font-family: Miriam Libre;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media (max-width: 500px) {
font-size: 32px;
  }

`;


export const SubTitleText = styled.div`color: #000;
text-align: justify;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 180.182%; /* 36.036px */`

export const SubTitleTextClip = styled.div`color: #000;
text-align: justify;
font-size: 20px;
font-style: normal;
font-weight: 400;
clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%);
line-height: 180.182%; /* 36.036px */
background-color: rgb(8, 95, 110);
padding: 10px 10px 50px 10px !important;
@media (max-width: 1000px) {
padding: 10px 10px 150px 10px !important;

  }
;
`



export const CardContainer = styled.div`
  background-color: #FEE8D0;
  padding: 25px 25px;
`;

export const Card = styled.div`
flex: 1;
margin: 5px;
border-radius: 10px;
border: 5px solid #D2212A;
display: flex;
flex-direction: column;
background-color: #085F6E;
`;

export const CardHeader = styled.div`
width: 100%;
display: flex;
 @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const CardBody = styled.div`
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 180%; /* 36px */
padding: 10px;
text-align: center;
`;

export const CardLeftContainerHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
`;
export const CardRightContainerHeader = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const CardPrfileCircle = styled.div`
width: 70px;
height: 70px;
border-radius: 50%;
background-color: red;
`;

export const NameText = styled.div`
color: #FFF;
text-align: center;
font-family: Open Sans;
font-size: 24px;
font-style: normal;
width: 100%;
font-weight: 700;
line-height: normal;
text-align: center;
`;

export const SubNameText = styled.div`color: #FFF;
text-align: center;
font-family: Open Sans;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: normal;`

export const AboutUsContainer = styled.div`
background: linear-gradient(270deg, rgba(9, 92, 107, 0.53) 0.01%, rgba(9, 92, 107, 0.00) 82.82%);
padding: 20px 50px;
display: flex;
flex-direction: column;
gap: 50px;
`;

export const CircleContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
`;

export const ImageCircle = styled.img`
  max-width: 100%; 
  height: auto; 
  `