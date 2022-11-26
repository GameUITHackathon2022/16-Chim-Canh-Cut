import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthenticationPage from "../pages/AuthenticationPage";
import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AuthenticationPage/>,
		children: [
		]
	},
	{
		path: '/home',
		element: <HomePage/>
	},
	{
		path: "authentication",
		element: <AuthenticationPage />,
	},
]);

export default function MainRouter() {
	return <RouterProvider router={router} />;
}
