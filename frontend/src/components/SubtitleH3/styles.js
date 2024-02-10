import styled from "styled-components";

const TextStyled = styled.h3`
    color: ${props => props.theme.fontColors.quaternary};
    font-family: ${props => props.theme.fonts.primary};
    font-size: 2rem;
    text-align: center;
    text-transform: capitalize;
`;

export {
	TextStyled,
};