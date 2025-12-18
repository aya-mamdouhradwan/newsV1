import Image from "next/image";
import { FaFacebook, FaFacebookMessenger, FaTwitterSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-links">
        <div className="footer-logo">
          <Image
            src="/images/logo.jpg"
            alt="footer-logo"
            width={120}
            height={40}
            className="logo-img"
          />
        </div>

        <div className="footer-column">
          <h3>Home</h3>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our Process</a>
          <a href="#">Services</a>
        </div>

        <div className="footer-column">
          <h3>Community</h3>
          <a href="#">Team Plans</a>
          <a href="#">Refer a Friend</a>
          <a href="#">Get Cards</a>
        </div>

        <div className="footer-column">
          <h3>Stay Connected</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaFacebookMessenger /></a>
            <a href="#"><FaTwitterSquare /></a>
            <a href="#"><IoLogoWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
