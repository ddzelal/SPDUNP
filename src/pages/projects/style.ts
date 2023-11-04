import styled from "styled-components";
import projectBackgroundImage from '../../assets/images/project1.jpeg';

export const BackgroundImageHome = styled.div`
  position: relative;
  background-color: #FEE8D0;
  background-image: url(${projectBackgroundImage});
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


export const Container = styled.div`
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: max-height 0.3s ease;

  &:hover {
    max-height: 100%;
  }
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const Content = styled.div`
  max-height: 1.5em;
  overflow: hidden;
`;

export const ExpandArrow = styled.div`
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  ${Container}:hover & {
    transform: rotate(90deg);
  }
`;