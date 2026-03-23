import styles from './Process.module.scss';
import { processSteps } from '../../data/siteData';

export default function Process() {
  return (
    <section className={styles.process}>
      <div className={styles.header} data-aos="fade-up">
        <span className="section-tag">&#91;Process&#93;</span>
        <h2 className={styles.heading}>
          We don&apos;t just consult.
          <br />
          <span className={styles.green}>We create. We strategize.</span>
        </h2>
      </div>

      <div className={styles.grid}>
        {processSteps.map((step,i) => (
          <div key={step.num} className={styles.card} data-aos="fade-up"
    data-aos-delay={i * 120}>
            <img src={step.icon} alt={step.title} className={styles.iconBox} />
            <h4 className={styles.cardTitle}>{step.title}</h4>
            <p className={styles.cardDesc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}