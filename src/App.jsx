import "./App.css";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CorporatePackage from "./components/CorporatePackage";
import StudyPackage from "./components/StudyPackage";
import SinglePackage from "./components/SinglePackage";
import GroupPackage from "./components/GroupPackage";
import CouplePackage from "./components/CouplePackage";
import PopularPlace from "./components/PopularPlace";
import HotelAndResort from "./components/HotelAndResort";
import Chat from "./components/Chat";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/package" element={<Package />} /> */}
          <Route path="corporate" element={<CorporatePackage />} />
          <Route path="study" element={<StudyPackage />} />
          <Route path="single" element={<SinglePackage />} />
          <Route path="group" element={<GroupPackage />} />
          <Route path="couple" element={<CouplePackage />} />
          <Route path="popular" element={<PopularPlace />} />
          <Route path="hotelresort" element={<HotelAndResort />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
