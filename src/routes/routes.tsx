import { lazy } from "react";
import WithSuspense from "../components/common/WithSuspense";
import { PATHS } from "./constants";
import { Navigate } from "react-router-dom";
import { AppRoute } from "../utils/types";

const { CHECKOUT } = PATHS;

const Checkout = WithSuspense(lazy(() => import("../pages/Checkout")));

export const ROUTES: AppRoute[] = [
  { path: CHECKOUT, element: <Checkout /> },
  { path: "*", element: <Navigate to="/checkout/:page_ref" replace /> },
];
