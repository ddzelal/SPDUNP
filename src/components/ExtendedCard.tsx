import  { useEffect, useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/images/skonp4.jpeg'
import images from '../assets/images/skonp2.jpeg'
import Slider from 'react-slick';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-align: center;
  transition: max-height 0.3s ease;
  text-overflow: ellipsis;
  background-color: #494ca9;
  background-image: url(${backgroundImage});
  background-size: cover;
  &:hover {
    max-height: 100%;
  }
`;

const Title = styled.div`
 color: #FFF;
font-family: Miriam Libre;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

const Content = styled.div`
overflow: hidden;
color: #FFF;
font-family: Open Sans;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 180%;
background-color: rgba(0, 0, 0, 0.7); 
border-radius: 5px;
padding: 10px;
`;

const ExpandArrow = styled.span`
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform-origin: center; 
  color: #FFF;

  &:hover {
    opacity: 0.7;
  }
`;

const WrapperImage = styled.div`
padding:20px
`;

const Image = styled.img``;
interface Props {
  title: string;
  shortContent: string;
  fullContent: string;
}
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

const ExtendedCard = ({ title, shortContent, fullContent }: Props) => {
  

  

  const [expanded, setExpanded] = useState(false);

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

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Content onClick={()=>{setExpanded(true)}}>{expanded ? fullContent : shortContent}</Content>
      <ExpandArrow onClick={toggleExpand}>{expanded ? '▲' : '▼'}</ExpandArrow>
    <WrapperImage>
      <Slider  {...(isMobile ? sliderSettingsMobile : sliderSettingsDesktop)}>
       {cards.map(()=>{
        return <Image src={images}/>
       })}
        </Slider>
        </WrapperImage>
    </Container>
  );
};

export default ExtendedCard;
