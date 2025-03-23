import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./Routes";


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
