import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LayoutLanding from "../widges/LayoutLanding";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/shop";
import Ourstory from "../pages/ourstory/Ourstory";
import Wheretobuy from "../pages/wheretobuy/Wheretobuy";
import Contact from "../pages/contact/Contact";

const RouterComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutLanding>
                <Home />
              </LayoutLanding>
            }
          />
          <Route
            path="/shop"
            element={
              <LayoutLanding>
                <Shop />
              </LayoutLanding>
            }
          />
          <Route
            path="/our-story"
            element={
              <LayoutLanding>
                <Ourstory />
              </LayoutLanding>
            }
          />
          <Route
            path="/where-to-buy"
            element={
              <LayoutLanding>
                <Wheretobuy />
              </LayoutLanding>
            }
          />
          <Route
            path="/contact"
            element={
              <LayoutLanding>
                <Contact />
              </LayoutLanding>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterComponent;
