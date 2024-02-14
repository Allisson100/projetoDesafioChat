import styled from "styled-components";

const GroupPageContainerStyled = styled.section`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: ${props => props.theme.bgColors.quaternary};

    h2 {
        font-size: 2rem;
    }

    h2:first-child {
        margin-bottom: 2rem;
    }
`;

const InputContainerStyled = styled.div`
    width: 60%;
    height: 70%;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
`;

const ContactsContainerStyled = styled.div`
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.bgColors.primary};
        border-radius: 5px;
    }
`;

const ButtonContainer = styled.div`
    width: 30%;
    padding: 1rem;
    background-color: ${props => props.theme.bgColors.primary};
    margin-top: 2rem;
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export {
	GroupPageContainerStyled,
	InputContainerStyled,
	ContactsContainerStyled,
	ButtonContainer
};