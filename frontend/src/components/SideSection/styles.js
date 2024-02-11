import styled from "styled-components";
import backGroundImage from "../../assets/bgImage.jpg";

const SideSectionContainerStyled = styled.section`
    align-items: center;
    background-image: url(${backGroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    color: ${props => props.theme.fontColors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    padding: 3rem;
    width: 30%;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

const ButtonAndQuestionContainerStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    width: 100%;
`;

export {
	SideSectionContainerStyled,
	ButtonAndQuestionContainerStyled,
};