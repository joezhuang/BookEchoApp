// // // import logo from "./logo.svg";
// // import "./App.css";
// // import Logo from "./components/Logo";

// // function App() {
// //   return (
// //     <div className="App">
// //       <Logo />
// //     </div>
// //   );
// // }

// // export default App;

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import IntroPage from "./components/IntroPage"; // Import your IntroPage component
// import ExplorePage from "./components/ExplorePage"; // Example for the main app page
// import AboutPage from "./components/AboutPage"; // Example for the About page

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" exact element={<IntroPage />} />
//       <Route path="/explore" element={<ExplorePage />} />
//       <Route path="/about" element={<AboutPage />} />
//     </Routes>
//   );
// };

// export default App;

import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import IntroPage from "./components/IntroPage";
import ExplorePage from "./components/ExplorePage";
import AboutPage from "./components/AboutPage";
import Logo from "./components/Logo";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={navStyle}>
        {/* <div className="logo" style={logoStyle}>
          <h2>TaskMaster</h2>
        </div> */}
        <Logo />

        {/* Hamburger Icon for Small Screens */}
        <div className="hamburger" style={hamburgerStyle} onClick={toggleMenu}>
          <div style={hamburgerLine}></div>
          <div style={hamburgerLine}></div>
          <div style={hamburgerLine}></div>
        </div>

        {/* Menu Items */}
        <ul style={isMenuOpen ? { ...ulStyle, display: "block" } : ulStyle}>
          <li style={liStyle}>
            <Link style={linkStyle} to="/">
              Home
            </Link>
          </li>
          <li style={liStyle}>
            <Link style={linkStyle} to="/explore">
              Explore
            </Link>
          </li>
          <li style={liStyle}>
            <Link style={linkStyle} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

// Styling for the navigation
const navStyle = {
  backgroundColor: "#333",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
};

const ulStyle = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  justifyContent: "space-around",
  width: "50%",
};

const liStyle = {
  display: "inline",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "8px 16px",
  fontSize: "18px",
};

// Hamburger menu styles
const hamburgerStyle = {
  display: "none", // Hide hamburger on larger screens
  flexDirection: "column",
  cursor: "pointer",
  padding: "10px",
};

const hamburgerLine = {
  width: "30px",
  height: "4px",
  backgroundColor: "white",
  margin: "5px 0",
};

export default App;
