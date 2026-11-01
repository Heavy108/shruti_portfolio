"use client";

import React from "react";
import styles from "@/css/staytuned.module.css";

const TeaSVG = ({
  className,
  fill = "var(--foreground)",
}: {
  className?: string;
  fill?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 155 117"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M121.627 21.9395C136.702 22.3792 146.627 32.4294 146.627 44.6781C146.627 66.0348 123.511 78.2835 105.295 62.8941"
      stroke={fill}
      strokeWidth="14.7885"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.9487 9H122.004C121.313 42.4798 97.4434 76.9646 66.6018 76.9646C35.7602 76.9646 11.7025 43.2335 10.9487 9Z"
      stroke={fill}
      strokeWidth="14.7885"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.37354 109H142.858"
      stroke={fill}
      strokeWidth="14.7885"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function StayTunedSection(): React.JSX.Element {
  return (
    <section className={styles.section}>
      {/* Left box acting as the exact margin as previous sections */}
      <div className={styles.leftBox}></div>

      {/* Middle Grid containing the content */}
      <div className={styles.middleContent}>
        {/* Inner decorative grid lines */}
        <div className={styles.gridLines}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={styles.content}>
          <h2 className={styles.heading}>
            This case study is
            <br />
            still brewing!
          </h2>
          <p className={styles.description}>
            Good stories take time, and this one is no different. I'm brewing up
            all the details, ideas, and behind-the-scenes moments to serve you
            the full story soon.
          </p>

          <TeaSVG className={styles.catIcon} />

          <p className={styles.stayTunedText}>
            Until then, let's spill some tea!
          </p>
        </div>
      </div>

      {/* Right box acting as the exact margin as previous sections */}
      <div className={styles.rightBox}></div>
    </section>
  );
}
