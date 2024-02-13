import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme.js";
import RouterApp from "./routes.jsx";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme.shadesBlue}>
				<GlobalStyles />
				<RouterApp />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
);
