import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import webSocketConnection from "./common/config/webSocketConnection";
import webSocketDisconnection from "./common/config/webSocketDisconnection";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;