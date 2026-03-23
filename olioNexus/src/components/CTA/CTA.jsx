import styles from './CTA.module.scss';

export default function CTA() {

    return (
        <section className={styles.cta} id="contact">
            <div className={styles.left}>
                <h2 className={styles.heading}>
                    We&apos;re not here to disrupt everything.
                    <br />
                    We&apos;re here to build what matters.
                </h2>
               
                <a href="mailto:hello@olionexus.com" className={styles.connectBtn}>
                    Schedule a call
                </a>
            </div>


        </section>
    );
}
