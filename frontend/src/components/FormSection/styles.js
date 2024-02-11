import styled from "styled-components";

const FormSectionContainerStyled = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 70%;

    @media screen and (max-width: 870px) {
        width: 100%;
    }
`;

const SetSizeStyled = styled.div`
    align-items: center;
    display: flex;
    min-height: 100%;
    padding: 3rem;
    width: 60%;

    @media screen and (max-width: 1180px) {
        width: 100%;
    }
`;

const SetPositionSubtitlesStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 2rem;
`;

export {
	FormSectionContainerStyled,
	SetSizeStyled,
	SetPositionSubtitlesStyled,
};