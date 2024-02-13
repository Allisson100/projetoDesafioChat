import styled from "styled-components";

const ContactPageContainerStyled = styled.section`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.bgColors.quaternary};
    padding: 1rem;
`;

const ContactInfosContainerStyled = styled.div`
    width: 60%;
    height: 100%;
    border: 10px solid white;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`;

const IconAndInputContainerStyled = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 2rem;

    svg {
        width: 35px;
        height: 35px;
        color: ${props => props.theme.bgColors.quaternary};
        position: absolute;
        right: 15px;
        top: calc(50% - (35px/2));
    }
`;

const AllContactsConatiner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.bgColors.primary};
        border-radius: 5px;
    }
`;

const ButtonContainer = styled.div`
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

    svg {
        width: 30px;
        height: 30px;
    }

    h3 {
        font-size: 1.8rem;
        word-break: break-word;
    }
`;

export {
	ContactPageContainerStyled,
	ContactInfosContainerStyled,
	IconAndInputContainerStyled,AllContactsConatiner,
	ButtonContainer,
	ContactContainerStyled,
	UserContainerStyled
};