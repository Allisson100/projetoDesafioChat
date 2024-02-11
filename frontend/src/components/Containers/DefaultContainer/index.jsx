import { DefaultContainerStyled } from "./styles";

const DefaultContainer = ({ children }) => {
	return (
		<DefaultContainerStyled>
			{children}
		</DefaultContainerStyled>
	);
};

export default DefaultContainer;