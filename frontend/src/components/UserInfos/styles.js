import styled from "styled-components";

const UserInfosContainerStyled = styled.section`
    width: 30%;
    height: 100%;
    background-color: gray;
`;

const HeaderUserInfosStyled = styled.header `
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 100px;
    grid-template-areas: 
        "username username username username"
        "newMessage contacts newGroup exit"
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
        grid-column: span 4;
        gap: 0.5rem;
    }
    div:nth-child(2) {
        grid-area: exit;
    }
    div:nth-child(3) {grid-area: newMessage;}
    div:nth-child(4) {grid-area: contacts;}
    div:nth-child(5) {grid-area: newGroup;}
`;

export {
	UserInfosContainerStyled,
	HeaderUserInfosStyled
};