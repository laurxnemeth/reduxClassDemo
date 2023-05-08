import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./components";

import { store } from "./redux/store";
import { Provider } from "react-redux";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(
	<Provider store={store}>
		<Main />
	</Provider>
);
