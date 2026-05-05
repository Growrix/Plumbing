import styles from "./TrustBar.module.css";

export default function TrustBar({ data }) {
  // Duplicate items for continuous marquee effect
  const doubled = [...data.items, ...data.items];

  return (
    <div className={styles.bar} aria-label="Trust signals">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <div key={i} className={styles.item} aria-hidden={i >= data.items.length}>
            <span className={styles.icon} aria-hidden="true">{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.divider} aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}
