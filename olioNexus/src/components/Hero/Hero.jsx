import styles from './Hero.module.scss';
import heroImg from '../../assets/images/heroimg.png' // Ensure you have an image at this path
export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Decorative blobs */}
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-7 col-xl-6">
            <div className={styles.content}>
              <h1 className={styles.heading}>
                We <span className={styles.underline}>bridge the gap</span> between
                what&apos;s possible and what&apos;s practical.
              </h1>

              <p className={styles.subtext}>
                Technology, data and uniquely human potential — one cornerstone is
                relevant to the intersection of what and how you do.
              </p>

              <div className={styles.btnRow}>
                <a href="#contact" className="btn-green">
                  Start a Conversation →
                </a>
                <a href="#solutions" className="btn-outline-dark">
                  See Our Work
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xl-6">
            <img src={heroImg} alt="Olio Nexus Hero" className={styles.heroImage} />
          </div>
        </div>
      </div>
    </section>
  );
}