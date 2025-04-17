// import React from "react";
// import { Link } from "react-router-dom";

// const IntroPage = () => {
//   return (
//     <div style={containerStyle}>
//       <h1 style={titleStyle}>📚✨ Welcome to BookEcho!</h1>

//       <p style={paragraphStyle}>
//         BookEcho transforms classic picture books into interactive, fun learning
//         adventures. Instead of sticking to pre-made apps or courses, parents can
//         turn any beautiful book or image into a creative, open-ended learning
//         journey for their children.
//       </p>

//       <h2 style={sectionTitleStyle}>🌟 Key Highlights:</h2>
//       <ul style={listStyle}>
//         <li>📖 Import PDFs, images, or scan paper books</li>
//         <li>📝 Auto-extract text with editable text-to-speech</li>
//         <li>🏷️ Label objects so kids can tap and learn new words</li>
//         <li>🔍 Query word meanings via a private, secure backend</li>
//         <li>🎨 Personalize every story experience, guided by parents</li>
//       </ul>

//       <p style={paragraphStyle}>
//         BookEcho gives parents the freedom to make any classic book better —
//         turning reading time into a rich, interactive vocabulary adventure.
//       </p>

//       <Link to="/explore" style={buttonStyle}>
//         🚀 Start Exploring
//       </Link>

//       {/* Why BookEcho vs Traditional Books Section */}
//       <section style={sectionStyle}>
//         <h2 style={subTitleStyle}>Why BookEcho vs Traditional Books</h2>
//         <p style={descriptionStyle}>
//           BookEcho isn’t just another e-reader. It’s a unique, interactive
//           platform that enhances your child’s learning experience with
//           personalized features. Here’s how BookEcho stands out:
//         </p>
//         <div style={comparisonTableStyle}>
//           <table style={tableStyle}>
//             <thead>
//               <tr>
//                 <th>Feature</th>
//                 <th>Traditional Books</th>
//                 <th>e-Readers</th>
//                 <th>BookEcho</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Interactive Learning</td>
//                 <td>❌</td>
//                 <td>❌</td>
//                 <td>✅</td>
//               </tr>
//               <tr>
//                 <td>Customizable Activities</td>
//                 <td>❌</td>
//                 <td>❌</td>
//                 <td>✅</td>
//               </tr>
//               <tr>
//                 <td>AI-Generated Content</td>
//                 <td>❌</td>
//                 <td>❌</td>
//                 <td>✅</td>
//               </tr>
//               <tr>
//                 <td>Personalized Learning</td>
//                 <td>❌</td>
//                 <td>❌</td>
//                 <td>✅</td>
//               </tr>
//               <tr>
//                 <td>Parent Involvement</td>
//                 <td>❌</td>
//                 <td>❌</td>
//                 <td>✅</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* Footer Section */}
//       {/* <footer style={footerStyle}>
//         <p>BookEcho 2025 &copy; All Rights Reserved</p>
//       </footer> */}
//     </div>
//   );
// };

// // Styling
// const containerStyle = {
//   padding: "40px",
//   textAlign: "center",
//   maxWidth: "800px",
//   margin: "0 auto",
// };

// const titleStyle = {
//   fontSize: "36px",
//   marginBottom: "20px",
// };

// const sectionTitleStyle = {
//   fontSize: "28px",
//   marginTop: "30px",
//   marginBottom: "15px",
// };

// const paragraphStyle = {
//   fontSize: "18px",
//   lineHeight: "1.6",
//   marginBottom: "20px",
// };

// const listStyle = {
//   textAlign: "left",
//   listStyleType: "none",
//   paddingLeft: "0",
//   fontSize: "18px",
//   lineHeight: "1.8",
// };

// const buttonStyle = {
//   display: "inline-block",
//   padding: "12px 24px",
//   backgroundColor: "#007BFF",
//   color: "#fff",
//   borderRadius: "6px",
//   textDecoration: "none",
//   marginTop: "30px",
//   fontSize: "18px",
// };
// const sectionStyle = {
//   marginBottom: "40px",
// };
// const subTitleStyle = {
//   fontSize: "28px",
//   fontWeight: "600",
//   color: "#444",
//   marginTop: "20px",
// };
// const descriptionStyle = {
//   fontSize: "18px",
//   color: "#555",
//   lineHeight: "1.6",
//   marginTop: "10px",
// };
// const comparisonTableStyle = {
//   marginTop: "30px",
//   width: "80%",
//   marginLeft: "auto",
//   marginRight: "auto",
// };
// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse",
//   margin: "0 auto",
// };
// const footerStyle = {
//   backgroundColor: "#333",
//   color: "white",
//   padding: "20px",
//   position: "absolute",
//   bottom: "0",
//   width: "100%",
// };
// export default IntroPage;

import React from "react";
import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <div style={containerStyle}>
      {/* Introduction Section */}
      <div style={introSectionStyle}>
        <h1 style={titleStyle}>📚✨ Welcome to BookEcho!</h1>
        <p style={paragraphStyle}>
          BookEcho transforms classic picture books into interactive, fun
          learning adventures. Instead of sticking to pre-made apps or courses,
          parents can turn any beautiful book or image into a creative,
          open-ended learning journey for their children.
        </p>
      </div>

      {/* Key Highlights Section */}
      <div style={highlightSectionStyle}>
        <h2 style={sectionTitleStyle}>🌟 Key Highlights:</h2>
        <ul style={listStyle}>
          <li>📖 Import PDFs, images, or scan paper books</li>
          <li>📝 Auto-extract text with editable text-to-speech</li>
          <li>🏷️ Label objects so kids can tap and learn new words</li>
          <li>🔍 Query word meanings via a private, secure backend</li>
          <li>🎨 Personalize every story experience, guided by parents</li>
        </ul>
        <p style={paragraphStyle}>
          BookEcho gives parents the freedom to make any classic book better —
          turning reading time into a rich, interactive vocabulary adventure.
        </p>
      </div>

      {/* "Why BookEcho vs Traditional Books" Section */}
      <section style={comparisonSectionStyle}>
        <h2 style={subTitleStyle}>Why BookEcho vs Traditional Books</h2>
        <p style={descriptionStyle}>
          BookEcho isn’t just another e-reader. It’s a unique, interactive
          platform that enhances your child’s learning experience with
          personalized features. Here’s how BookEcho stands out:
        </p>
        <div style={comparisonTableStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Traditional Books</th>
                <th>e-Readers</th>
                <th>BookEcho</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Interactive Learning</td>
                <td>❌</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Customizable Activities</td>
                <td>❌</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>AI-Generated Content</td>
                <td>❌</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Personalized Learning</td>
                <td>❌</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Parent Involvement</td>
                <td>❌</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* "Get Started" Button Section */}
      <Link to="/explore" style={buttonStyle}>
        🚀 Start Exploring
      </Link>

      {/* Footer Section */}
      {/* <footer style={footerStyle}>
        <p>BookEcho 2025 &copy; All Rights Reserved</p>
      </footer> */}
    </div>
  );
};

// Styling
const containerStyle = {
  padding: "40px",
  textAlign: "center",
  maxWidth: "900px",
  margin: "0 auto",
  minHeight: "100vh", // Make the container take at least the full height of the viewport
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const introSectionStyle = {
  backgroundColor: "#f1f1f1", // Light background for the intro section
  padding: "40px",
  borderRadius: "8px",
  marginBottom: "40px",
};

const titleStyle = {
  fontSize: "36px",
  marginBottom: "20px",
};

const sectionTitleStyle = {
  fontSize: "28px",
  marginTop: "30px",
  marginBottom: "15px",
};

const highlightSectionStyle = {
  backgroundColor: "#eef7ff", // Soft blue background for highlights
  padding: "40px",
  borderRadius: "8px",
  marginBottom: "40px",
};

const paragraphStyle = {
  fontSize: "18px",
  lineHeight: "1.6",
  marginBottom: "20px",
};

const listStyle = {
  textAlign: "left",
  listStyleType: "none",
  paddingLeft: "0",
  fontSize: "18px",
  lineHeight: "1.8",
};

// const buttonStyle = {
//   display: "inline-block",
//   padding: "12px 24px",
//   backgroundColor: "#007BFF",
//   color: "#fff",
//   borderRadius: "6px",
//   textDecoration: "none",
//   marginTop: "30px",
//   marginBottom: "30px",
//   fontSize: "18px",
// };

const buttonStyle = {
  display: "inline-block",
  padding: "12px 24px",
  backgroundColor: "#007BFF",
  color: "#fff",
  borderRadius: "6px",
  textDecoration: "none",
  marginTop: "30px",
  marginBottom: "50px",
  fontSize: "18px",
  width: "auto", // This makes sure the button width is only as wide as its content
  maxWidth: "300px", // Optional, to limit the width if you'd like to add a max limit
  marginLeft: "auto", // Centers the button horizontally
  marginRight: "auto", // Centers the button horizontally
};

const comparisonSectionStyle = {
  marginBottom: "40px",
  padding: "40px",
  backgroundColor: "#f9f9f9", // Light grey for comparison section
  borderRadius: "8px",
};

const subTitleStyle = {
  fontSize: "28px",
  fontWeight: "600",
  color: "#444",
  marginTop: "20px",
};

const descriptionStyle = {
  fontSize: "18px",
  color: "#555",
  lineHeight: "1.6",
  marginTop: "10px",
};

const comparisonTableStyle = {
  marginTop: "30px",
  width: "80%",
  marginLeft: "auto",
  marginRight: "auto",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  margin: "0 auto",
};

export default IntroPage;
