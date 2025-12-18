import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const newsData = [
  {
    id: 1,
    image: "/images/photo15.jpg",
    date: "23 Nov, 2025",
    title: "Breaking News Around The World",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur excepturi ratione impedit debitis animi."
  },
  {
    id: 2,
    image: "/images/photo16.jpg",
    date: "23 Nov, 2025",
    title: "Technology Is Changing Media",
    description:
      "Eum explicabo minus voluptate ducimus voluptates beatae obcaecati qui ad unde."
  },
  {
    id: 3,
    image: "/images/photo17.jpg",
    date: "23 Nov, 2025",
    title: "Business Trends In 2025",
    description:
      "Vero, officia. Fugit illum iure quisquam, labore expedita corrupti earum."
  },
  {
    id: 4,
    image: "/images/photo18.jpg",
    date: "23 Nov, 2025",
    title: "Global Politics Today",
    description:
      "Nam ab dolorum vel ipsam enim, quod officiis voluptate nisi perspiciatis."
  },
  {
    id: 5,
    image: "/images/photo21.jpg",
    date: "23 Nov, 2025",
    title: "Sports Updates You Should Know",
    description:
      "Qui minima adipisci, iste libero dolore a, pariatur quam neque quos."
  },
  {
    id: 6,
    image: "/images/photo14.jpg",
    date: "23 Nov, 2025",
    title: "Health & Lifestyle Insights",
    description:
      "Ut deleniti, magnam at neque dolorem sint nobis sunt harum dolore."
  }
];

export default function Body() {
  return (
    <section className="news-section">
      <h2 className="section-title">Our Popular News</h2>

      <div className="news-grid">
        {newsData.map((news) => (
          <article key={news.id} className="news-card">
            <Image
              src={news.image}
              alt={news.title}
              width={400}
              height={250}
              className="news-image"
            />

            <span className="news-date">{news.date}</span>

            <h3 className="news-title">{news.title}</h3>

            <p className="news-description">{news.description}</p>

            <button className="read-more">
              Read More <GoArrowRight />
            </button>
          </article>
        ))}
      </div>

      <div className="more-wrapper">
        <button className="more-news">Read More News</button>
      </div>
    </section>
  );
}
