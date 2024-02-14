import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const LoadingSpinnerStyled = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${rotate} 1s linear infinite;
`;

export {
	LoadingSpinnerStyled
};