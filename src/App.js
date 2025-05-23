// // // // import logo from "./logo.svg";
// // // import "./App.css";
// // // import Logo from "./components/Logo";

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <Logo />
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // import React from "react";
// // import { Route, Routes } from "react-router-dom";
// // import IntroPage from "./components/IntroPage"; // Import your IntroPage component
// // import ExplorePage from "./components/ExplorePage"; // Example for the main app page
// // import AboutPage from "./components/AboutPage"; // Example for the About page

// // const App = () => {
// //   return (
// //     <Routes>
// //       <Route path="/" exact element={<IntroPage />} />
// //       <Route path="/explore" element={<ExplorePage />} />
// //       <Route path="/about" element={<AboutPage />} />
// //     </Routes>
// //   );
// // };

// // export default App;

// import React, { useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import IntroPage from "./components/IntroPage";
// import ExplorePage from "./components/ExplorePage";
// import AboutPage from "./components/AboutPage";
// import Logo from "./components/Logo";

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the menu visibility

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
//   };

//   return (
//     <div>
//       {/* Navigation Bar */}
//       <nav style={navStyle}>
//         {/* <div className="logo" style={logoStyle}>
//           <h2>TaskMaster</h2>
//         </div> */}
//         <Logo />

//         {/* Hamburger Icon for Small Screens */}
//         <div className="hamburger" style={hamburgerStyle} onClick={toggleMenu}>
//           <div style={hamburgerLine}></div>
//           <div style={hamburgerLine}></div>
//           <div style={hamburgerLine}></div>
//         </div>

//         {/* Menu Items */}
//         <ul style={isMenuOpen ? { ...ulStyle, display: "block" } : ulStyle}>
//           <li style={liStyle}>
//             <Link style={linkStyle} to="/">
//               Home
//             </Link>
//           </li>
//           <li style={liStyle}>
//             <Link style={linkStyle} to="/explore">
//               Explore
//             </Link>
//           </li>
//           <li style={liStyle}>
//             <Link style={linkStyle} to="/about">
//               About
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Page Routes */}
//       <Routes>
//         <Route path="/" element={<IntroPage />} />
//         <Route path="/explore" element={<ExplorePage />} />
//         <Route path="/about" element={<AboutPage />} />
//       </Routes>
//     </div>
//   );
// };

// // Styling for the navigation
// const navStyle = {
//   backgroundColor: "#333",
//   padding: "10px",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   flexWrap: "wrap",
// };

// const ulStyle = {
//   listStyleType: "none",
//   padding: 0,
//   margin: 0,
//   display: "flex",
//   justifyContent: "space-around",
//   width: "50%",
// };

// const liStyle = {
//   display: "inline",
// };

// const linkStyle = {
//   color: "white",
//   textDecoration: "none",
//   padding: "8px 16px",
//   fontSize: "18px",
// };

// // Hamburger menu styles
// const hamburgerStyle = {
//   display: "none", // Hide hamburger on larger screens
//   flexDirection: "column",
//   cursor: "pointer",
//   padding: "10px",
//   borderWidth: "1",
// };

// const hamburgerLine = {
//   width: "30px",
//   height: "4px",
//   backgroundColor: "white",
//   margin: "5px 0",
// };

// export default App;

import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import ExplorePage from "./pages/ExplorePage";
import AboutPage from "./pages/AboutPage";
import BlogListPage from "./pages/BlogListPage";
import BlogEditorPage from "./pages/BlogEditorPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import PolicyScreen from "./pages/PolicyScreen";
import Logo from "./components/Logo";
import "./App.css"; // 👈 import the new CSS

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={layoutStyle}>
      {/* Navigation Bar */}
      <nav>
        <div className="logo">
          <Logo />
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/explore" onClick={() => setIsMenuOpen(false)}>
              Explore
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          {/* <li>
            <a href="/admin" onClick={() => setIsMenuOpen(false)}>
              Admin
            </a>
          </li> */}
        </ul>
      </nav>

      {/* Page Routes */}
      <main style={mainStyle}>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/blogs" element={<BlogListPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailPage />} />
          {/* Keep only one route for blog details */}
          <Route path="/editor" element={<BlogEditorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/policy" element={<PolicyScreen />} />
        </Routes>
      </main>

      {/* Footer Section */}
      <footer style={footerStyle}>
        <p>BookEcho 2025 &copy; All Rights Reserved</p>
        <Link
          to="/policy"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
};

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const mainStyle = {
  flex: 1,
  padding: "30px",
};

const footerStyle = {
  backgroundColor: "#333",
  color: "white",
  padding: "20px",
  textAlign: "center", // Ensures the footer text is centered horizontally
  width: "100%", // Ensures it spans the full width
};

export default App;
