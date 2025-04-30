import React from "react";

const containerStyle = {
  maxWidth: 700,
  margin: "40px auto",
  padding: 24,
  background: "#fff",
  borderRadius: 8,
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const titleStyle = {
  fontSize: 28,
  fontWeight: "bold",
  marginBottom: 8,
  textAlign: "center",
};

const dateStyle = {
  fontSize: 14,
  color: "#666",
  marginBottom: 20,
  textAlign: "center",
};

const headingStyle = {
  fontSize: 20,
  fontWeight: "bold",
  marginTop: 24,
  marginBottom: 8,
};

const textStyle = {
  fontSize: 16,
  color: "#333",
  marginBottom: 12,
  lineHeight: 1.6,
};

const PolicyScreen = () => (
  <div style={containerStyle}>
    <div style={titleStyle}>Privacy Policy for BookEcho</div>
    <div style={dateStyle}>Effective Date: Feb 16, 2025</div>

    <div style={headingStyle}>1. Information We Collect</div>
    <div style={textStyle}>
      <strong>We collect:</strong>
      <ul>
        <li>
          Only words that are queried by users (words are sent to the backend
          service that is hosted on a private server, but they are not saved on
          the server)
        </li>
      </ul>
      <strong>We don’t collect:</strong>
      <ul>
        <li>
          User-provided content (scanned books, extracted text, labeled objects
          are all stayed on the user’s local device).
        </li>
      </ul>
    </div>

    <div style={headingStyle}>2. How We Use Your Information</div>
    <div style={textStyle}>
      <ul>
        <li>To provide dictionary-like functionality to our young users.</li>
        <li>To improve app features and maintain security.</li>
      </ul>
    </div>

    <div style={headingStyle}>3. Data Security</div>
    <div style={textStyle}>
      We don’t store words that are queried by users and do not sell personal
      data to third parties.
      <br />
      Words sent over the network are currently unencrypted. We will improve it
      at the next release.
    </div>

    <div style={headingStyle}>4. Children’s Privacy</div>
    <div style={textStyle}>
      This app is designed for parental supervision. No child personal data is
      collected.
    </div>

    <div style={headingStyle}>5. Contact Us</div>
    <div style={textStyle}>
      If you have questions, contact us at{" "}
      <a href="mailto:joezhuang.au@gmail.com">joezhuang.au@gmail.com</a>.
    </div>
  </div>
);

export default PolicyScreen;
