import { EmptyListStyled } from "./styles";

const EmptyList = ({ children }) => {
	return (
		<EmptyListStyled>
			{children}
		</EmptyListStyled>
	);
};

export default EmptyList;