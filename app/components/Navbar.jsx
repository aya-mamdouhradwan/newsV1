'use client';
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FiAlignJustify } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Image src="/images/logo.jpg" alt="logo" width={80} height={80} />
        </div>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#popular">Our Popular News</a>
          <a href="#find">Find News</a>
          <a href="#feedback">Feedback</a>
          <a href="#subscribe">Subscribe</a>
          
        </div>

        <div className="icons">
          <CiSearch className="block md:hidden" size={28} />
          <RxDividerVertical className="block md:hidden" size={28} />
          <FiAlignJustify
            className="block md:hidden"
            size={28}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>
    </nav>
  );
}

