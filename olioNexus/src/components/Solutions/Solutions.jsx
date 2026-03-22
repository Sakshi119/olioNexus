import styles from './Solutions.module.scss';
import { solutions } from '../../data/siteData';

export default function Solutions() {
  return (
    <section className={styles.solutions} id="solutions">
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.tag}>&#91;Solutions&#93;</span>
        <h2 className={styles.heading}>
          We bring <span className={styles.green}>disruption</span>, We build
          <br />
          <span className={styles.green}>dominance</span>
        </h2>
      </div>

      {/* Service Items */}
      {solutions.map((solution, i) => (
        <div
          key={solution.id}
          className={`${styles.serviceRow} ${i % 2 !== 0 ? styles.reverse : ''}`}
        >
          {/* Content side */}
          <div className={styles.serviceContent}>
            <div>
              <h3 className={styles.serviceName}>{solution.name}</h3>
              <p className={styles.serviceDesc}>{solution.description}</p>
              <div className={styles.tags}>
                {solution.tags.map((tag) => (
                  <span key={tag} className={styles.tag2}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button className={styles.learnBtn}>Learn More</button>
          </div>
          {/* Blob side */}
          <div className={styles.blobWrap}>
            {/* <div className={`${styles.blob} ${styles[`blob_${solution.blobColor}`]}`} /> */}
            <img
              src={solution.image}
              alt={`${solution.name} illustration`}
              className={styles.serviceImage}
            />
          </div>

        </div>
      ))}
    </section>
  );
}