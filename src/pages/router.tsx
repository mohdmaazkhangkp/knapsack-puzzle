import { Route, Routes } from "react-router-dom";
import pagesData from "./pagesData";
import { routerType } from "../types/router.types";
import Layout from "../layout/Layout";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={path} element={element} />;
  });

  return (
    <Layout>
      <Routes>{pageRoutes}</Routes>
    </Layout>
  );
};

export default Router;
