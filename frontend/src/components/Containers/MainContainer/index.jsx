import { MainContainerStyled } from "./styles";

const MainContainer = ({ children }) => {
	return (
		<MainContainerStyled>
			{children}
		</MainContainerStyled>
	);
};

export default MainContainer;