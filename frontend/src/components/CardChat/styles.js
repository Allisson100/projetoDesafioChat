import styled from "styled-components";

const CardChatContainerStyled = styled.div `
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid white;
    flex-wrap: wrap;
    cursor: pointer;
`;

const UserCardChatContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    svg:first-child {
        width: 30px;
        height: 30px;
    }

    svg:last-child {
        width: 25px;
        height: 25px;
        color: red;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
            transform: scale(1.1);
        }

        &:active {
            transform: scale(0.9);
        }
    }

    h3 {
        font-size: 1.8rem;
        word-break: break-word;
    }
`;

export {
	CardChatContainerStyled,
	UserCardChatContainerStyled
};