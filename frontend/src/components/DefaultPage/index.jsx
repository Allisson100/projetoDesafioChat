import { Outlet } from "react-router-dom";
import { DefaultPageContainerStyled } from "./styles";
import UserInfos from "../UserInfos";
import { useEffect } from "react";
import webSocketEvents from "../../services/webSocketEmitEvents";
import { useSelector } from "react-redux";

const DefaultPage = () => {
	const username = useSelector(state => state.username);

	useEffect(() => {
		webSocketEvents.sendUSernameToServer(username);
		webSocketEvents.getContactsDb(username);
		webSocketEvents.getUserMessagesDb(username);
		webSocketEvents.getUSerGroups(username);
	}, []);

	return (
		<DefaultPageContainerStyled>
			<UserInfos />
			<Outlet />
		</DefaultPageContainerStyled>
	);
};

export default DefaultPage;