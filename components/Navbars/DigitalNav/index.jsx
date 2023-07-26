import { useEffect, useRef } from "react";
import Link from "next/link";
import navbarScrollEffect from "@common/navbarScrollEffect";

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains("dropdown-toggle")
      ? event.target
      : event.target.querySelector(".dropdown-toggle");
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add("show");
    dropDownMenu?.classList?.add("show");
  };

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains("dropdown")
      ? event.target
      : event.target.closest(".dropdown");
    const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
    const dropDownMenu = dropdown.querySelector(".dropdown-menu");

    dropDownToggler?.classList?.remove("show");
    dropDownMenu?.classList?.remove("show");
  };

  return (
    <nav
      className='navbar navbar-expand-lg navbar-light style-1'
      ref={navbarRef}
    >
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img src='/assets/img/logo_cd.png' alt='' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link href='/'>
                <a className='nav-link'>Home</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/#about'>
                <a className='nav-link'>about</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/#services'>
                <a className='nav-link'>services</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/#portfolio'>
                <a className='nav-link'>portfolio</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/page-coming-soon-5'>
                <a className='nav-link'>blog</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/#contact'>
                <a className='nav-link'>contact</a>
              </Link>
            </li>
          </ul>
          <div className='nav-side'>
            <div className='hotline pe-4'>
              <div className='icon me-3'>
                <i className='bi bi-telephone'></i>
              </div>
              <div className='cont'>
                <small className='text-muted m-0'>hotline 24/7</small>
                <h6>(+23) 5535 68 68</h6>
              </div>
            </div>
            <div className='qoute-nav ps-4'>
              <a href='#' className='search-icon me-3'>
                <i className='bi bi-search'></i>
              </a>
              <Link href='/page-coming-soon-5'>
                <a className='btn sm-butn butn-gard border-0 text-white'>
                  <span>Free Quote</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
