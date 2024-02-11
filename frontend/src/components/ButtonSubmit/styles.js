import styled from "styled-components";

const ButtonContainerStyled = styled.button`
    align-items: center;
    background-color: ${props => props.$bgColor};
    border-radius: 0.5rem;
    color: ${props => props.theme.fontColors.secundary};
    display: flex;
    font-size: 1.4rem;
    font-weight: bold;
    justify-content: center;
    max-height: 4rem;
    min-height: 3rem;
    max-width: 14.25rem;
    min-width: 12.25rem;
    transition: 0.2s;

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