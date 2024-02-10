import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme.js";
import Router from "./routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme.shadesBlue}>
			<GlobalStyles />
			<Router />
		</ThemeProvider>
	</React.StrictMode>,
);
