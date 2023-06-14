import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css"
import { useState } from 'react';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		

		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const [view, setView] = useState(true);
	const [view2, setView2] = useState(true);

	return (
		<header>
			<a style={{textDecoration : 'none'}}href="/">
			<h3 className="logo" >LOGO</h3>
			</a>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/cars">Cars</a>
				<a href="/about">About</a>
				<a href="/blogs">Blog</a>
				<a href="/contact">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;