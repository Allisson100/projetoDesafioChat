import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        padding: 0;
        border: none;
    }

    #root {
        background-color: #ffffff;
        min-height: 100vh;
        width: 100%;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;