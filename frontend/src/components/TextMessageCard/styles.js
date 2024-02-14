import styled from "styled-components";

const TextMessageCardContainer = styled.div `
    display: flex;
    min-width: 20%;
    max-width: 40%;
    padding: 1rem;
    border-radius: 0.5rem;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0.2rem;
    align-self: ${props => props.$changeAlignAndColor ? "flex-end" : "flex-start"};
    background-color: 
        ${props => props.$changeAlignAndColor ? 
		`${props.theme.bgColors.primary}` :
		`${props.theme.bgColors.tertiary}`};

    p {
        word-break: break-word;
        font-size: 1.2rem;
    }

    span {
        font-size: 0.8rem;
    }

    span:first-child{
        align-self: flex-start;
    }

    span:last-child{
        align-self: flex-end;
    }
`;

export {
	TextMessageCardContainer,
};