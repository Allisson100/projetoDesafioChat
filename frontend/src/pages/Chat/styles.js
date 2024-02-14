import styled from "styled-components";

const ChatContainerStyled = styled.section`
    width: 70%;
    height: 100%;
    background-color: lightgreen;
    display: flex;
    flex-direction: column;
`;

const AllTextMessagesContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.bgColors.secundary} ;
    padding: 3rem;
    display: flex;
    flex-direction: column-reverse;
    overflow-y: auto;
`;

const WrapperStyled = styled.div`
    display: flex;
`;

export {
	ChatContainerStyled,
	AllTextMessagesContainerStyled,
	WrapperStyled
};