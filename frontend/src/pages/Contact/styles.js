import styled from "styled-components";

const AllContactsContainer = styled.div`
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
	AllContactsContainer
};