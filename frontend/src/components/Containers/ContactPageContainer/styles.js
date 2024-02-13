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

export {
	ContactPageContainerStyled
};