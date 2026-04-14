import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import { Routes, Route } from "react-router-dom";
import Body from './body/home/Body'
import Stats from './body/stats/Stats';
import Timeline from './body/timeline/Timeline';
import ErrorPage from './component/ErrorPage';
import FriendDetails from './body/friend details/FriendDetails';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/friend/:id" element={<FriendDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App