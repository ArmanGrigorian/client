import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UserContextProvider from "./components/context/UserContextProvider.jsx";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<UserContextProvider>
			<App />
		</UserContextProvider>
	</StrictMode>,
);
