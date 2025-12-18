'use client';
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <Image
          src="/images/logoph.jpg"
          alt="News Hero"
          width={1200}
          height={500}
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Latest News</h1>
          <p className="hero-subtitle">
            Stay updated with the most important headlines from around the world.
          </p>
          <button className="hero-button">Read More</button>
        </div>
      </div>
    </section>
  );
}

