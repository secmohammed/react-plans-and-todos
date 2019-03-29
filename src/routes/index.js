import React from "react";

import Dashboard from "../components/dashboard/Dashboard";
import ProjectDetails from "../components/projects/ProjectDetails";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import ResetPassword from "../components/auth/ResetPassword";
import ForgotPassword from "../components/auth/ForgotPassword";
import CreateProject from "../components/projects/CreateProject";
import UpdateProject from "../components/projects/UpdateProject";
import { Route } from "react-router-dom";

export const routes = [
    { path: "/", component: Dashboard, exact: true},
    { path: "/project/create", component: CreateProject},
    { path: "/project/:id/update", component: UpdateProject},
    { path:"/project/:id", component: ProjectDetails, exact: true},
    { path: "/auth/login", component: SignIn},
    { path: "/auth/register", component: SignUp},
    { path: "/auth/reset-password", component: ResetPassword },
    { path: "/auth/forgot-password", component: ForgotPassword }
]

export function registerRoutes() {
    return routes.map((route) => <Route key={route.path} path={route.path} component={route.component} exact={route.exact || false} />)
}