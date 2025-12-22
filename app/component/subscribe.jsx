'use client';

export default function Subscribe() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
        <p className="newsletter-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto molestiae et soluta est, voluptate pariatur debitis repudiandae deserunt ad cupiditate?
        </p>
        <p className="newsletter-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquid maiores doloremque. Provident vero excepturi optio ipsam numquam consequuntur harum.
        </p>

        <form className="newsletter-form">
          <input
            type="text"
            name="username"
            placeholder="Enter Your Name"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">Submit</button>
        </form>
      </div>
    </section>
  );
}
