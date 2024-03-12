import "./App.css";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import CorporatePackage from "./components/CorporatePackage";
import StudyPackage from "./components/StudyPackage";
import SinglePackage from "./components/SinglePackage";
import GroupPackage from "./components/GroupPackage";
import CouplePackage from "./components/CouplePackage";
import PopularPlace from "./components/PopularPlace";
import HotelAndResort from "./components/HotelAndResort";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Weather from "./components/Weather";
import Blog from "./components/Blog";
import Review from "./components/Review";
import Contact from "./components/Contact";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="corporate" element={<CorporatePackage />} />
        <Route path="study" element={<StudyPackage />} />
        <Route path="single" element={<SinglePackage />} />
        <Route path="group" element={<GroupPackage />} />
        <Route path="couple" element={<CouplePackage />} />
        <Route path="popular" element={<PopularPlace />} />
        <Route path="hotelresort" element={<HotelAndResort />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="admindashboard" element={<AdminDashboard />} />
        <Route path="weather" element={<Weather />} />
        <Route path="blog" element={<Blog />} />
        <Route path="review" element={<Review />} />
        <Route path="contact" element={<Contact />} />

      </Routes>
    </Layout>
  );
}

export default App;
