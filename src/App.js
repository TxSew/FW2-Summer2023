import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import React from "react";
import { PublicRouter } from "./routes/routes";
import MainOnly from "./layouts/MainOnly/MainOnly";
const withAuthorization = (allowedRoles) => (WrappedComponent) => {
	// Implement your access control logic here
	const isLoggedIn = true; // Replace this with your actual authentication check
	const userRole = 'admin'; // Replace this with your actual user role
  
	if (!isLoggedIn || !allowedRoles.includes(userRole)) {
	  // If the user is not logged in or doesn't have the required role,
	  // return a fallback component or redirect them to a different page.
	  return <h1>load....</h1>; // Replace this with your fallback component or redirect logic
	}
  
	// If the user has the required role, render the wrapped component
	return <WrappedComponent />;
  };
const App = createBrowserRouter(
	createRoutesFromElements(
		PublicRouter.map((router, index) => {
			const Component = router.component;
			let Layout = DefaultLayout;
			 if(router.isAdmin === true) {
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
