import styled from "styled-components";

const DefaultContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30%;
    justify-content: space-between;
    min-height: 100%;
    width: 100%;

    @media screen and (min-width: 600px) and (max-width: 1024px) {
        min-height: 55%;
    }

    @media screen and (max-width: 700px) {
        min-height: 100%;
        gap: 4rem;
        justify-content: initial;
    }
`;

export {
	DefaultContainerStyled,
};