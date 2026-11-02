"use client";
import React, { useState } from "react";
import styles from "@/css/contact/contactform.module.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact(): React.JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.gutterLeft}></div>

      <div className={styles.contentLeft}>
        <h2 className={styles.heading}>say hello.</h2>

        <div className={styles.contactLinks}>
          <a href="mailto:aryashruti21@gmail.com" className={styles.emailLink}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            aryashruti21@gmail.com
          </a>

          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/aryashruti21/"
              className={styles.socialItem}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              INSTAGRAM
            </a>
            <a
              href="https://www.behance.net/Shruti21_2022"
              className={styles.socialItem}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M22 13.916c0 3.237-2.073 6.012-5.753 6.012-3.791 0-5.83-2.654-5.83-5.962 0-3.563 2.228-6.177 5.926-6.177 3.541 0 5.617 2.453 5.617 5.618 0 .285-.027.698-.073.955h-8.847c.108 1.624 1.258 2.654 2.946 2.654 1.173 0 2.148-.52 2.585-1.554h2.476c-.633 2.247-2.735 3.328-5.061 3.328-3.914 0-5.46-2.581-5.46-5.498 0-3.327 1.956-6.079 5.86-6.079 3.633 0 5.56 2.379 5.619 5.62v.083zM18.17 11.83h5.698c-.147-1.748-1.258-2.586-2.793-2.586-1.597 0-2.637.892-2.905 2.586zM8.134 10.36H4.256v3.236h4.111c1.557 0 2.766-.543 2.766-1.636 0-1.127-.92-1.6-2.999-1.6zm.307-3.978H4.256v2.855h3.987c1.381 0 2.392-.375 2.392-1.428 0-1.11-.859-1.427-2.194-1.427zm6.273 6.551c0 2.825-2.073 4.417-5.112 4.417H0V4.08h9.324c2.624 0 4.543 1.29 4.543 3.633 0 1.492-.936 2.586-2.316 3.12 1.61.428 2.887 1.541 2.887 3.238" />
                <path d="M14.908 6.945h3.945v1.272h-3.945V6.945z" />
              </svg>
              BEHANCE
            </a>
            <a
              href="https://www.linkedin.com/in/shruti-arya-78b25a1b3/"
              className={styles.socialItem}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LINKEDIN
            </a>
          </div>
        </div>
      </div>

      <div className={styles.contentRight}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRowSplit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">NAME *</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={status === "loading"}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">EMAIL *</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={status === "loading"}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone">PHONE *</label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              disabled={status === "loading"}
            />
          </div>

          <div className={`${styles.inputGroup} ${styles.messageGroup}`}>
            <label htmlFor="message">MESSAGE *</label>
            <textarea
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              disabled={status === "loading"}
            ></textarea>
          </div>

          <div className={styles.submitWrapper}>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === "loading" || status === "success"}
            >
              <span className={styles.rollText}>
                <span>
                  {status === "loading"
                    ? "SENDING..."
                    : status === "success"
                      ? "SENT SUCCESSFULLY"
                      : "SUBMIT"}
                </span>
                <span aria-hidden="true">
                  {status === "loading"
                    ? "SENDING..."
                    : status === "success"
                      ? "SENT SUCCESSFULLY"
                      : "SUBMIT"}
                </span>
              </span>
            </button>

            {status === "error" && (
              <span
                style={{
                  color: "red",
                  fontSize: "0.75rem",
                  marginLeft: "1rem",
                  fontWeight: "600",
                }}
              >
                Something went wrong. Please try again.
              </span>
            )}
          </div>
        </form>
      </div>

      <div className={styles.gutterRight}></div>
    </section>
  );
}
