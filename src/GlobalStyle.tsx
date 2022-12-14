import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* reset */
  *{margin:0;padding:0;font:inherit;color:inherit;}
  *,:after, :before {box-sizing:border-box;flex-shrink:0;}
  :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;-moz-tab-size:4;tab-size:4}
  html {font-size: 62.5%; scroll-behavior: smooth;}
  html, body { position: relative; width: 100%; height:100%; max-width: 1100px; margin: auto;  &::-webkit-scrollbar {
    display: none;
  }}
  img, picture, video, canvas, svg {display: block;max-width:100%;};
  button {background:none;border:0;cursor:pointer;}
  a {text-decoration:none}
  table {border-collapse:collapse;border-spacing:0}

  * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; ::-webkit-scrollbar {
    display: none;
  }}
`;

export default GlobalStyle;
