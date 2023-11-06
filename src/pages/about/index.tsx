import { Line } from "../home/style"
import { AboutUsContainer, BackgroundImageHome, Card, CardBody, CardContainer, CardHeader, CardLeftContainerHeader, CardPrfileCircle, CardRightContainerHeader, CircleContainer, HeaderTitle, HeaderTitleText, ImageCircle, MembersTextContainer, NameText, SubNameText, SubTitleText, SubTitleTextClip } from "./style"
import circleActions from '../../assets/images/krugovi.png'
import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'


const sliderSettingsDesktop = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, 
  slidesToScroll: 1,
};

const sliderSettingsMobile = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, 
  slidesToScroll: 1,
};

function AboutPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const cards = [null,null,null,null,null,null,null,null,null];


  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;
  return (
    <div>
      <BackgroundImageHome>
      <HeaderTitle>KO SMO I ZA ŠTA SE ZALAŽEMO?</HeaderTitle>
      </BackgroundImageHome>
      <Line/>
      <MembersTextContainer>
        <HeaderTitleText>ČLANOVI PARLAMENTA</HeaderTitleText>
        <SubTitleText>Svaki od nas u Studentskom parlamentu igra ulogu pokretača pozitivnih promena. Naša upornost prožima svaki korak koji preduzimamo kako bismo osigurali da svako iskustvo na fakultetu bude obogaćeno.</SubTitleText>
      </MembersTextContainer>
      <Line/>
      <CardContainer>
      <Slider {...(isMobile ? sliderSettingsMobile : sliderSettingsDesktop)}>
        {cards.map(()=>{
          return(
            <>
            <Card>
            <CardHeader>
              <CardLeftContainerHeader>
                <CardPrfileCircle></CardPrfileCircle>
              </CardLeftContainerHeader>
              <CardRightContainerHeader>
                <NameText>Nikola Glisovic</NameText>
                <SubNameText>Generalni tandaric bandaric</SubNameText>
              </CardRightContainerHeader>
            </CardHeader>
            <CardBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita laboriosam laudantium atque fugit doloribus minus harum a beatae, earum tempore labore cupiditate sit quaerat dolorum perspiciatis vitae exercitationem iste!</CardBody>
          </Card>
          </>
          )
        })}
      </Slider>
      </CardContainer>
      <Line/>
      <AboutUsContainer>
        <HeaderTitleText style={{textAlign:'start'}}>17 GODINA POSTOJANJA</HeaderTitleText>
        <SubTitleText style={{textAlign:'justify'}}>Sa ponosom možemo istaći da već 17 godina Studentski parlament uspešno deluje kao stabilna i neprekidna podrška studentskoj zajednici. Ovaj dugogodišnji kontinuitet je svedočanstvo o našoj sposobnosti da se prilagodimo promenama i da istrajemo u ostvarivanju ciljeva koje smo postavili. Tokom ovog vremena, uspeli smo da izgradimo bogatu tradiciju služenja interesima studenata, ostvarivanja pozitivnih promena i stvaranja nezaboravnih iskustava za sve generacije studenata koje su prošle kroz našu zajednicu.</SubTitleText>
      </AboutUsContainer>
      <Line/>
      <AboutUsContainer>
        <HeaderTitleText style={{textAlign:'center'}}>HUMANITARNE AKCIJE</HeaderTitleText>
        <SubTitleTextClip style={{textAlign:'justify',border:'5px solid #085F6E',padding:'10px'}}>Studentski parlament sa ponosom se angažuje u raznovrsnim humanitarnim akcijama već godinama, pokazujući svoju duboku posvećenost društvenoj odgovornosti. Naša strast prema pomoći drugima odražava se kroz sledeće inicijative:</SubTitleTextClip>
      <CircleContainer>
        <ImageCircle src={circleActions}/>
      </CircleContainer>
      </AboutUsContainer>
      <Line/>
      </div>
  )
}

export default AboutPage