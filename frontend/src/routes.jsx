import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import webSocketConnection from "./common/config/webSocketConnection";
import webSocketDisconnection from "./common/config/webSocketDisconnection";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import "./services/webSocketListenEvents";
import { useDispatch, useSelector } from "react-redux";
import { getTokenCookie } from "./store/reducers/auth";

const Router = () => {

	const dispatch = useDispatch();
	const isAuthenticated = useSelector(state => state.auth);

	useEffect(() => {

		dispatch(getTokenCookie("jwtToken"));
		webSocketConnection();

		return () => {
			webSocketDisconnection();
		};
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				
				<Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />

				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;