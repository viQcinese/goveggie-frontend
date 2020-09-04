import styled, { keyframes } from 'styled-components';

import signUpBackgroundImg from '../../assets/images/landing-logo2.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appear = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appear} 1s;

  > img {
    margin-bottom: 60px;
  }

  form {
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 24px;
    }

    button {
      width: 100%;
      margin-top: 16px;
      outline: none;
      border: none;
      border: 1px solid var(--color-fifth);
      background: none;
      background: var(--color-first);
      padding: 16px;
      border-radius: 8px;
      color: white;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 500;
    }

    > a {
      text-decoration: none;
      margin-top: 24px;
      font-weight: 700;
    }
  }

  > a {
    display: flex;
    align-items: center;

    text-decoration: none;
    margin-top: 100px;
    margin-bottom: 20px;
    color: var(--color-first);
    font-weight: 700;

    svg {
      margin-right: 16px;
    }
  }
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) center no-repeat;
  background-size: cover;
  box-shadow: -10px 0px 10px 0px var(--color-background) inset;
  filter: grayscale(60%);
`;
