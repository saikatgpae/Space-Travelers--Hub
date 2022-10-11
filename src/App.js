import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ProfilePage from './Components/ProfilePage/ProfilePage';
// import Header from './Components/header/Header';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Rockets</h1>} />
        <Route path="/missions" element={<h1>Missions</h1>} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
