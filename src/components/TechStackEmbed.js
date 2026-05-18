import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function TechStackEmbed() {
  const techStackUrl = useBaseUrl('/atlas-tech-stack/?embed=1&fit=contain');

  return (
    <div
      style={{
        border: '1px solid var(--ifm-toc-border-color)',
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'var(--ifm-background-surface-color)',
        boxShadow: '0 18px 45px rgba(15, 23, 42, 0.16)',
      }}>
      <iframe
        src={techStackUrl}
        title="Atlas Tech Stack"
        width="100%"
        height="860"
        style={{border: 'none', display: 'block'}}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
