"use client";

import React from "react";
import Image from "next/image";
import styles from "@/css/work/feature.module.css";

// TODO: Replace with your actual laptop image path
import laptopImg from "@/assets/featured.png";
import Link from "next/link";

export default function FeaturedSection(): React.JSX.Element {
  return (
    <section className={styles.section}>
      {/* Header Row */}
      <div className={styles.headerRow}>
        <div className={styles.leftBox}></div>
        <div className={styles.headerContent}>
          {/* Inner decorative grid lines for the header */}
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
          <h2 className={styles.heading}>featured.</h2>
        </div>
        <div className={styles.rightBox}></div>
      </div>

      {/* Content Row */}
      <div className={styles.contentRow}>
        <div className={styles.leftBox}></div>

        <div className={styles.mainContent}>
          {/* Left: Image Column */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              {/* Add your laptop image src here */}
              <Image
                src={laptopImg}
                alt="Nexus website on laptop"
                fill
                className={styles.image}
                // sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: Text Column */}
          <div className={styles.textCol}>
            <div className={styles.textContent}>
              {/* New wrapper to align the title and icon side-by-side */}
              <div className={styles.titleWrapper}>
                <h3 className={styles.projectTitle}>Nexus</h3>
              </div>

              <p className={styles.projectDesc}>
                Nexus is my favourite because I genuinely enjoyed working on the
                visuals and animations. It was fun experimenting with different
                ideas, playing around with motion, and bringing the whole
                website to life.
              </p>
            </div>
            <Link href="/comming_soon">
              <div className={styles.learnMore}>
                <span>LEARN MORE</span>
                {/* <span>&gt;</span> */}
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.rightBox}></div>
      </div>
    </section>
  );
}
