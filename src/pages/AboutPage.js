// const AboutPage = () => {
//   return (
//     <div>
//       <h1>Welcome to AboutPage!</h1>
//       <p>
//         TaskMaster is a productivity app designed to help you manage your tasks
//         effectively. With our app, you can create, update, and prioritize your
//         tasks to stay on top of your day. Testing!!!!!
//       </p>
//     </div>
//   );
// };

// export default AboutPage;

import React from "react";

const AboutPage = () => {
  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    margin: "0",
    padding: "40px 20px",
    backgroundColor: "#f4f4f4",
    color: "#333",
    textAlign: "center", // center all text inside
  };

  const sectionStyle = {
    maxWidth: "800px",
    margin: "0 auto 40px auto", // center block & spacing
    padding: "30px 40px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    fontSize: "2.5em",
    color: "#2c3e50",
    marginBottom: "20px",
  };

  const subtitleStyle = {
    fontSize: "1.8em",
    color: "#34495e",
    marginTop: "20px",
    marginBottom: "15px",
  };

  const paragraphStyle = {
    fontSize: "1.2em",
    lineHeight: "1.8",
    color: "#555",
    margin: "0 auto",
  };

  const featureListStyle = {
    listStyleType: "none",
    padding: "0",
    margin: "20px 0",
  };

  const featureItemStyle = {
    fontSize: "1.2em",
    color: "#2ecc71",
    padding: "8px 0",
  };

  const teamMemberStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  };

  // const teamImageStyle = {
  //   width: "120px",
  //   height: "120px",
  //   borderRadius: "50%",
  //   marginBottom: "15px",
  // };

  const ctaButtonStyle = {
    backgroundColor: "#3498db",
    color: "white",
    padding: "12px 25px",
    fontSize: "1.2em",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "15px",
    transition: "background-color 0.3s",
  };

  const ctaButtonHoverStyle = {
    backgroundColor: "#2980b9",
  };

  return (
    <div style={pageStyle}>
      {/* Introduction */}
      <section style={sectionStyle}>
        <h1 style={titleStyle}>About BookEcho</h1>
        <p style={paragraphStyle}>
          BookEcho is an innovative platform designed to transform any picture
          book into an interactive learning experience. We aim to make reading
          enjoyable and educational for children by combining text extraction,
          interactive audio, object labeling, and word activities.
        </p>
      </section>

      {/* Features */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>Key Features</h2>
        <ul style={featureListStyle}>
          <li style={featureItemStyle}>
            📚 Text Extraction for seamless reading
          </li>
          <li style={featureItemStyle}>
            🎧 Interactive Audio to bring stories to life
          </li>
          <li style={featureItemStyle}>
            🖼️ Object Labeling for learning new words
          </li>
          <li style={featureItemStyle}>
            🎮 Fun and educational Word Activities
          </li>
        </ul>
      </section>

      {/* Team */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>Meet the Team</h2>
        <div style={teamMemberStyle}>
          {/* <img src="founder-image.jpg" alt="Founder" style={teamImageStyle} /> */}
          <p style={paragraphStyle}>
            Zhiqiang Zhuang is the founder of BookEcho. With a passion for
            children's education and technology, John created BookEcho to help
            kids learn through the magic of books.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>Our Story</h2>
        <p style={paragraphStyle}>
          BookEcho was born out of a desire to make reading more engaging for
          children. After struggling to find an interactive learning tool that
          could be used with physical books, we decided to create a platform
          that allows kids to immerse themselves in stories like never before.
        </p>
      </section>

      {/* Mission */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>Our Mission</h2>
        <p style={paragraphStyle}>
          Our mission is to make learning through books more interactive and
          enjoyable. By providing children with the tools they need to engage
          with stories, we hope to inspire a lifelong love for reading and
          learning.
        </p>
      </section>

      {/* Call to Action */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>Join Us in the Learning Journey!</h2>
        <p style={paragraphStyle}>
          Ready to dive into the world of interactive reading? Head over App
          Store and start your child’s journey with BookEcho!
        </p>
        <a
          href="https://apps.apple.com/au/app/bookecho/id6742765888"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...ctaButtonStyle,
            display: "inline-block",
            textDecoration: "none",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              ctaButtonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
        >
          Download BookEcho
        </a>
      </section>

      {/* Contact */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>Contact Us</h2>
        <p style={paragraphStyle}>
          Have any questions or feedback? We'd love to hear from you! Reach out
          to us at{" "}
          <a href="mailto:support@bookecho.com">joezhuang.au@gmail.com</a>.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
