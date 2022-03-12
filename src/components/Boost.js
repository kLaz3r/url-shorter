import React from 'react';
import styled from 'styled-components';
import boost from '../images/bg-boost-desktop.svg';

const Container = styled.div`
  display: block;
  padding: 3rem 0;
  background-image: url(${boost});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: hsl(257, 27%, 26%);
  h1 {
    text-align: center;
    margin-bottom: 1rem;
    color: white;
  }
  button {
    display: block;
    color: white;
    background-color: hsl(180, 66%, 49%);
    padding: 1rem 2rem;
    border-radius: 30px;
    border: none;
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const Boost = () => {
  return (
    <Container>
      <h1>Boost your links today</h1>
      <button>Get Started</button>
    </Container>
  );
};

export default Boost;
