import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--color-input);
  outline: none;
  border: 1px solid var(--color-input-border);
  border-radius: 8px;
  padding: 0 16px;

  ${props =>
    !!props.isErrored &&
    css`
      border-color: var(--color-input-error-border-lighter);
      background: var(--color-input-error);
      /* color: var(--color-input-error-text); */
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--color-input-success-text);
      color: var(--color-input-success-text);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--color-input-success-text);
    `}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin-right: 16px;
  }

  input {
    flex: 1;
    padding: 16px 0;
    background: none;
    border: none;
    outline: none;
  }
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 16px;
  }
`;
