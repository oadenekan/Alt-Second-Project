import React from "react";

const Contact = () => {
  return (
    <div className="content">
      <h2>My Professional And Social Media Links</h2>
      <ul className="contact-list">
        <li>
          <a href="https://github.com/oadenekan" target='_blank' rel="noreferrer" className="social-links">
            <span>Github Profile Page</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/olusola-ayeni/" target='_blank'rel="noreferrer" className="social-links">
            <span>Linkedin Profile Page</span>
          </a>
        </li>
        <li>
          <a href="https://replit.com/@OlusolaAdenekan" target='_blank' rel="noreferrer" className="social-links">
            <span>Replit Profile Page</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/preciousdamsel7" target='_blank' rel="noreferrer" className="social-links">
            <span>Twitter Profile Page</span>
          </a>
        </li>

        <li></li>
      </ul>
    </div>
  )
}
export default Contact;