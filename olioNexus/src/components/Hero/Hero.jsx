import { useEffect, useRef } from 'react';
import styles from './Hero.module.scss';
import heroImg from '../../assets/images/heroimg.png';

export default function Hero() {
  const contentRef = useRef(null);
  const imageRef   = useRef(null);

  useEffect(() => {
    // [ANIM] staggered reveal on mount using IntersectionObserver
    const els = contentRef.current?.querySelectorAll('[data-anim]');
    if (!els) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero}>
      <div className="container-fluid">
        <div className="row align-items-center">

          {/* Left — content */}
          <div className="col-lg-7 col-xl-6">
            <div className={styles.content} ref={contentRef}>

              {/* [ANIM] tag line fades up first */}
              <p className={`${styles.tagline} ${styles.fadeUp}`} data-anim style={{ '--delay': '0s' }}>
                <span className={styles.taglineDot} />
                AI · Strategy · Technology
              </p>

              {/* [ANIM] heading fades up second */}
              <h1
                className={`${styles.heading} ${styles.fadeUp}`}
                data-anim
                style={{ '--delay': '0.12s' }}
              >
                We{' '}
                <span className={styles.underline}>bridge the gap</span>{' '}
                between what&apos;s possible and what&apos;s practical.
              </h1>

              {/* [ANIM] subtext fades up third */}
              <p
                className={`${styles.subtext} ${styles.fadeUp}`}
                data-anim
                style={{ '--delay': '0.24s' }}
              >
                Technology, data and uniquely human potential — one cornerstone is
                relevant to the intersection of what and how you do.
              </p>

              {/* [ANIM] buttons fade up last */}
              <div
                className={`${styles.btnRow} ${styles.fadeUp}`}
                data-anim
                style={{ '--delay': '0.36s' }}
              >
                <a href="#contact" className="btn-green">
                  Start a Conversation
                </a>
                <a href="#solutions" className="btn-outline-dark">
                  See Our Work
                </a>
              </div>

            </div>
          </div>

          {/* Right — image */}
          <div className="col-lg-5 col-xl-6">
            {/* [ANIM] image fades in from right */}
            <div
              ref={imageRef}
              className={`${styles.imageWrap} ${styles.fadeRight}`}
              data-anim
              style={{ '--delay': '0.18s' }}
            >
              <img
                src={heroImg}
                alt="Olio Nexus Hero"
                className={styles.heroImage}
              />
              {/* [ANIM] floating accent dot */}
              <div className={styles.accentDot} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
