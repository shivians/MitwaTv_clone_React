import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";
import MitwaNews from "../pages/mitwaNews/MitwaNews";
import Live from "../pages/live/Live";
import Music from "../pages/music/Music";
import MitwaMix from "../pages/mitwaMix/MitwaMix";
import Series from "../pages/series/Series";
import List from "../pages/list/List";
import SearchPage from "../pages/searchPage/SearchPage";
import LogIn from "../pages/auth/LogIn";
import SignUp from "../pages/auth/SignUp";
import AboutUs from "../pages/aboutUs/AboutUs";
import ContactUs from "../pages/general/ContactUs";
import PrivacyPolicy from "../pages/general/PrivacyPolicy";
import TermsCondition from "../pages/general/TermsCondition";
import MovieDetails from "../components/movieDetails/MovieDetails";
import VideoPlay from "../components/movieDetails/VideoPlay";
import AdminAccount from "../components/admin/AdminAccount";
import ProtectedRoute from "../components/ProtectedRoute";
import Invoice from "../components/admin/Invoice";
import Profile from "../components/admin/Profile";
import PartnerSignup from "../pages/auth/PartnerSignup";
import PasswordReset from "../pages/auth/PasswordReset";
import PasswordResetOTP from "../pages/auth/PasswordResetOTP";
import OtpVerification from "../pages/auth/OtpVerification";

const AllRouter = () => {
  return (
    <div>
<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/mitwa-news" element={<MitwaNews />} />
          <Route path="/live" element={<Live />} />
          <Route path="/music" element={<Music />} />
          <Route path="/mitwa-mix" element={<MitwaMix />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/termsCondition" element={<TermsCondition />} />
          <Route path="/partnersignup" element={<PartnerSignup />} />
          <Route path="/password/reset" element={<PasswordReset />} />
          <Route path="/reset-password-with-otp" element={<PasswordResetOTP />} />
          <Route path="/verify-mobile-number" element={<OtpVerification />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<AdminAccount />} />
            <Route path="/movies/:id/play" element={<VideoPlay />} />
            <Route path="/account/watchlist" element={<List />} />
            <Route path="/account/billing_history" element={<Invoice />} />
            <Route path="/account/profile" element={<Profile />} />
          </Route>
        </Routes>

    </div>
  )
}

export default AllRouter