import BookingForm from "@/components/features/BookingForm";
import { bookingConfig } from "@/config/booking.config";
import { siteConfig } from "@/config/site.config";

export const metadata = {
  title: `Book a Service — ${siteConfig.brand.name}`,
};

export default function ContactPage() {
  const { page } = bookingConfig;

  return (
    <>
      {/* Page header */}
      <section
        style={{
          background: "var(--color-primary-dark)",
          padding: "4rem 0",
          textAlign: "center",
          color: "white",
        }}
      >
        <div className="container">
          <h1 style={{ color: "white", marginBottom: "0.75rem" }}>{page.heading}</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 520, margin: "0 auto" }}>
            {page.subheading}
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 380px",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Form */}
            <div>
              {/* Emergency notice */}
              <div
                style={{
                  background: "var(--color-emergency-bg)",
                  border: "1px solid rgba(220,38,38,0.2)",
                  borderRadius: "var(--card-radius)",
                  padding: "1rem 1.25rem",
                  marginBottom: "2rem",
                  fontSize: "0.9rem",
                  color: "var(--color-emergency)",
                  fontWeight: 500,
                }}
              >
                🚨 {page.emergencyNote}
              </div>

              <BookingForm />
            </div>

            {/* Sidebar */}
            <aside>
              {/* Contact card */}
              <div
                className="card"
                style={{ padding: "1.75rem", marginBottom: "1.5rem" }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    marginBottom: "1.25rem",
                    color: "var(--color-primary-dark)",
                  }}
                >
                  Or Reach Us Directly
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="btn btn--accent"
                    style={{ justifyContent: "center" }}
                  >
                    📞 {siteConfig.contact.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="btn btn--outline"
                    style={{ justifyContent: "center" }}
                  >
                    ✉️ {siteConfig.contact.email}
                  </a>
                </div>

                <hr className="divider" />

                <h4
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                    color: "var(--color-text-primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Service Hours
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <span>{siteConfig.contact.hours.weekdays}</span>
                  <span>{siteConfig.contact.hours.weekends}</span>
                  <span style={{ color: "var(--color-emergency)", fontWeight: 600, marginTop: "0.25rem" }}>
                    🚨 {siteConfig.contact.hours.emergency}
                  </span>
                </div>
              </div>

              {/* Guarantees mini */}
              <div
                className="card"
                style={{ padding: "1.75rem" }}
              >
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    color: "var(--color-primary-dark)",
                  }}
                >
                  What to Expect
                </h3>
                {siteConfig.guarantees.slice(0, 3).map((g) => (
                  <div
                    key={g.title}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>✅</span>
                    <div>
                      <strong style={{ fontSize: "0.875rem", color: "var(--color-text-primary)" }}>
                        {g.title}
                      </strong>
                      <p style={{ fontSize: "0.8rem", marginTop: "0.15rem" }}>
                        {g.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
