import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'error' | 'success' | 'info';
}

const toastTypeVariations = {
  info: css`
    background: var(--color-input-info);
    color: var(--color-input-info-text);
  `,
  success: css`
    background: var(--color-input-success);
    color: var(--color-input-success-text);
  `,
  error: css`
    background: var(--color-input-error);
    color: var(--color-input-error-text);
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;

  position: relative;
  display: flex;

  padding: 16px 32px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  ${props => toastTypeVariations[props.type || 'info']}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 14px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 18px;
    top: 18px;
    border: 0;
    background: transparent;
    outline: none;
    color: inherit;
  }
`;
