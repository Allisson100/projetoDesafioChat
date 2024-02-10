import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { useEffect } from "react";
import webSocketConnection from "./common/config/webSocketConnection";

const Router = () => {

	useEffect(() => {

		webSocketConnection.clientConnected;
		webSocketConnection.clientDisconnected;

		return () => {
			webSocketConnection.disconnectServer;
		};
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;