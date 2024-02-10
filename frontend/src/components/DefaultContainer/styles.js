import styled from "styled-components";

const DefaultContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30%;
    justify-content: space-between;
    min-height: 75%;
    width: 100%;

    @media screen and (max-width: 1025px) {
        justify-content: unset;
    }

    @media screen and (max-width: 700px) {
        gap: 4rem;
        justify-content: initial;
    }

    @media screen and (max-width: 700px) {
        min-height: 100%;
    }
`;

export {
	DefaultContainerStyled,
};