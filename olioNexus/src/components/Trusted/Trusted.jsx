import styles from './Trusted.module.scss';
import { trustedLogos } from '../../data/siteData';

export default function Trusted() {
  // duplicate for seamless loop
  const doubled = [...trustedLogos, ...trustedLogos];

  return (
    <section className={styles.trusted}>
      <p className={styles.label}>Trusted by industry leaders</p>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {doubled.map((logo, i) => (
            <div key={i} className={styles.logoWrap}>
              <img src={logo} alt="Trusted Logo" className={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}