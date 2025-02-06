import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import DrawSvg from "@utils/DrawSvg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: inline-block;
  overflow: hidden;

`;
const Title = styled.h1`
  font-family: 'Moderustic', sans-serif;
  font-size: 24px;
  text-transform: capitalize;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: fit-content;

  @media (max-width: 40em) {
    font-size: 24pxf;
  }
`;
const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
        justify-content: center;
    }

    div {
        border-radius: 10px;  /* Sudut melengkung kecil */
        text-align: right;

        @media (max-width: 48em) {
            text-align: left;
        }
    }

    p {
        border-radius: 8px;  /* Sedikit melengkung */
    }
}

& > *:nth-of-type(2n) {
    justify-content: end;
    @media (max-width: 48em) {
        justify-content: center;
    }

    div {
        border-radius: 10px;  /* Sama seperti elemen lainnya */
        text-align: left;
    }

    p {
        border-radius: 8px;
    }
}

`;
const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 1px solid white;

  @media (max-width: 48em) {
    width: 70%;

  }
`;

const Box = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: white;
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
  margin: 0;
`;

const SubTitle = styled.span`
  font-family: 'Moderustic', sans-serif;
  display: block;
  font-size: 24px;
  color: ${(props) => props.theme.text};
  margin: 0;
  text-align: center;

  @media (max-width: 40em) {
    font-size: 20px;
    font-weight: 600;
  }
`;
const Text = styled.span`
  font-family: 'Moderustic', sans-serif;
  display: block;
  font-size: 15px;
  color: ${(props) => props.theme.text};
  margin: 0;
  text-align: justify;

  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 40em) {
    font-size: 15px;
  }
`;

const RoadMapItem = ({ title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title} </SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Journey = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            // markers:true,
          },
        }
      );
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Section id="roadmap">
      <Title>Journey</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem
            addToRef={addToRefs}
            title="2017 - Founded"
            subtext="Airdrop ASC, a crypto community founded in 2017, focuses on Telegram for education. The community continues to grow through various initiatives and active participation in the global blockchain ecosystem."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="2018 - YouTube Expansion"
            subtext="To reach a broader audience, Airdrop ASC expanded to YouTube in 2018, launching content that provided tutorials, crypto news, and insights, further strengthening its presence in the blockchain ecosystem."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="2019 - First Collaboration with IoTeX"
            subtext="Airdrop ASC partnered with IoTeX in 2019 for its first major collaboration. This partnership focused on promoting IoTeX's innovative blockchain solutions through educational campaigns and community events."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="2020 - Twitter Expansion"
            subtext="In 2020, Airdrop ASC expanded its social media presence to Twitter, engaging with a global audience to provide real-time updates, market insights, and collaborative opportunities in the crypto space."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="2022 - VIP Invitation"
            subtext="Airdrop ASC gained recognition in 2022, receiving a VIP invitation to speak as community representative at the Blockchain Ecosystem Conference by Favourse. The team shared their journey and expertise with industry leaders."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="2024 - VIP Invitation"
            subtext="In 2024, Airdrop ASC was honored with a VIP invitation to collaborate with the Indonesian Ministry of Labor with Sir Immanuel Ebenezer. This opportunity highlighted the community's influence and expertise in blockchain education and innovation."
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Journey;
