import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';

const Background = styled.div`
  display: block;
  background-color: hsl(255, 11%, 22%);
  color: white;
  img {
    filter: invert(1);
  }
`;
const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem;
  img {
    height: 10%;
    margin-right: 8rem;
  }
  div {
    width: 20%;
    line-height: 2rem;
    h5 {
      font-size: 1rem;
      margin-bottom: 0.7rem;
    }
    ul {
      list-style-type: none;
      li {
        a {
          color: hsl(257, 7%, 63%);
          text-decoration: none;
          &:hover {
            color: hsl(180, 66%, 49%);
          }
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <Background>
      <Container>
        <img src={logo} alt='' />
        <div>
          <h5>Features</h5>
          <ul>
            <li>
              <a href='/'>Link Shortening</a>
            </li>
            <li>
              <a href='/'>Branded Links</a>
            </li>
            <li>
              <a href='/'>Analytics</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Resources</h5>
          <ul>
            <li>
              <a href='/'>Blog</a>
            </li>
            <li>
              <a href='/'>Developers</a>
            </li>
            <li>
              <a href='/'>Support</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Our Team</a>
            </li>
            <li>
              <a href='/'>Careers</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='social-media'>Facebook</div>
      </Container>
    </Background>
  );
};

export default Footer;
