import styles from './Trusted.module.scss';
import { trustedLogos } from '../../data/siteData';

export default function Trusted() {
  return (
    <section className={styles.trusted}>
      <div className={styles.header}>
        <p className={styles.label}>Trusted by industry leaders</p>
        <div className={styles.logos}>
          {trustedLogos.map((logo) => (
            <img key={logo} className={styles.logo} src={logo} alt="Trusted Logo" />
          ))}
        </div>
      </div>
    </section>
  );
}