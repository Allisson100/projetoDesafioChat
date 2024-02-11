import { Link } from "react-router-dom";
import styled from "styled-components";

const TextContainerStyles = styled.div`
    display: none;

    @media screen and (max-width: 1024px) {
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const TextStyled = styled.p`
    font-size: 1.3rem;
    text-align: center;
`;

const LinkStyled = styled(Link)`
    color: blue;
    font-size: 1.3rem;
`;

export {
	TextContainerStyles,
	TextStyled,
	LinkStyled
};