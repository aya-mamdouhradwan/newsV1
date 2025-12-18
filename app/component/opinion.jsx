'use client';
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Opinion() {
  return (
    <section className="opinion-section">
      <div className="opinion-header">
        <Image
          src="/images/logoph.jpg"
          alt="Feedback Banner"
          width={1200}
          height={300}
          className="opinion-banner"
        />
        <h2 className="opinion-title">Watchers Feedback</h2>
      </div>

      <div className="opinion-card">
        <div className="opinion-avatar">
          <img
            src="https://i.pravatar.cc/150?img=1"
            alt="User Avatar"
            width={70}
            height={70}
            className="avatar-img"
          />
          <div className="user-info">
            <h3>Washing Sunder</h3>
            <p>Watcher of News</p>
          </div>
        </div>

        <p className="opinion-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Ut accusamus quisquam aspernatur libero voluptas! Deleniti facere dolores
          pariatur culpa laborum.
        </p>

        <div className="opinion-stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star-icon" />
          ))}
        </div>
      </div>
    </section>
  );
}

