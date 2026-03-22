import styles from './Manifesto.module.scss';

export default function Manifesto() {
    return (
        <section className={styles.manifesto}>
            <div className={styles.header}>
                <span className="section-tag">&#91;Our Manifesto&#93;</span>
                <h2 className={styles.heading}>
                    There&apos;s a gap in the technology industry.
                    Consultants who don&apos;t code. Developers
                    who don&apos;t strategize.
                    We bridge that gap.
                </h2>
            </div>
        </section>
    );
}