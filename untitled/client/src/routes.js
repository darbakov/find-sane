import Admin from "./pages/Admin";
import {
    ADMIN_ROUTER,
    BASKET_ROUTER,
    DEVICE_ROUTER,
    LOGIN_ROUTER,
    REGISTRATION_ROUTER,
    SHOP_ROUTER
} from "./utils/consts";

import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";

export const authRoutes = [
    {
        path: ADMIN_ROUTER,
        Component: Admin
    },
    {
        path: BASKET_ROUTER,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTER,
        Component: Shop
    },
    {
        path: LOGIN_ROUTER,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTER,
        Component: Auth
    },
    {
        path: DEVICE_ROUTER + '/:id',
        Component: DevicePage
    }
]