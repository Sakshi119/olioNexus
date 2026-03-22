import { useState } from 'react';
import styles from './Industries.module.scss';
import { industries } from '../../data/siteData';

export default function Industries() {
  const [active, setActive] = useState(6); // Banking & Finance default

  return (
    <section className={styles.industries} id="industries">
      <div className={styles.headerRow}>
        <span className="section-tag">&#91;Industries&#93;</span>
        <h2 className={styles.heading}>Industries we serve</h2>
      </div>

      <div className={styles.grid}>
        {industries.map((ind, i) => (
          <button
            key={ind.name}
            className={`${styles.card} ${active === i ? styles.active : ''}`}
            onClick={() => setActive(i)}
          >
            <img className={styles.icon} src={ind.icon} alt={ind.name} />
            <h4 className={styles.cardTitle}>{ind.name}</h4>
            <p className={styles.cardDesc}>{ind.desc}</p>
          </button>
        ))}
      </div>
    </section>
  );
}