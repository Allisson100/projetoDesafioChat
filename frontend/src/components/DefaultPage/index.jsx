import { Outlet } from "react-router-dom";
import { DefaultPageContainerStyled } from "./styles";
import UserInfos from "../UserInfos";

const DefaultPage = () => {
	return (
		<DefaultPageContainerStyled>
			<UserInfos />
			<Outlet />
		</DefaultPageContainerStyled>
	);
};

export default DefaultPage;