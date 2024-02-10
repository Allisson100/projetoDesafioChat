import styled from "styled-components";

const TitleContainerStyled = styled.h2`
    font-family: ${props => props.theme.fonts.primary};
    font-size: 2.5rem;
    text-align: center;
    text-transform: capitalize;
    width: 100%;
`;

export {
	TitleContainerStyled,
};