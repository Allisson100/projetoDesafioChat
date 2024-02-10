import styled from "styled-components";

const FormContainerStyled = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
`;

const InputContainerStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    justify-content: center;
    width: 100%;
`;

const TextStyled = styled.p`
    display: none;
    font-size: 1.3rem;
    text-align: center;
    
    a {
        color: blue;
    }

    @media screen and (max-width: 870px) {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export {
	FormContainerStyled,
	InputContainerStyled,
	TextStyled
};