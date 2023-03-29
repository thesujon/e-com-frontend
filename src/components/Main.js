import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './protectedRoutes/PrivetRoute';
import AdminRoute from './protectedRoutes/AdminRoute';
import Home from './home/Home';
import Login from './user/Login';
import Register from './user/Register';
import ProductDetails from './home/ProductDetails';
import Dashboard from './user/Dashboard';
import AdminDashboard from './admin/adminDashboard';
import CreateCategory from './admin/CreateCategory';
import CreateProduct from './admin/CreateProduct';
import Cart from './order/Cart';
import ShippingAddress from './order/ShippingAddress';
import Checkout from './order/Checkout';
import Payment from './order/Payment';


const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/product/:id" exact component={ProductDetails} />
                <PrivateRoute path="/user/dashboard">
                    <Dashboard />
                </PrivateRoute>
                <PrivateRoute  path="/cart">
                    <Cart />
                </PrivateRoute>
                <PrivateRoute  path="/shipping">
                    <ShippingAddress />
                </PrivateRoute>
                <PrivateRoute  path="/payment">
                    <Payment />
                </PrivateRoute>
                <PrivateRoute  path="/checkout">
                    <Checkout />
                </PrivateRoute>
                <AdminRoute path="/admin/dashboard">
                    <AdminDashboard />
                </AdminRoute>
                <AdminRoute path="/create/category">
                    <CreateCategory />
                </AdminRoute>
                <AdminRoute path="/create/product">
                    <CreateProduct />
                </AdminRoute>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Main;