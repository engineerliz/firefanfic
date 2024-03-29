import { injectGlobal } from 'styled-components'

// https://www.styled-components.com/docs/api#injectglobal
injectGlobal`
  *:before,
  *:after,
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  html,
  body {
    margin: 0;
    padding: 0;
    line-height: 1.4;
    background: #0E0E0E;
  }

  html,
  body,
  #root {
    min-height: 100vh;
  }

  p {
    margin: 0 0 1rem;
  }

  a {
    text-decoration: none;
  }

  H1 {
    margin: 0;
  }

  hr {
    border: none;
    height: 1px;
    background: #eee;
    margin: 1rem 0;
  }
`
