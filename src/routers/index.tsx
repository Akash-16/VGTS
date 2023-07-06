import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MainLayout = React.lazy(() => import("../layout/main"));
const Intro = React.lazy(() => import("../pages/intro"));
const MealsList = React.lazy(() => import("../pages/mealsList"));
const MealsDetails = React.lazy(() => import("../pages/mealsDetails"));
const Success = React.lazy(() => import("../pages/success"));

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/*" element={<MainLayout />}>
          <Route path="list" element={<MealsList />} />
          <Route path="details/:id" element={<MealsDetails />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default React.memo(Routers);
