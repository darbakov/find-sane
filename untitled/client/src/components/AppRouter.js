import React from 'react';
import {Router} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";

const AppRouter = () => {
    const isAuth = false
    return (

        <div >
            {isAuth && authRoutes.map(({path, Component}) =>
                <Router key={path} path={path} element={Component} exact  />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Router key={path} path={path} element={Component} exact  />
            )}
        </div>
    );
};

export default AppRouter;