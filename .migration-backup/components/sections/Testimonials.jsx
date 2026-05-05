import styles from "./Testimonials.module.css";

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className={styles.card} aria-label={`Review by ${item.name}`}>
      <div className={styles.cardTop}>
        <div className={styles.avatar} aria-hidden="true">
          {item.initials}
        </div>
        <div>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.location}>{item.location}</div>
        </div>
        <div className={styles.platformBadge}>{item.platform}</div>
      </div>

      <Stars count={item.rating} />

      <blockquote className={styles.text}>
        <p>&ldquo;{item.text}&rdquo;</p>
      </blockquote>

      <div className={styles.meta}>
        <span className={styles.service}>{item.service}</span>
        <span className={styles.date}>{item.date}</span>
      </div>
    </article>
  );
}

export default function Testimonials({ data }) {
  return (
    <section className="section section--surface" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="testimonials-heading">{data.headline}</h2>
          <p>{data.subheadline}</p>
        </div>

        <div className={styles.grid}>
          {data.items.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        {/* Aggregate rating */}
        <div className={styles.aggregate}>
          <Stars count={5} />
          <span className={styles.aggregateText}>
            4.9 average across Google, Yelp, and HomeAdvisor
          </span>
        </div>
      </div>
    </section>
  );
}
