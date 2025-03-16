import React from 'react'
import styled from 'styled-components';

//const img1 = '/team/bighead.svg';
const img2 = '/team/bighead-1.svg';
const img3 = '/team/bighead-2.svg';
//const img4 = '/team/bighead-3.svg';
const img5 = '/team/bighead-4.svg';
const img6 = '/team/bighead-5.svg';
const img7 = '/team/bighead-6.svg';
const img8 = '/team/bighead-7.svg';
const img9 = '/team/bighead-8.svg';
const img10 = '/team/bighead-9.svg';
const img11 = '/team/bighead-10.svg';

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
overflow: hidden;
`
const Title = styled.h1`
  font-family: 'Moderustic', sans-serif;
  font-size: 24px;
  text-transform: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: fit-content;

  @media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};

}
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em){
width: 80%;
}
@media (max-width: 48em){
width: 90%;
justify-content: center;
}
`
const SingleContainer = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em){
width: 80%;
}
@media (max-width: 48em){
width: 90%;
justify-content: center;
}
`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: white;
margin: 2rem 1rem;
position: relative;
z-index:5;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;

&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}

@media (max-width: 30em){
width: 70vw;
}

`

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color:white;
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
transition: all 0.3s ease;

}
`

const ImageSingleContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color:white;
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
transition: all 0.3s ease;

}
`

const Name = styled.h2`
font-family: 'Moderustic', sans-serif;
font-size: 24px;
display: flex;
align-items: center;
justify-content: center;
text-transform: none;
color: white;
margin-top: 1rem;
text-decoration: none;
&:hover {
    text-decoration: underline;
    color: ${props => props.theme.text};
}
`

const Position = styled.h2`
font-family: 'Moderustic', sans-serif;
font-size: 15px;
display: flex;
align-items: center;
justify-content: center;
text-transform: none;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
font-weight:400;
`

const MemberComponent = ({img, name=" ",position=" ",link="#"}) => {
  return(
    <Item>
      <ImageContainer>
        <img width={500} height={400}  src={img} alt={name} />
      </ImageContainer>
      <Name as="a" href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </Name>
      <Position>{position}</Position>
    </Item>
  )
}

const FounderComponent = ({img, name=" ",position=" ",link="#"}) => {
  return(
    <Item>
      <ImageSingleContainer>
        <img width={500} height={400}  src={img} alt={name} />
      </ImageSingleContainer>
      <Name as="a" href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </Name>
      <Position>{position}</Position>
    </Item>
  )
}


const Team = () => {
  return (
    <Section id="team">
    
      <Title>Team</Title>
      <SingleContainer>
        <FounderComponent img={img11} name="Zamza Salim" position="Founder" link="https://x.com/zamzasalim"/>
      </SingleContainer>
      <Container>
        <MemberComponent img={img2} name="Agan" position="Leader" link="https://t.me/autosultank"/>
        <MemberComponent img={img3} name="Aldi" position="Airdrop Team" link="https://t.me/AlldiiRamadhan"/>
        <MemberComponent img={img7} name="Remover" position="Airdrop Team" link="https://t.me/remover96"/>
        <MemberComponent img={img8} name="Javier" position="OG ASC" link="https://t.me/xyjrvzx"/>
        <MemberComponent img={img9} name="Mail" position="OG ASC" link="https://t.me/haiimail"/>
        <MemberComponent img={img5} name="Chiga" position="Editor" link="https://t.me/joglostudio01"/>
        <MemberComponent img={img10} name="Yuli" position="Research Team" link="https://x.com/yulsrich"/>
        <MemberComponent img={img6} name="Hanip" position="Research Team" link="https://x.com/hnfdmxyz"/>
      </Container>
    </Section>
  )
}

export default Team