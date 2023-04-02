import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import HomePage  from './HomePage';
import ClassementPage from './ClassementPage';
import AdminPage from './AdminPage';


function Login() {
   

    return (
        < BrowserRouter>
          <Routes>
            <Route exact path="/" component={HomePage} />
            <Route path="/classement" component={ClassementPage} />
            <Route path="/admin" component={AdminPage} />
          </Routes>
        </BrowserRouter>
      );
    }

export default Login;
