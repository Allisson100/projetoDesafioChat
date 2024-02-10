import styled from "styled-components";

const ButtonContainerStyled = styled.button`
    align-items: center;
    background-color: ${props => props.$bgColor};
    border-radius: 0.5rem;
    color: ${props => props.theme.fontColors.secundary};
    display: flex;
    font-size: 1.4rem;
    font-weight: bold;
    height: 64px;
    justify-content: center;
    transition: 0.2s;
    width: 228px;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export {
	ButtonContainerStyled,
};