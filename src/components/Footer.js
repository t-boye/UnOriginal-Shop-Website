import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <section>
            <footer className="text-center text-white" style={{ backgroundColor: "#941ed9" }}>
  <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
    <ul className="list-unstyled d-flex justify-content-center mt-3">
      <li className="me-3">
        <a className="text-light" href="https://www.facebook.com/unoriginal-shop">
          <i className="fa fa-facebook-f fa-lg"></i>
        </a>
      </li>
      <li className="me-3">
        <a className="text-light" href="https://www.twitter.com/unoriginal-shop">
          <i className="fa fa-twitter fa-lg"></i>
        </a>
      </li>
      <li className="me-3">
        <a className="text-light" href="https://www.instagram.com/unoriginal-shop">
          <i className="fa fa-instagram fa-lg"></i>
        </a>
      </li>
    </ul>
    <p className="m-0">
      © 2023 Copyright&nbsp;
      <NavLink className="text-light text-decoration-none" to="/">
        UnOriginal-Shop
      </NavLink>
    </p>
  </div>
</footer>

            </section>
        </div>
    )
}

export default Footer;
