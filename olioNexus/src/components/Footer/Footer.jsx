import { useState } from 'react';
import styles from './Footer.module.scss';
import { footerLinks } from '../../data/siteData';

export default function Footer() {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle submission
        setEmail('');
    };

    return (
        <footer className={styles.footer}>
            {/* Main grid */}
            <div className={styles.grid}>
                {/* Brand col */}
                <div className={styles.brandCol}>                    
                    <p className={styles.brandDesc}>
                        Bridging the gap between what’s possible and what’s practical through first-principles engineering.
                    </p>
                </div>

                {/* Right: email capture */}
                <div className={styles.right}>
                    <p className={styles.emailLabel}>Get the latest insights from Olionexus</p>
                    <form className={styles.emailRow} onSubmit={handleSubmit}>
                        <input
                            type="email"
                            className={styles.emailInput}
                            placeholder="you@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className={styles.submitBtn}>Join</button>
                    </form>
                </div>
            </div>

            <div className={styles.linkgrid}>
                {/* Link columns */}
                {Object.entries(footerLinks).map(([heading, links]) => (
                    <div key={heading} className={styles.col}>
                        <h5 className={styles.colHeading}>{heading}</h5>
                        <ul className={styles.colLinks}>
                            {links.map((link) => (
                                <li key={link}>
                                    <a href="#">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom bar */}
            <div className={styles.bottom}>
                <p className={styles.copy}>
                    © 2026 OLIO NEXUS · Visionary Yet Approachable
                </p>
                <div className={styles.socials}>
                    <a href="#" aria-label="Twitter / X">𝕏</a>
                    <a href="#" aria-label="LinkedIn">in</a>
                    <a href="#" aria-label="YouTube">▶</a>
                </div>
            </div>

            {/* Watermark */}
            <div className={styles.watermark} aria-hidden="true">
                OLIONEXUS
            </div>
        </footer>
    );
}