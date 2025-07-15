import React from "react";

function Contact() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>
        Come Visit me on my portfolio website |{" "}
        <a
          href="https://oshris-portfolio.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-blue-500">Click here</span>
        </a>
      </h1>
    </div>
  );
}

export default Contact;
