import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "@/css/work/casestudy.module.css";

type Img = string | StaticImageData;

/** Static imports carry their own size; plain string paths need one */
const dims = (src: Img, w = 1600, h = 1000) =>
  typeof src === "string" ? { width: w, height: h } : {};

type MetaItem = {
  label: string;
  value?: ReactNode | string[];
  image?: Img;
  badge?: boolean;
  mono?: boolean;
};

/** Images inside the gutter lines are ~80vw wide from tablet up */
const FRAME_SIZES = "(min-width: 768px) 80vw, 100vw";

/**
 * One row of the page grid, built the same way as the homepage Chat section:
 * empty gutter cells carry the vertical lines, the row carries the horizontal one.
 */
function Row({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={styles.row}>
      <div className={styles.gutter} aria-hidden="true" />
      <div className={[styles.cell, className].filter(Boolean).join(" ")}>
        {children}
      </div>
      <div
        className={`${styles.gutter} ${styles.gutterRight}`}
        aria-hidden="true"
      />
    </div>
  );
}

/** A plain src, or { src } (the old `band` flag is accepted but no longer needed) */
type ShowcaseImage = Img | { src: Img; band?: boolean };

export type CaseStudyProps = {
  title?: string;
  heroImage?: Img;
  bannerHeadline?: ReactNode;
  liveLink?: string;
  overviewText?: ReactNode;
  metadata?: MetaItem[];
  borderedImage?: Img;
  loopImages?: Img[];
  bottomImages?: ShowcaseImage[];
};

export default function CaseStudy({
  title = "Nira",
  heroImage = "/case-hero.png",
  bannerHeadline = (
    <>
      Market-ready <span className={styles.highlight}>presence</span> +
      strategic
      <br />
      positioning{" "}
      <span className={styles.highlight}>for critical launch windows</span>
    </>
  ),
  liveLink = "#",
  overviewText = "Designed a website for Nira Energy that simplifies complex grid interconnection technology, communicates its data-driven value, and positions the platform as a trusted solution for accelerating clean energy projects.",
  metadata = [
    { label: "Client", value: "Nira", badge: true }, // or { label: "Client", image: niraLogo, badge: true }
    {
      label: "Service",
      value: ["Website Design", "Development"],
      badge: true,
      mono: true,
    },
    { label: "Year", value: "2025" },
  ],
  borderedImage = "/laptop-bench.png",
  loopImages = ["/ui-1.png", "/ui-2.png", "/ui-3.png"],
  bottomImages = [
    { src: "/hand-phone.png", band: true },
    { src: "/ipad-mesh.png", band: true },
    "/tall-screens.png",
  ],
}: CaseStudyProps) {
  return (
    <article className={styles.caseStudy}>
      {/* 1. Hero with overlapping dark banner */}
      <header className={styles.hero}>
        <Image
          src={heroImage}
          alt={`${title} website hero`}
          {...dims(heroImage, 1920, 1080)}
          sizes="100vw"
          priority
          className={styles.heroImage}
        />

        <div className={styles.banner}>
          <h1 className={styles.bannerHeadline}>{bannerHeadline}</h1>
          {liveLink && (
            <a
              href={liveLink}
              className={styles.liveLink}
              target="_blank"
              rel="noreferrer"
            >
              View live website <span aria-hidden="true">›</span>
            </a>
          )}
        </div>
      </header>

      {/* 2–5. Blue section: every image sits between the gutter lines */}
      <section className={styles.blueSection}>
        <Row className={styles.overview}>
          <div>
            <span className={styles.tagline}>Project</span>
            <h2 className={styles.overviewTitle}>Overview</h2>
            <p className={styles.overviewBody}>{overviewText}</p>
          </div>

          <dl className={styles.meta}>
            {metadata.map((item) => {
              const chipClass = [
                styles.chip,
                item.badge && styles.badge,
                item.mono && styles.mono,
              ]
                .filter(Boolean)
                .join(" ");
              const values = Array.isArray(item.value)
                ? item.value
                : [item.value];

              return (
                <div key={item.label} className={styles.metaRow}>
                  <dt className={styles.metaLabel}>{item.label}</dt>
                  <dd className={styles.metaValue}>
                    {item.image ? (
                      <span className={chipClass}>
                        <Image
                          src={item.image}
                          alt={
                            typeof item.value === "string"
                              ? item.value
                              : `${title} logo`
                          }
                          {...dims(item.image, 160, 48)}
                          className={styles.metaLogo}
                        />
                      </span>
                    ) : (
                      values.map((v, i) => (
                        <span key={i} className={chipClass}>
                          {v}
                        </span>
                      ))
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
        </Row>

        {/* 3. Featured image */}
        <Row className={styles.frame}>
          <Image
            src={borderedImage}
            alt={`${title} project showcase`}
            {...dims(borderedImage)}
            sizes={FRAME_SIZES}
            className={styles.frameImage}
          />
        </Row>

        {/* 4. UI gallery: one image per row, same frame */}
        {loopImages.length > 0 && (
          <Row className={`${styles.frame} ${styles.gallery}`}>
            {loopImages.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`${title} interface detail ${i + 1}`}
                {...dims(src)}
                sizes={FRAME_SIZES}
                className={styles.frameImage}
              />
            ))}
          </Row>
        )}

        {/* 5. Showcase images, each in its own frame */}
        {bottomImages.map((item, i) => {
          // a static import has width/height; the { src, band } wrapper doesn't
          const src =
            typeof item === "object" && !("width" in item)
              ? (item as { src: Img }).src
              : (item as Img);
          return (
            <Row key={i} className={styles.frame}>
              <Image
                src={src}
                alt={`${title} showcase ${i + 1}`}
                {...dims(src, 1920, 1080)}
                sizes={FRAME_SIZES}
                className={styles.frameImage}
              />
            </Row>
          );
        })}
      </section>
    </article>
  );
}
