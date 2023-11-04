import  { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/images/skonp2.jpeg'

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
border-radius: 10px;
padding: 10px;
`;

const ExpandArrow = styled.span`
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform-origin: center; 
  color: #FFF;
  ${Container}:hover & {
    transform: scaleY(-1); 
  }
`;


interface Props {
  title: string;
  shortContent: string;
  fullContent: string;
}

const ExtendedCard = ({ title, shortContent, fullContent }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Content>{expanded ? fullContent : shortContent}</Content>
      <ExpandArrow onClick={toggleExpand}>▶</ExpandArrow>
    </Container>
  );
};

export default ExtendedCard;
