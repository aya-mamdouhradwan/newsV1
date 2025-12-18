import Image from "next/image";

export default function Find() {
  return (
    <section className="find-news-section">
      <div className="find-content">
        <h2 className="find-title">Find Your News With Us</h2>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolorem eum eaque maxime cumque impedit doloribus soluta sapiente,
          molestiae nam perferendis minus consectetur inventore facere, dolores porro laboriosam itaque eligendi.
        </p>

        <p className="find-extra">
          Dolorum praesentium autem ipsum hic magni sunt illo optio expedita?
        </p>

        <button className="find-button">Get Now</button>
      </div>

      <div className="find-image">
        <Image
          src="/images/logo.jpg"
          alt="find-news"
          width={200}
          height={200}
          className="rounded-image"
        />
      </div>
    </section>
  );
}
