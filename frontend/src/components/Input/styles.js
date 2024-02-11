import styled from "styled-components";

const InputContainerStyled = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    justify-content: center;
    width: 100%;
`;

const InputStyled = styled.input`
    background-color: ${props => props.$placeholderColor};
    border-radius: 0.5rem;
    color: ${props => props.theme.fontColors.secundary};
    font-size: 1.2rem;
    height: 3.5rem;
    line-height: 1.5rem;
    outline: ${props => props.$errorMessage ? "3px solid red" : "none"};
    padding: 1rem;
    width: 100%;

    &::placeholder {
        color: ${props => props.theme.fontColors.secundary};
    }

    &:focus {
        outline: 3px solid black;
    }
`;

const SpanStyled = styled.span`
    color: red;
    font-size: 1.2rem;
    margin-left: 0.2rem;
`;

export {
	InputContainerStyled,
	InputStyled,
	SpanStyled
};