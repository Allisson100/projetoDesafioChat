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


export {
	ContactPageContainerStyled,
	ContactInfosContainerStyled,
	IconAndInputContainerStyled,AllContactsConatiner,
};