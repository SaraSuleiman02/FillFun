import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo_white.png";

function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDeepDropdownOpen, setDeepDropdownOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);
    const [isMobileNavActive, setMobileNavActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isScrolled]);

    const toggleMobileNav = () => {
        setMobileNavActive((prevState) => !prevState);
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen((prevState) => !prevState);
    };

    const toggleDeepDropdown = (e) => {
        e.preventDefault();
        setDeepDropdownOpen((prevState) => !prevState);
    };

    return (
        <>

            <header
                id="header" style={isScrolled ? {
                    backgroundColor: '#10058c'
                } : {

                    backgroundColor: 'transparent'
                }}


                className={`header  d-flex align-items-center fixed-top ${isScrolled ? 'scrolled' : ''}`}
            >
                <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <img src={Logo} alt="Logo" />
                    </a>

                    <nav id="navmenu" className={`navmenu ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
                        <ul>
                            <li>
                                <a href="#hero" className="active">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#features">Features</a>
                            </li>
                            <li>
                                <a href="#gallery">Gallery</a>
                            </li>
                            <li>
                                <a href="#team">Team</a>
                            </li>
                            <li>
                                <a href="#pricing">Pricing</a>
                            </li>
                            {/* Dropdown */}
                            <li className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
                                <a href="#" onClick={toggleDropdown}>
                                    <span>Dropdown</span>
                                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                                </a>
                                <ul className={isDropdownOpen ? "show" : ""}>
                                    <li><a href="#">Dropdown 1</a></li>
                                    {/* Deep Dropdown */}
                                    <li className={`dropdown ${isDeepDropdownOpen ? "show" : ""}`}>
                                        <a href="#" onClick={toggleDeepDropdown}>
                                            <span>Deep Dropdown</span>
                                            <i className="bi bi-chevron-down toggle-dropdown"></i>
                                        </a>
                                        <ul className={isDeepDropdownOpen ? "show" : ""}>
                                            <li><a href="#">Deep Dropdown 1</a></li>
                                            <li><a href="#">Deep Dropdown 2</a></li>
                                            <li><a href="#">Deep Dropdown 3</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dropdown 2</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        {/* Mobile Navigation Toggle */}
                        <button className="mobile-nav-toggle d-xl-none" onClick={toggleMobileNav}>
                            <i className={`bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}></i>
                        </button>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;