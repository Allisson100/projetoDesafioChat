import styled from "styled-components";

const UserInfosContainerStyled = styled.section`
    width: 30%;
    height: 100%;
    background-color: gray;
    display: flex;
    flex-direction: column;
`;

const HeaderUserInfosStyled = styled.header `
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    height: 100px;
    grid-template-areas: 
        "username username username username username"
        "newMessage newContact contacts newGroup exit"
    ;
    padding: 0.5rem;
    background-color: ${props => props.theme.bgColors.primary};

    svg {
        width: 25px;
        height: 25px;
        transition: 0.2s;

        &:hover {
            transform: scale(1.05);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            cursor: pointer;
        }

        &:active {
            transform: scale(0.95);
        }
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div:first-child {
        grid-area: username;
        grid-column: span 5;
        gap: 0.5rem;
    }
    div:nth-child(2) {
        grid-area: exit;
    }
    div:nth-child(3) {

        svg {
            width: 21px;
            height: 21px;
        }
        grid-area: newContact;
        
    }
    div:nth-child(4) {grid-area: contacts;}
    div:nth-child(5) {grid-area: newGroup;}
    div:nth-child(6) {grid-area: newMessage;}
`;

//OUTROS

const AllMessagesContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.bgColors.other};
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export {
	UserInfosContainerStyled,
	HeaderUserInfosStyled,

	AllMessagesContainerStyled,
};