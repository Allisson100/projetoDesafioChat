import styled from "styled-components";

const GroupContactCardContainerStyled = styled.div`
    width: 95%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid white;
    border-radius: 1rem;
    flex-wrap: wrap;

    svg {
        width: 30px;
        height: 30px
    }

    h3 {
        font-size: 1.5rem;
        overflow-x: auto;
    }
`;

const IconContainerStyled = styled.div `
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
`;

const ButtonContainerStyled = styled.div `
    padding: 1rem;
    background-color: ${props => props.$userAddedGroup ? "red" : props.theme.bgColors.primary};
    border-radius: 1rem;
    transition: 0.2s;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
    }

    &:active{
        transform: scale(0.95);
    }
`;

export {
	GroupContactCardContainerStyled,
	IconContainerStyled,
	ButtonContainerStyled
};