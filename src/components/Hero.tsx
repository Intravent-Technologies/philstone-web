'use client';

import styles from './Hero.module.css';

interface HeroProps {
  videoSrc?: string;
  imageSrc: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function Hero({ videoSrc, imageSrc, title, subtitle, children }: HeroProps) {
  return (
    <section className={styles.hero}>
      {videoSrc ? (
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          poster={imageSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div className={styles.heroImage} style={{ backgroundImage: `url(${imageSrc})` }} />
      )}
      <div className={styles.heroOverlay} />
      <div className={styles.heroGradientBottom} />
      <div className={`container ${styles.heroContent}`}>
        {children}
        <h1 className={styles.heroTitle}>{title}</h1>
        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
