import styled from "styled-components";

const InputContainerStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    justify-content: center;
    width: 100%;

    @media screen and (min-width: 1025px) {
        margin-bottom: ${props => props.$marginBottom ? "5rem" : "0"};
    }
`;

export {
	InputContainerStyled
};