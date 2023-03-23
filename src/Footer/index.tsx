import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import logo from '../images/white.png'
import './Footer.css'

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-myself">
        <div className="Footer-myself__icons">
          <div>
            <a
              href="https://alicbm.github.io/alicbarandica.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsPersonCircle />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Alicbm/e-commerce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/alic-barandica/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <a 
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTHVmfWKBjdWLbXsbXxhTtdTDpcZpkRTsXGdPwdCVcpDZGlQQDPJWjQdMQhTDcjDLXLXXV"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Contact me</button>
        </a>
      </div>
      <div className="Footer-logo">
        <a
          href="https://alicbm.github.io/alicbarandica.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="Logo" />
        </a>
        <p>All rights reserved</p>
      </div>
    </div>
  );
}