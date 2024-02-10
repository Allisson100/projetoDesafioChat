import styled from "styled-components";

const LogoContainerStyled = styled.h1`
    background-color: ${props => props.theme.bgColors.quinternary};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    left: 10%;
    padding: 0.5rem;
    position: absolute;
    top: 5%;

    @media screen and (max-width: 700px) {
        display: none;
    }
`;

const FirstTextStyled = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    font-family: ${props => props.theme.fonts.primary};
    font-size: 2rem;
    text-transform: uppercase;
`;

const SecondTextStyled = styled.div`
    align-items: center;
    color: ${props => props.theme.fontColors.tertiary};
    display: flex;
    font-size: 2rem;
    justify-content: center;
    text-transform: capitalize;

    svg {
        height: 40px;
        width: 40px;
    }
`;

export {
	LogoContainerStyled,
	FirstTextStyled,
	SecondTextStyled
};