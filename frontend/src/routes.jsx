import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import webSocketConnection from "./common/config/webSocketConnection";
import webSocketDisconnection from "./common/config/webSocketDisconnection";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChatPage from "./pages/Chat";
import "./services/webSocketListenEvents";
import { useDispatch, useSelector } from "react-redux";
import { getTokenCookie } from "./store/reducers/auth";
import DefaultPage from "./components/DefaultPage";
import ContactPage from "./pages/Contact";
import AddContact from "./pages/AddContact";

const RouterApp = () => {

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
				<Route path="/" element={isAuthenticated ? <DefaultPage /> : <Navigate to="/login" />}>
					<Route index element={<ChatPage />}/>
					<Route path="/contact" element={<ContactPage />}/>
					<Route path="/addcontact" element={<AddContact />}/>
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterApp;