"use client";

import React from "react";
import Image from "next/image";
import styles from "@/css/work/workhero.module.css";

// Replace with your actual iPad drawing image path
import worksImg from "@/assets/workhero.png";

export default function WorksSection(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.textContent}>
        <h2 className={styles.heading}>works.</h2>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={worksImg}
          alt="Digital drawing on an iPad"
          width={1260}
          height={800}
         
          className={styles.image}
          
        />
      </div>
    </section>
  ); 
}
