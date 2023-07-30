import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import React from "react";
import { PublicRouter } from "./routes/routes";
import MainOnly from "./layouts/MainOnly/MainOnly";
const App = createBrowserRouter(
	createRoutesFromElements(
		PublicRouter.map((router, index) => {
			const Component = router.component;
			let Layout = DefaultLayout;
			 if(router.isAdmin == true) {
			  Layout = MainOnly;
			 }
			return (
				<Route
					key={index}
					path={router.path}
					element={
						<Layout>
							 <Component/>
						</Layout>
					}
				/>
			);
		}) 
		)
);
export default App;
