"use client";
import { useState } from "react";
import { bookingConfig } from "@/config/booking.config";
import { siteConfig } from "@/config/site.config";
import styles from "./BookingForm.module.css";

export default function BookingForm({ defaultType = "" }) {
  const [form, setForm] = useState({ serviceType: defaultType });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { fields, serviceOptions, urgencyOptions, timeWindows, contactMethods, page } =
    bookingConfig;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ─── Replace this with your actual form submission logic ───
    // e.g. fetch('/api/booking', { method: 'POST', body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1200)); // simulate request

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.successState}>
        <span className={styles.successIcon}>✅</span>
        <h3>Booking Request Received!</h3>
        <p>{page.successMessage}</p>
        <a href={siteConfig.contact.phoneHref} className="btn btn--primary">
          📞 {siteConfig.contact.phone}
        </a>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* Emergency notice */}
      {form.serviceType === "emergency-plumbing" && (
        <div className={styles.emergencyNotice}>
          🚨 For emergencies, please{" "}
          <a href={siteConfig.contact.phoneHref}>call us directly</a> for the
          fastest response!
        </div>
      )}

      {/* ── Name row ── */}
      <div className={styles.row}>
        {fields.firstName.show && (
          <div className="form-group">
            <label className="form-label" htmlFor="firstName">
              First Name {fields.firstName.required && <span className={styles.req}>*</span>}
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="form-input"
              required={fields.firstName.required}
              onChange={handleChange}
              placeholder="Jane"
            />
          </div>
        )}
        {fields.lastName.show && (
          <div className="form-group">
            <label className="form-label" htmlFor="lastName">
              Last Name {fields.lastName.required && <span className={styles.req}>*</span>}
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="form-input"
              required={fields.lastName.required}
              onChange={handleChange}
              placeholder="Smith"
            />
          </div>
        )}
      </div>

      {/* ── Contact row ── */}
      <div className={styles.row}>
        {fields.phone.show && (
          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Phone {fields.phone.required && <span className={styles.req}>*</span>}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="form-input"
              required={fields.phone.required}
              onChange={handleChange}
              placeholder="(555) 000-0000"
            />
          </div>
        )}
        {fields.email.show && (
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email {fields.email.required && <span className={styles.req}>*</span>}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              required={fields.email.required}
              onChange={handleChange}
              placeholder="jane@email.com"
            />
          </div>
        )}
      </div>

      {/* ── Address ── */}
      {fields.address.show && (
        <div className="form-group">
          <label className="form-label" htmlFor="address">
            Service Address {fields.address.required && <span className={styles.req}>*</span>}
          </label>
          <input
            id="address"
            name="address"
            type="text"
            className="form-input"
            required={fields.address.required}
            onChange={handleChange}
            placeholder="123 Main St, Riverside, CA"
          />
        </div>
      )}

      {/* ── Service type ── */}
      {fields.serviceType.show && (
        <div className="form-group">
          <label className="form-label" htmlFor="serviceType">
            Service Needed {fields.serviceType.required && <span className={styles.req}>*</span>}
          </label>
          <select
            id="serviceType"
            name="serviceType"
            className="form-select"
            required={fields.serviceType.required}
            value={form.serviceType}
            onChange={handleChange}
          >
            <option value="">Select a service…</option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* ── Urgency ── */}
      {fields.urgency.show && (
        <div className="form-group">
          <label className="form-label">
            Urgency {fields.urgency.required && <span className={styles.req}>*</span>}
          </label>
          <div className={styles.urgencyOptions}>
            {urgencyOptions.map((opt) => (
              <label
                key={opt.value}
                className={`${styles.urgencyOption} ${form.urgency === opt.value ? styles.urgencySelected : ""}`}
              >
                <input
                  type="radio"
                  name="urgency"
                  value={opt.value}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* ── Date + Time row ── */}
      <div className={styles.row}>
        {fields.preferredDate.show && (
          <div className="form-group">
            <label className="form-label" htmlFor="preferredDate">
              Preferred Date
            </label>
            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              className="form-input"
              onChange={handleChange}
            />
          </div>
        )}
        {fields.timeWindow.show && (
          <div className="form-group">
            <label className="form-label" htmlFor="timeWindow">
              Preferred Time
            </label>
            <select
              id="timeWindow"
              name="timeWindow"
              className="form-select"
              onChange={handleChange}
            >
              <option value="">Any time</option>
              {timeWindows.map((tw) => (
                <option key={tw.value} value={tw.value}>
                  {tw.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* ── Description ── */}
      {fields.description.show && (
        <div className="form-group">
          <label className="form-label" htmlFor="description">
            Describe the issue
          </label>
          <textarea
            id="description"
            name="description"
            className="form-textarea"
            maxLength={fields.description.maxLength}
            onChange={handleChange}
            placeholder="E.g. My kitchen drain has been slow for a week and started backing up today..."
          />
        </div>
      )}

      {/* ── Terms ── */}
      {fields.agreeToTerms.show && (
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="agreeToTerms"
            required={fields.agreeToTerms.required}
            onChange={handleChange}
          />
          <span>
            I agree to be contacted by {siteConfig.brand.name} regarding my request.
          </span>
        </label>
      )}

      {/* ── Submit ── */}
      <button
        type="submit"
        className={`btn btn--accent btn--lg ${styles.submitBtn}`}
        disabled={loading}
      >
        {loading ? "Sending…" : "Submit Booking Request"}
      </button>

      <p className={styles.callAlt}>
        Prefer to call? <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>{" "}
        — we answer 24/7.
      </p>
    </form>
  );
}
