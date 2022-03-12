import React from 'react';
import styled from 'styled-components';
import Shorten from './Shorten';
import brandrecon from '../images/icon-brand-recognition.svg';
import detailedrecords from '../images/icon-detailed-records.svg';
import fullycustomizable from '../images/icon-fully-customizable.svg';

const Background = styled.div`
  display: block;
  width: 100%;
  background: #eee;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Section = styled.div`
  display: block;
  padding-top: 3rem;
  h1 {
    text-align: center;
    padding-bottom: 1rem;
    color: hsl(260, 8%, 14%);
  }
  .lead {
    color: hsl(257, 7%, 63%);
    text-align: center;
    max-width: 530px;
    margin: 0 auto;
  }
`;
const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 6rem;
  padding-bottom: 12rem;
`;
const Box = styled.div`
  display: inline-block;
  width: 33%;
  padding: 0 2rem;
  padding-bottom: 2rem;
  background-color: white;
  text-align: start;
  img {
    transform: translateY(-50%) scale(110%);
    padding: 1rem;
    border-radius: 50%;
    background-color: hsl(260, 8%, 14%);
  }
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  p {
    color: hsl(257, 7%, 63%);
    text-align: start;
    max-width: 530px;
    margin: 0 auto;
  }
  &:first-child {
    transform: translateY(-25%);
  }
  &:last-child {
    transform: translateY(25%);
  }
`;

const Statistics = () => {
  return (
    <Background>
      <Container>
        <Shorten></Shorten>
        <Section>
          <h1>Advanced Statistics</h1>
          <p className='lead'>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
          <Boxes>
            <Box>
              <img src={brandrecon} alt='' />
              <h4>Brand Recognition</h4>
              <p>
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </Box>
            <Box>
              <img src={detailedrecords} alt='' />
              <h4>Detailed Records</h4>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </Box>
            <Box>
              <img src={fullycustomizable} alt='' />
              <h4>Fully Customizable</h4>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </Box>
          </Boxes>
        </Section>
      </Container>
    </Background>
  );
};

export default Statistics;
