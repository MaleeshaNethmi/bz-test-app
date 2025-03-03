import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomepageLayout from "./components/Pages/PageController/Main";
import Footer from "./components/Reusable/Footer/Footer";
import NavBar from "./components/Reusable/NavBar/MainNavBar";
import SignIn from "./components/Pages/SignInPage/SignIn";
import JoinwithUs from "./components/Pages/JoinwithUs/JoinwithUs";
import NotFoundPAge from "./components/Pages/404Page/NotFoundPAge";
import BannerPage2 from "./components/Pages/BannerPage2/BannerPage2";
import BannerPage3 from "./components/Pages/BannerPage3/BannerPage3";
import BannerPage4 from "./components/Pages/BannerPage4/BannerPage4";
import BannerPage5 from "./components/Pages/BannerPage5/BannerPage5";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomepageLayout />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/joinwithus" element={<JoinwithUs />} />
        <Route path="/new" element={<BannerPage2 />} />
        <Route path="/third" element={<BannerPage3 />} />
        <Route path="/fourth" element={<BannerPage4 />} />
        <Route path="/fifth" element={<BannerPage5 />} />
        <Route path="/*" element={<NotFoundPAge />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
