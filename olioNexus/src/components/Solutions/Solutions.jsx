import styles from './Solutions.module.scss';
import { solutions } from '../../data/siteData';

export default function Solutions() {
  return (
    <section className={`${styles.solutions} container-fluid`} id="solutions">

      {/* Header */}
      <div
        className={`${styles.header} row justify-content-center text-center`}
        data-aos="fade-up"
      >
        <div className="col-lg-8">
          <span className={styles.tag}>&#91;Solutions&#93;</span>
          <h2 className={styles.heading}>
            We bring <span className={styles.green}>disruption</span>, We build
            <br />
            <span className={styles.green}>dominance</span>
          </h2>
        </div>
      </div>

      {/* Service Items */}
      {solutions.map((solution, i) => (
        <div
          key={solution.id}
          className={`${styles.serviceRow} row align-items-center ${i % 2 !== 0 ? styles.reverse : ''
            }`}
        >

          {/* Content */}
          <div
            className={`${styles.serviceContent} col-lg-7 col-md-12`}
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
          >
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

          {/* Image */}
          <div
            className={`${styles.blobWrap} col-lg-5 col-md-12`}
            data-aos="zoom-in"
          >
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