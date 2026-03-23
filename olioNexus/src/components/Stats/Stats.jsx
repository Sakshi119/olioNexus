import styles from './Stats.module.scss';
import { stats } from '../../data/siteData';
import CountUp from "react-countup";
export default function Stats() {
    return (
        <section className={`${styles.stats} container-fluid`}>
            <div className={`${styles.header} row g-0`}>

                {stats.map((stat, i) => (
                    <div
                        key={stat.label}
                        className={`${styles.item} col-lg-3 col-md-6 col-6`}
                        data-aos="fade-up"
                        data-aos-delay={i * 100}
                    >
                        <span className={styles.num}>{stat.num}</span>
                        <span className={styles.label}>{stat.label}</span>
                    </div>
                ))}

            </div>
        </section>
    );
}