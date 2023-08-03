import config from "./../configs";
// page
import Login from "../pages/Account/components/Login";
import Register from "../pages/Account/components/Register"
import Home from "../pages/Home";
import DetailProduct from "../pages/Products/Detail";
import Category from "../pages/Products/Category";
import CartDetail from "../pages/Cart/CartDetail";
import Dashboard from "../pages/Admin/Dashboard";
import addProduct from "../pages/Admin/components/addProduct";
import updateProduct from "../pages/Admin/components/updateProduct";

const PublicRouter = [
	{ path: config.routes.home, component: Home }, 
	{ path: config.routes.login, component: Login },
	{ path: config.routes.register, component: Register },
	{ path: config.routes.detail, component: DetailProduct},
	{ path: config.routes.category, component: Category},
	{path: '/admins', component: Dashboard, isAdmin: true},
	{path: '/admins/addProduct', component: addProduct, isAdmin: true},
	{path: '/admins/updateProduct/:id', component: updateProduct, isAdmin: true},
	{ path: config.routes.cartDetail, component: CartDetail , reset : true },
	{ path: "**", component: <p>not found...</p> , reset : true },
// PrivateRouter
]
const PrivateRouter = [
];
export { PublicRouter, PrivateRouter };
