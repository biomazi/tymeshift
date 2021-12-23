import React from 'react';
import styled from 'styled-components';
import errorImg from 'assets/error_route.svg';
import { useNavigate } from 'react-router';

const SessionLoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15%;

  .ErrorImage {
    height: 200px;
    width: 200px;
  }

  .Message {
    color: darkgray;
    font-family: Roboto, sans-serif;
    font-size: 28px;
    font-weight: bold;
    margin-top: 25px;
    text-align: center;

    .ErrorTitle {
      color: #fa7e44;
      margin-top: -30px;
      font-size: 20px;
    }
  }
`;

const StyledButton = styled.button`
  align-items: center;
  background-color: #ec5b07;
  height: 32px;
  width: 80px;
  border: 1px solid #fa7e44 !important;
  color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-sizing: content-box;
  justify-content: center;
  margin-top: -5px;

  .mdc-button__label {
    height: 18px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 18px;
    text-align: center;
  }

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <SessionLoadingStyled>
      <div className="Error">
        <img alt="" className="ErrorImage" src={errorImg} />
        <div className="Message">
          <h4 className="ErrorTitle">We seem to have run into some issues.</h4>
        </div>
        <StyledButton className="Button" onClick={() => navigate('/')}>
          Go back
        </StyledButton>
      </div>
    </SessionLoadingStyled>
  );
};

export default ErrorPage;
