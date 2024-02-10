import styled from "styled-components";

const FormSectionContainerStyled = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    width: 70%;

    @media screen and (max-width: 870px) {
        width: 100%;
    }
`;

const SetSizeContainerStyled = styled.div`
    align-items: center;
    display: flex;
    min-height: 100%;
    padding: 3rem;
    width: 60%;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;

const SubtitlesContainerStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;

    @media screen and (max-width: 870px) {
        margin-bottom: 2rem;
    }
`;

export {
	FormSectionContainerStyled,
	SetSizeContainerStyled,
	SubtitlesContainerStyled,
};