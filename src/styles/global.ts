import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
  --color-background: #edebd6;
  --color-input: #f8f7ee;
  --color-input-border: #dee0de;
  --color-input-error: #f2e0e0;
  --color-input-error-border: #ce8b8b;
  --color-input-error-border-lighter: #e9cccc;
  --color-input-error-text: #a53838;
  --color-input-success: #d6edd3;
  --color-input-success-border: #92cf8b;
  --color-input-success-text: #39972f;
  --color-input-info: #d9e7ef;
  --color-input-info-border: #8cb9cf;
  --color-input-info-text: #2e799e;
  --color-first: #578e44;
  --color-second: #5f4118;
  --color-third: #59364c;
  --color-fourth: #686063;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-background);
    color: var(--color-third);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, a {
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    color: var(--color-second)
  }

  button {
    cursor: pointer;
  }
`;
