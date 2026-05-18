import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

const currentGuidance = [
  {
    title: 'Customer Journey',
    description: 'Use this for prototype-backed journey documentation and screen-led market enablement.',
    to: '/docs/frontend/customer-journey',
  },
  {
    title: 'Front-End Guide',
    description: 'Use this for Atlas front-end product guidance, design language, and feature behavior.',
    to: '/docs/frontend/overview',
  },
  {
    title: 'Admin Portal Guide',
    description: 'Use this for operational configuration, menu management, stores, promotions, and support workflows.',
    to: '/docs/admin-portal-guide',
  },
  {
    title: 'Tech Stack',
    description: 'Use this for platform architecture and current implementation context.',
    to: '/docs/tech-stack',
  },
  {
    title: 'Release Notes',
    description: 'Use this for recent changes, launches, and shipped Atlas capabilities.',
    to: '/docs/release-notes',
  },
];

export default function RenegadeAtlasParityQrgPage() {
  return (
    <Layout
      title="Deprecated: Renegade-Atlas Parity QRG"
      description="Deprecated Renegade-Atlas parity reference. Use the current Atlas documentation as the source of truth."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Deprecated Reference</p>
          <h1 className={styles.title}>Renegade-Atlas Parity QRG</h1>
          <p className={styles.subtitle}>
            This quick reference guide has been deprecated and should not be used as current
            Atlas product guidance.
          </p>
        </section>

        <section className={styles.noticeSection} aria-labelledby="deprecated-heading">
          <div className={styles.notice}>
            <p className={styles.status}>Deprecated on May 18, 2026</p>
            <h2 id="deprecated-heading">Use the current Atlas Wiki documentation instead.</h2>
            <p>
              The Renegade-Atlas parity QRG was a legacy comparison artifact. Atlas guidance now
              lives in journey-led and product-led documentation that reflects the current
              prototype, front-end behavior, operational configuration, and release history.
            </p>
          </div>

          <div className={styles.linkGrid} aria-label="Current Atlas documentation">
            {currentGuidance.map((item) => (
              <Link className={styles.linkCard} to={item.to} key={item.title}>
                <span>{item.title}</span>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
