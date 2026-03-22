import styles from './Stats.module.scss';
import { stats } from '../../data/siteData';

export default function Stats() {
    return (
        <section className={styles.stats}>
            <div className={styles.header}>
                {stats.map((stat) => (
                    <div key={stat.label} className={styles.item}>
                        <span className={styles.num}>{stat.num}</span>
                        <span className={styles.label}>{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}