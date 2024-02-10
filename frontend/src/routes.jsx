import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { useEffect } from "react";
import webSocketConnection from "./common/config/webSocketConnection";
import webSocketDisconnection from "./common/config/webSocketDisconnection";

const serverEndpoint = "http://localhost:3000";

const Router = () => {

	useEffect(() => {

		webSocketConnection(serverEndpoint);

		return () => {
			webSocketDisconnection(serverEndpoint);
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