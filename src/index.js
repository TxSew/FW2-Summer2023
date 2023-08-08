import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./components/GlobalStyle";
import { store } from "./redux/StoreClient";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from "@apollo/client";
 import client from './api/graphql/apolloClient'

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ApolloProvider client={client}>
				<GlobalStyle>
					<ToastContainer />
					<RouterProvider router={App} />
				</GlobalStyle>
			</ApolloProvider>
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
