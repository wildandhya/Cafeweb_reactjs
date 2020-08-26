/** @format */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import History from "./pages/History";
import login from "./pages/login";
import PrivateRoute from "./components/privateRoute";

const CafeRouter = () => {
  return (
    <Router>
      <PrivateRoute path='/private' excact>
        <Home />
      </PrivateRoute>
      <Route path='/history' component={History} />
      <Route path='/login' component={login} />
    </Router>
  );
};
export default CafeRouter;
