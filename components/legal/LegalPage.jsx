import styles from "./LegalPage.module.css";

const tokenPattern = /{{\s*brand\.([\w]+)\s*}}/g;

function replaceTokens(content, brand) {
  return content.replace(tokenPattern, (_, key) => brand[key] ?? `{{brand.${key}}}`);
}

export default function LegalPage({ data, brand }) {
  return (
    <div className={styles.shell}>
      <div className={styles.warning}>
        ⚠️ Template content. Have a licensed attorney review and update all legal pages before launching this site for a real business.
      </div>

      <header className={styles.header}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.meta}>Effective date: {data.effectiveDate}</p>
      </header>

      {data.sections.map((section) => (
        <section key={section.heading} className={styles.section}>
          <h2>{section.heading}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph}>{replaceTokens(paragraph, brand)}</p>
          ))}
        </section>
      ))}
    </div>
  );
}