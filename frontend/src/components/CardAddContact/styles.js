import styled from "styled-components";

const ContactContainerStyled = styled.div `
    width: 95%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    border: 2px solid white;
    flex-wrap: wrap;
`;

const UserContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    svg:first-child {
        width: 30px;
        height: 30px;
    }

    h3 {
        font-size: 1.8rem;
        word-break: break-word;
    }
`;

const ButtonContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-color: ${props => props.theme.bgColors.primary};
    border: 1px solid white;
    border-radius: 0.5rem;
    gap: 0.5rem;
    cursor: pointer;
    transition: 0.2s;
    flex-wrap: wrap;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export {
	ContactContainerStyled,
	UserContainerStyled,
	ButtonContainerStyled
};