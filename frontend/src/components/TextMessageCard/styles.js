import styled from "styled-components";

const TextMessageCardContainer = styled.div `
    display: flex;
    min-width: 20%;
    max-width: 40%;
    padding: 1rem;
    border-radius: 0.5rem;
    align-self: ${props => props.$changeAlignAndColor ? "flex-end" : "flex-start"};
    background-color: 
        ${props => props.$changeAlignAndColor ? 
		`${props.theme.bgColors.primary}` :
		`${props.theme.bgColors.tertiary}`};

    p {
        word-break: break-word;
    }
`;

export {
	TextMessageCardContainer,
};