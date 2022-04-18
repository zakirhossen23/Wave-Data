import * as React from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";

import Login from "./pages/LogIn";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import SurveyDetails from "./pages/SurveyDetails";
import Team from "./pages/Team";
import TrialDetails from "./pages/TrialDetails";
import Trials from "./pages/Trials";
import Home from './pages/Home'
import AppDownload from './pages/AppDownload'

import Work from './pages/work';
import Privacy from './pages/privacy'
import FAQ from './pages/faq'
import About from './pages/about'
import Contact from './pages/contact'

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/downloadapp" element={<AppDownload />} />
        <Route path="/work" element={<Work />} />
        <Route path="/privacy" element={<Privacy />}/>
        <Route path="/faq" element={<FAQ />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
  

        <Route element={<DashboardLayout />}>
          <Route
            path="/trials"
            element={
              <Trials />
            }
          />
          <Route
            path="/trials/:id"
            element={
              <TrialDetails />
            }
          />
          <Route
            path="/trials/:id/survey/:id"
            element={
              <SurveyDetails />
            }
          />
          <Route
            path="/team"
            element={
              <Team />
            }
          />
          <Route
            path="/payment"
            element={
              <Payment />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}
