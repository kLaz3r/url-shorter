import React, { useState } from 'react';
import styled from 'styled-components';
import bg from '../images/bg-shorten-desktop.svg';
import axios from 'axios';

const Box = styled.div`
  display: block;
  background-image: url(${bg});
  background-size: cover;
  background-color: hsl(260, 8%, 14%);
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
  padding: 2rem;
  transform: translateY(-50%);
  input {
    padding: 1rem 1.5rem;
    border-radius: 10px;
    border: none;
    width: 80%;
  }
  p.error {
    color: red;
    text-align: start;
    font-size: 1rem;
  }
  button {
    width: 18%;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    border: none;
    font-weight: 700;
    background-color: hsl(180, 66%, 49%);
    color: white;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;
const Input = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-radius: 10px;
  background-color: white;
  p .original-link {
    float: left;
  }
  div {
    display: flex;
    align-items: center;
    a.short-link {
      color: hsl(180, 66%, 49%);
      margin-right: 1rem;
      text-decoration: none;
    }
    button {
      cursor: pointer;
      background-color: hsl(180, 66%, 49%);
      color: white;
      padding: 0.7rem 1.5rem;
      border-radius: 10px;
      border: none;
      &:hover {
        opacity: 0.7;
      }
      &:active {
        opacity: 1;
        background-color: hsl(260, 8%, 14%);
        transition: all 0.2s ease-in-out;
        transform: translateY(20%);
      }
    }
  }
`;

const Shorten = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  const buttonClickedHandler = () => {
    if (inputValue === '') {
      setError(<p className='error'>Please add a link</p>);
    } else {
      setError(null);
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
        .then((res) => {
          let temp = [...history];
          temp.push(res.data.result);
          setHistory(temp);
        });
    }
  };
  return (
    <React.Fragment>
      <Box>
        <Input>
          <input
            value={inputValue}
            onChange={inputChangeHandler}
            type='text'
            placeholder='Shorten a link here...'
          />
          <button onClick={buttonClickedHandler}>Shorten it!</button>
        </Input>
        {error}
      </Box>
      {history.map((item) => {
        return (
          <Result>
            <p className='original-link'>{item.original_link}</p>
            <div>
              <a href={item.full_short_link} className='short-link'>
                {item.full_short_link}
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(item.full_short_link);
                }}
              >
                Copy!
              </button>
            </div>
          </Result>
        );
      })}
    </React.Fragment>
  );
};

export default Shorten;
