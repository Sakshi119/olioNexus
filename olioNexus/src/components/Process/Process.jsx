import styles from './Process.module.scss';
import { processSteps } from '../../data/siteData';

export default function Process() {
  return (
    <section className={styles.process}>
      <div className={styles.header}>
        <span className="section-tag">&#91;Process&#93;</span>
        <h2 className={styles.heading}>
          We don&apos;t just consult.
          <br />
          <span className={styles.green}>We create. We strategize.</span>
        </h2>
      </div>

      <div className={styles.grid}>
        {processSteps.map((step) => (
          <div key={step.num} className={styles.card}>
            <img src={step.icon} alt={step.title} className={styles.iconBox} />
            <h4 className={styles.cardTitle}>{step.title}</h4>
            <p className={styles.cardDesc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}