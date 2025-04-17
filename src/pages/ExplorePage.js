// // // const ExplorePage = () => {
// // //   return (
// // //     <div>
// // //       <h1>Welcome to ExplorePage!</h1>
// // //       <p>
// // //         TaskMaster is a productivity app designed to help you manage your tasks
// // //         effectively. With our app, you can create, update, and prioritize your
// // //         tasks to stay on top of your day.
// // //       </p>
// // //     </div>
// // //   );
// // // };

// // // export default ExplorePage;

// // import React from "react";

// // const ExplorePage = () => {
// //   return (
// //     <div style={containerStyle}>
// //       <h1 style={titleStyle}>🧩 Explore BookEcho</h1>

// //       <p style={paragraphStyle}>
// //         Discover how BookEcho turns any beautiful picture book into an open,
// //         interactive learning journey for kids — built around the books you
// //         already love.
// //       </p>

// //       <h2 style={sectionTitleStyle}>📖 Book Key Highlights</h2>
// //       <p style={paragraphStyle}>
// //         Each book is transformed into a dynamic learning experience with these
// //         exciting features:
// //       </p>
// //       <ul style={listStyle}>
// //         <li>
// //           🔤 <strong>Text Extraction:</strong> Automatically extract the text
// //           from the book for reading assistance and text-to-speech functionality.
// //         </li>
// //         <li>
// //           🎧 <strong>Interactive Audio:</strong> Listen to the story and follow
// //           along with audio support.
// //         </li>
// //         <li>
// //           🖼️ <strong>Object Labeling:</strong> Parents can label objects in the
// //           book, helping children learn new words as they explore the story.
// //         </li>
// //         <li>
// //           🔄 <strong>Customizable Text:</strong> Edit the extracted text to
// //           match the book’s exact content, ensuring the perfect reading
// //           experience.
// //         </li>
// //         <li>
// //           🎨 <strong>Interactive Images:</strong> Tap on images or labels to
// //           reveal additional vocabulary and fun facts.
// //         </li>
// //       </ul>

// //       <h2 style={sectionTitleStyle}>⭐ Favorite Words</h2>
// //       <p style={paragraphStyle}>
// //         Build a personal collection of favorite words while reading. Words are
// //         neatly categorized by:
// //       </p>
// //       <ul style={listStyle}>
// //         <li>🔠 Type (Noun, Verb, Adjective...)</li>
// //         <li>🔡 Starting letter</li>
// //         <li>🔢 Word length</li>
// //       </ul>

// //       <h2 style={sectionTitleStyle}>
// //         🎨 Word Activities (for each Favorite Word)
// //       </h2>
// //       <p style={paragraphStyle}>
// //         Every favorite word unlocks a set of interactive activities:
// //       </p>
// //       <ul style={listStyle}>
// //         <li>
// //           ✏️ <strong>Word Tracing</strong>
// //         </li>
// //         <ul style={subListStyle}>
// //           <li>a. Trace over the word with it displayed in the background</li>
// //           <li>b. Write the word with a reference shown above</li>
// //           <li>c. Write the word completely from memory</li>
// //         </ul>

// //         <li>
// //           🧩 <strong>Word Game</strong>
// //         </li>
// //         <p style={paragraphStyle}>
// //           Drag the missing letters into place to complete the word
// //         </p>

// //         <li>
// //           📖 <strong>Sentence Game</strong>
// //         </li>
// //         <p style={paragraphStyle}>
// //           Complete AI-generated sentences by dragging the missing word into the
// //           correct spot — sentences are tailored to the child’s age group.
// //         </p>
// //       </ul>

// //       <p style={paragraphStyle}>
// //         The more your child reads and labels, the more words they can collect —
// //         and the more fun activities they unlock!
// //       </p>
// //     </div>
// //   );
// // };

// // // Styling
// // const containerStyle = {
// //   padding: "40px",
// //   textAlign: "center",
// //   maxWidth: "800px",
// //   margin: "0 auto",
// // };

// // const titleStyle = {
// //   fontSize: "36px",
// //   marginBottom: "20px",
// // };

// // const sectionTitleStyle = {
// //   fontSize: "28px",
// //   marginTop: "30px",
// //   marginBottom: "15px",
// // };

// // const paragraphStyle = {
// //   fontSize: "18px",
// //   lineHeight: "1.6",
// //   marginBottom: "20px",
// // };

// // const listStyle = {
// //   textAlign: "left",
// //   listStyleType: "none",
// //   paddingLeft: "0",
// //   fontSize: "18px",
// //   lineHeight: "1.8",
// // };

// // const subListStyle = {
// //   listStyleType: "disc",
// //   paddingLeft: "30px",
// //   marginBottom: "10px",
// // };

// // export default ExplorePage;

// import React from "react";

// const ExplorePage = () => {
//   return (
//     <div style={containerStyle}>
//       {/* Intro Section */}
//       <section style={introSectionStyle}>
//         <h1 style={titleStyle}>🧩 Explore BookEcho</h1>
//         <p style={introParagraphStyle}>
//           Discover how BookEcho transforms any beautiful picture book into an
//           interactive learning journey for kids — built around the books you
//           already love.
//         </p>
//       </section>

//       {/* Book Key Highlights Section */}
//       <section style={highlightSectionStyle}>
//         <h2 style={sectionTitleStyle}>📖 Book Key Highlights</h2>
//         <p style={paragraphStyle}>
//           Each book is transformed into a dynamic learning experience with these
//           exciting features:
//         </p>
//         <ul style={listStyle}>
//           <li>
//             🔤 <strong>Text Extraction:</strong> Automatically extract the text
//             from the book for reading assistance and text-to-speech
//             functionality.
//           </li>
//           <li>
//             🎧 <strong>Interactive Audio:</strong> Listen to the story and
//             follow along with audio support.
//           </li>
//           <li>
//             🖼️ <strong>Object Labeling:</strong> Parents can label objects in
//             the book, helping children learn new words as they explore the
//             story.
//           </li>
//           <li>
//             🔄 <strong>Customizable Text:</strong> Edit the extracted text to
//             match the book’s exact content, ensuring the perfect reading
//             experience.
//           </li>
//           <li>
//             🎨 <strong>Interactive Images:</strong> Tap on images or labels to
//             reveal additional vocabulary and fun facts.
//           </li>
//         </ul>
//       </section>

//       {/* Favorite Words Section */}
//       <section style={favoriteWordsSectionStyle}>
//         <h2 style={sectionTitleStyle}>⭐ Favorite Words</h2>
//         <p style={paragraphStyle}>
//           Build a personal collection of favorite words while reading. Words are
//           neatly categorized by:
//         </p>
//         <ul style={listStyle}>
//           <li>🔠 Type (Noun, Verb, Adjective...)</li>
//           <li>🔡 Starting letter</li>
//           <li>🔢 Word length</li>
//         </ul>
//       </section>

//       {/* Word Activities Section */}
//       <section style={wordActivitiesSectionStyle}>
//         <h2 style={sectionTitleStyle}>
//           🎨 Word Activities (for each Favorite Word)
//         </h2>
//         <p style={paragraphStyle}>
//           Every favorite word unlocks a set of interactive activities:
//         </p>
//         <ul style={listStyle}>
//           <li>
//             ✏️ <strong>Word Tracing</strong>
//             <ul style={subListStyle}>
//               <li>
//                 a. Trace over the word with it displayed in the background
//               </li>
//               <li>b. Write the word with a reference shown above</li>
//               <li>c. Write the word completely from memory</li>
//             </ul>
//           </li>

//           <li>
//             🧩 <strong>Word Game</strong>
//           </li>
//           <p style={paragraphStyle}>
//             Drag the missing letters into place to complete the word.
//           </p>

//           <li>
//             📖 <strong>Sentence Game</strong>
//           </li>
//           <p style={paragraphStyle}>
//             Complete AI-generated sentences by dragging the missing word into
//             the correct spot — sentences are tailored to the child’s age group.
//           </p>
//         </ul>
//       </section>

//       {/* Final Paragraph */}
//       <p style={paragraphStyle}>
//         The more your child reads and labels, the more words they can collect —
//         and the more fun activities they unlock!
//       </p>
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

// const introSectionStyle = {
//   marginBottom: "40px",
// };

// const titleStyle = {
//   fontSize: "36px",
//   marginBottom: "20px",
// };

// const introParagraphStyle = {
//   fontSize: "20px",
//   lineHeight: "1.6",
//   marginBottom: "30px",
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

// const subListStyle = {
//   listStyleType: "disc",
//   paddingLeft: "30px",
//   marginBottom: "10px",
// };

// const highlightSectionStyle = {
//   marginBottom: "40px",
// };

// const favoriteWordsSectionStyle = {
//   marginBottom: "40px",
// };

// const wordActivitiesSectionStyle = {
//   marginBottom: "40px",
// };

// export default ExplorePage;

import React from "react";

const ExplorePage = () => {
  return (
    <div style={containerStyle}>
      {/* Intro Section */}
      <section style={{ ...introSectionStyle, backgroundColor: "#f0f8ff" }}>
        <h1 style={titleStyle}>🧩 Explore BookEcho</h1>
        <p style={introParagraphStyle}>
          Discover how BookEcho transforms any beautiful picture book into an
          interactive learning journey for kids — built around the books you
          already love.
        </p>
      </section>

      {/* Book Key Highlights Section */}
      <section style={{ ...highlightSectionStyle, backgroundColor: "#e6f7ff" }}>
        <h2 style={sectionTitleStyle}>📖 Book Key Highlights</h2>
        <p style={paragraphStyle}>
          Each book is transformed into a dynamic learning experience with these
          exciting features:
        </p>
        <ul style={listStyle}>
          <li>
            🔤 <strong>Text Extraction:</strong> Automatically extract the text
            from the book for reading assistance and text-to-speech
            functionality.
          </li>
          <li>
            🎧 <strong>Interactive Audio:</strong> Listen to the story and
            follow along with audio support.
          </li>
          <li>
            🖼️ <strong>Object Labeling:</strong> Parents can label objects in
            the book, helping children learn new words as they explore the
            story.
          </li>
          <li>
            🔄 <strong>Customizable Text:</strong> Edit the extracted text to
            match the book’s exact content, ensuring the perfect reading
            experience.
          </li>
          <li>
            🎨 <strong>Interactive Images:</strong> Tap on images or labels to
            reveal additional vocabulary and fun facts.
          </li>
        </ul>
      </section>

      {/* Favorite Words Section */}
      <section
        style={{ ...favoriteWordsSectionStyle, backgroundColor: "#fff7e6" }}
      >
        <h2 style={sectionTitleStyle}>⭐ Favorite Words</h2>
        <p style={paragraphStyle}>
          Build a personal collection of favorite words while reading. Words are
          neatly categorized by:
        </p>
        <ul style={listStyle}>
          <li>🔠 Type (Noun, Verb, Adjective...)</li>
          <li>🔡 Starting letter</li>
          <li>🔢 Word length</li>
        </ul>
      </section>

      {/* Word Activities Section */}
      <section
        style={{ ...wordActivitiesSectionStyle, backgroundColor: "#eaf6e3" }}
      >
        <h2 style={sectionTitleStyle}>
          🎨 Word Activities (for each Favorite Word)
        </h2>
        <p style={paragraphStyle}>
          Every favorite word unlocks a set of interactive activities:
        </p>
        <ul style={listStyle}>
          <li>
            ✏️ <strong>Word Tracing</strong>
            <ul style={subListStyle}>
              <li>
                a. Trace over the word with it displayed in the background
              </li>
              <li>b. Write the word with a reference shown above</li>
              <li>c. Write the word completely from memory</li>
            </ul>
          </li>

          <li>
            🧩 <strong>Word Game</strong>
          </li>
          <p style={paragraphStyle}>
            Drag the missing letters into place to complete the word.
          </p>

          <li>
            📖 <strong>Sentence Game</strong>
          </li>
          <p style={paragraphStyle}>
            Complete AI-generated sentences by dragging the missing word into
            the correct spot — sentences are tailored to the child’s age group.
          </p>
        </ul>
      </section>

      {/* Final Paragraph */}
      <p style={paragraphStyle}>
        The more your child reads and labels, the more words they can collect —
        and the more fun activities they unlock!
      </p>
    </div>
  );
};

// Styling
const containerStyle = {
  padding: "40px",
  textAlign: "center",
  maxWidth: "900px",
  margin: "0 auto",
};

const introSectionStyle = {
  marginBottom: "40px",
  padding: "20px",
  borderRadius: "8px",
};

const titleStyle = {
  fontSize: "36px",
  marginBottom: "20px",
};

const introParagraphStyle = {
  fontSize: "20px",
  lineHeight: "1.6",
  marginBottom: "30px",
};

const sectionTitleStyle = {
  fontSize: "28px",
  marginTop: "30px",
  marginBottom: "15px",
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

const subListStyle = {
  listStyleType: "disc",
  paddingLeft: "30px",
  marginBottom: "10px",
};

const highlightSectionStyle = {
  marginBottom: "40px",
  padding: "20px 40px",
  borderRadius: "8px",
};

const favoriteWordsSectionStyle = {
  marginBottom: "40px",
  padding: "20px 40px",
  borderRadius: "8px",
};

const wordActivitiesSectionStyle = {
  marginBottom: "40px",
  padding: "20px 40px",
  borderRadius: "8px",
};

export default ExplorePage;
