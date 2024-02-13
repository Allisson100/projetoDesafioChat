import styled from "styled-components";

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

export {
	IconAndInputContainerStyled
};