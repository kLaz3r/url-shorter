import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import home from '../images/illustration-working.svg';

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    img {
      height: 50%;
    }
    ul {
      display: flex;
      margin-left: 2rem;
      list-style-type: none;
      li {
        margin: 0 0.5rem;
        font-weight: 500;
        color: hsl(257, 7%, 63%);
      }
    }
  }
`;
const Login = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  color: hsl(257, 7%, 63%);
`;
const SignUp = styled.a`
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border-radius: 30px;
  background-color: hsl(180, 66%, 49%);
  color: white;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`;
const Home = styled.div`
  display: flex;
  flex-direction: row;
  div {
    width: 50%;
    padding: 7rem 0;
    h1 {
      font-size: 4rem;
      font-weight: 700;
      line-height: 1.2;
      padding: 0;
      margin: 0;
    }
    p {
      color: hsl(257, 7%, 63%);
      max-width: 70%;
    }
    button {
      background-color: hsl(180, 66%, 49%);
      color: white;
      padding: 0.7rem 1.7rem;
      border: none;
      border-radius: 2rem;
      margin-top: 2rem;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
const Image = styled.div`
  background-image: url(${home});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50px;
  z-index: -1;
  width: 50%;
`;

const Header = () => {
  return (
    <Container>
      <Nav>
        <div>
          <img src={logo} alt='' />
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
        <div>
          <Login href='#'>Login</Login>
          <SignUp href='#'>Sign Up</SignUp>
        </div>
      </Nav>
      <Home>
        <div>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights in how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
        <Image></Image>
      </Home>
    </Container>
  );
};

export default Header;
