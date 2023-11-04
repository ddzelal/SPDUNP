
import styled from "styled-components";
import homeBackgorundImage from '../../assets/images/FirstPage3.png';
import precFotImg from '../../assets/images/kidsImg.jpeg'

export const BackgroundImageHome = styled.div`
  background-color: #FEE8D0;
  background-image: url(${homeBackgorundImage});
  background-size: 100% 100%;
  background-repeat: no-repeat; 
  background-position: center center;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 780px) {
    height: 50vh;
    background-size: cover;
  }
`;

export const SideBarHome = styled.div`
width: 40%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 70px;

`

export const SideBarLink = styled.span`
    color: #FFF;
    font-family: Open Sans;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;`


export const RightContainerHome = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`


export const RightContainerText = styled.span`
color: #000;
font-family: Open Sans;
font-size: 57px;
font-style: normal;
font-weight: 900;
line-height: normal;`

export const RightContainerSubText = styled.span`
color: #000;
font-family: Open Sans;
font-size: 17px;
font-style: normal;
font-weight: 60;
line-height: normal;`

export const SectionMoreAboutUs = styled.div`
width: 100%;
background-color: #fff;
`

export const HeaderMoreAboutUsText = styled.span`
color: #000;
text-align: center;
font-family: Miriam Libre;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding: 30px 0;

`

export const HeaderMoreAboutUs = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #FEE8D0;

`

export const ContentMoreAboutUs = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: stretch;
background-color: #FEE8D0;
@media (max-width: 1400px) {
    flex-direction: column;
  }
`

export const ChaildCardMoreAboutUs = styled.div`
flex: 1;
height: 100%;
margin: 2px;
`

export const CardForMoreAboutUs = styled.div`
width: 550px;
height: 260px;
background: linear-gradient(330deg, #D42029 -5.39%, #076471 105.42%);
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 700px) {
    width: 100%;
  }
`


export const ImageLogoFax = styled.img`
  position: absolute; 
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.2;
  @media (max-width: 1400px) {
    bottom: -100px;
    left: 0px;
  }
`;

export const TextCard = styled.span`
color: #000;
font-family: Miriam Libre;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
position: relative;
z-index: 3;
`

export const ButtonSignUp = styled.button`
display: flex;
width: 170px;
padding: 10px 35px;
justify-content: center;
align-items: center;
border-radius: 10px;
border: 2px solid #000;
gap: 10px;
margin-bottom: 20px;
position: relative;
z-index: 3;
background-color: transparent;
&:hover{
    cursor: pointer;
}
`

export const CardInsideText = styled.span`
color: #FFF;
font-family: Miriam Libre;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
`

export const Line = styled.div`
width: 100%;
height: 5px;
background: linear-gradient(90deg, #D42029 2.29%, #075C6A 24.13%, #095C6B 80.61%, #D42029 100%);
`;

export const ImagesContainer =  styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
`;

export const ImagesRow = styled.div`
display: flex;
  width: 100%; 
  justify-content: space-between;
`

export const ImagesInRow = styled.img`
width: calc(33.33% - 10px); 
  height: auto;
  opacity: 0.7;
`;

export const ImageSkonpLine = styled.img`
position: absolute;
width: 100%;
z-index: 3;
`

export const CardSkonp = styled.div`
width: 550px;
background-color: blue;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
z-index: 5;
border-radius: 23px;
background: rgba(0, 96, 113, 0.90);
box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.30);
padding: 40px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 50px;
@media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
export const CardSkonpMobile = styled.div`
width: 100%;
background-color: blue;
border-radius: 23px;
background: rgba(0, 96, 113, 0.90);
box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.30);
padding: 40px;
box-sizing: border-box;
display: none;
@media (max-width: 550px) {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 50px;
  }
`;



export const CardSkonpText = styled.span`
color: #FFF;
text-align: center;
font-family: Open Sans;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 180%;
text-align: justify;
`;

export const CardSkonpTextHeader = styled.span`
color: #FFF;
text-align: center;
font-family: Miriam Libre;
font-size: 48px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: uppercase;
`

export const CardSkonpWrapper = styled.div`
width: 100%;
justify-content: center;
align-items: center;
padding: 20px;
box-sizing: border-box;
display: none;
background-color: lightblue;
@media (max-width: 550px) {
  display: flex;
  }

`;


export const PrevFooter = styled.div`
width: 100%;
padding: 20px;
background-color:#FEE8D0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const PrevFooterText =styled.span`
color: #000;
text-align: center;
font-family: Miriam Libre;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;



export const BackgroundImageHomePrevFot = styled.div`
  background-image: url(${precFotImg});
  background-size: 100% 100%;
  background-repeat: no-repeat; 
  background-position: center center;
  width: 100%;
  height: 100vh;
  display: flex;
  display: flex;
justify-content: center;
align-items: center;
`;

export const KidsCardContainer = styled.div`
width: 80%;
padding: 20px;
border-radius: 10px;
background: rgba(0, 0, 0, 0.50);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;

`;
export const KidsText = styled.span`
color: #FFF;
font-family: Open Sans;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 180.2%; 
`;

export const KidsButton = styled.button`
border-radius: 10px;
border: 1px solid #FFF9F9;
background: rgba(7, 7, 7, 0.00);
color: #FFF;
padding: 10px;
`

