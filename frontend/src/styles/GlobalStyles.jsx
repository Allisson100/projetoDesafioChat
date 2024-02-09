import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        padding: 0;
    }

    #root {
        background-color: #bebcbc;
        min-height: 100vh;
        width: 100%;
    }

    button {
        border: none;
        cursor: pointer;
    }
`;

export default GlobalStyles;