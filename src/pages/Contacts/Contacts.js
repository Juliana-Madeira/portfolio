import React from "react";
import ReactWhatsapp from "react-whatsapp";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";

import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contact">
      <p className="title">Contato</p>
      <div className="contact_midias">
        <a
          href="https://github.com/Juliana-Madeira"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <p>
            <FaGithub size={35} />
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/juliana-g-madeira/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
          <p>
            <FaLinkedin size={35} />
          </p>
        </a>
        <a
          href="https://docs.google.com/document/d/1MhHxBV6euy7FQXUJb1OETh7dJXf7TiNg4s4k5ZcEtQY/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Currículo
          <p>
            <FaDev size={35} />
          </p>
        </a>
        <div className="contact_midias_p">
          <p className="contact_midias_p_text">Whatsapp</p>
          <p
            style={{
              backgroundColor: "var(--mediumText)",
              color: "var(--mediumText)",
              width: 35,
              textAlign: "center",
            }}
          >
            <ReactWhatsapp
              number="55-11987292905"
              message="Olá!"
              style={{
                width: 35,
                height: 35,
                background: "transparent",
                border: "none",
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
