import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import SearchBox from '@site/src/components/SearchBox';
import styles from './index.module.css';

const HOME_CONTENT = {
  'en-US': {
    description: 'KFC Atlas Platform Wiki',
    badge: 'Atlas Platform · Wiki',
    titleLead: 'Atlas.',
    titleAccent: 'Done right.',
    summary:
      'Everything you need to launch, operate, and scale Atlas — from customer experience to restaurant operations.',
    heroSearchPlaceholder: 'Search guides, articles, and headings',
    heroPrimaryCta: 'Start with the Front-end Guide →',
    heroSecondaryCta: 'Start with the Byte Portal Guide →',
    heroCapabilitiesCta: 'Explore Tech Stack →',
    storyTitle: 'Atlas Story',
    storyBody:
      'Watch a short film on how Atlas brings the customer journey, platform standards, and market enablement story together.',
    storyVideoLabel: 'Atlas hype production video',
    sectionEyebrow: 'Three sections',
    sectionTitle: 'Built for everyone who operates the platform',
    prototypeCardEyebrow: 'Interactive preview',
    prototypeCardTitle: 'Atlas Peek',
    prototypeCardBody:
      'Explore a stateful multilingual customer journey prototype that behaves like a mini app instead of a linear slideshow.',
    prototypeCardCta: 'Open the sneak peek',
    marketsLabel: 'Markets',
    marketsSublabel: 'Onboarding — rolling out through end of 2026',
    upcomingMarketsLabel: 'Coming after',
    upcomingMarkets: [
      { flagCode: 'ca', name: 'Canada' },
      { flagCode: 'fr', name: 'France' },
      { flagCode: 'de', name: 'Germany' },
      { flagCode: 'es', name: 'Spain' },
      { flagCode: 'th', name: 'Thailand' },
    ],
    stats: [
      { value: 830, suffix: '+', label: 'Stores', sub: 'Stores Onboarding' },
      { value: '3', label: 'Core Modules', subItems: ['Front-End', 'Byte Commerce', 'Byte Connect'] },
      { value: '1', label: 'Platform', sub: 'Atlas by KFC Global - Brand Experience Team' },
    ],
    sections: [
      {
        emoji: '🖥️',
        label: 'Front-end Guide',
        title: 'What your customers experience',
        desc: 'Understand the end-to-end ordering journey — from discovery through checkout. Covers market-specific configurations for loyalty, promotions, and order channels in Australia and future rollout markets.',
        link: '/docs/frontend/overview',
        cta: 'Read the guide',
        items: ['Customer Journey', 'Order Channels', 'Customer Engagement Surveys'],
      },
      {
        emoji: '⚙️',
        label: 'Admin Portal Guide',
        title: 'How to operate the platform',
        desc: 'Step-by-step guidance for restaurant and regional teams on using the Byte Commerce Admin Portal — restaurant setup, menu management, and access controls.',
        link: '/docs/admin-portal-guide/',
        cta: 'Read the guide',
        items: ['Restaurant Profile Setup', 'Menu Management', 'Users & Permissions'],
      },
      {
        emoji: '📋',
        label: 'Playbooks',
        title: 'KFC-ready campaign playbooks',
        desc: 'Operational playbooks for campaign execution — from creating promotions in Atlas to launching lifecycle rewards in Braze for KFC customers.',
        link: '/docs/playbooks/onboarding',
        cta: 'View playbooks',
        items: ['Create Promotions', 'Buy 1 Get 1 Promo', 'Braze Welcome Reward Canvas'],
      },
    ],
    markets: [
      { flagCode: 'au', name: 'Australia' },
    ],
  },
  'fr-FR': {
    description: 'Wiki de la plateforme KFC Atlas',
    badge: 'Plateforme Atlas · Wiki',
    titleLead: 'Atlas.',
    titleAccent: 'Bien exécuté.',
    summary:
      'Tout ce dont vous avez besoin pour lancer, exploiter et faire évoluer Atlas, de l’expérience client aux opérations restaurant.',
    heroSearchPlaceholder: 'Rechercher des guides, articles et sections',
    heroPrimaryCta: 'Commencer par le guide Front-End →',
    heroSecondaryCta: 'Commencer par le guide Byte Portal →',
    heroCapabilitiesCta: 'Explorer le Tech Stack →',
    storyTitle: 'Histoire Atlas',
    storyBody:
      'Regardez un court film sur la manière dont Atlas relie le parcours client, les standards de plateforme et l’activation des marchés.',
    storyVideoLabel: 'Vidéo de présentation Atlas',
    sectionEyebrow: 'Trois sections',
    sectionTitle: 'Conçu pour toutes les équipes qui exploitent la plateforme',
    prototypeCardEyebrow: 'Aperçu interactif',
    prototypeCardTitle: 'Atlas Peek',
    prototypeCardBody:
      'Explorez un prototype de parcours client multilingue avec état, qui se comporte comme une mini application plutôt qu’un diaporama linéaire.',
    prototypeCardCta: 'Ouvrir l’aperçu',
    marketsLabel: 'Marchés',
    marketsSublabel: 'Onboarding — déploiement jusqu’à fin 2026',
    upcomingMarketsLabel: 'À venir',
    upcomingMarkets: [
      { flagCode: 'ca', name: 'Canada' },
      { flagCode: 'fr', name: 'France' },
      { flagCode: 'de', name: 'Allemagne' },
      { flagCode: 'es', name: 'Espagne' },
      { flagCode: 'th', name: 'Thaïlande' },
    ],
    stats: [
      { value: 830, suffix: '+', label: 'Restaurants', sub: 'Onboarding restaurants' },
      { value: '3', label: 'Modules clés', subItems: ['Front-End', 'Byte Commerce', 'Byte Connect'] },
      { value: '1', label: 'Plateforme', sub: 'Atlas par KFC Global - Brand Experience Team' },
    ],
    sections: [
      {
        emoji: '🖥️',
        label: 'Guide Front-End',
        title: 'Ce que vivent vos clients',
        desc: 'Comprenez le parcours de commande de bout en bout, de la découverte au paiement. Couvre les configurations par marché pour la fidélité, les promotions et les canaux de commande en Australie et sur les futurs marchés de déploiement.',
        link: '/docs/frontend/overview',
        cta: 'Lire le guide',
        items: ['Parcours client', 'Canaux de commande', 'Enquêtes d’engagement client'],
      },
      {
        emoji: '⚙️',
        label: 'Guide Byte Portal',
        title: 'Comment exploiter la plateforme',
        desc: 'Instructions étape par étape pour les équipes restaurant et régionales sur l’utilisation du Byte Commerce Admin Portal : configuration restaurant, gestion du menu et contrôles d’accès.',
        link: '/docs/admin-portal-guide/',
        cta: 'Lire le guide',
        items: ['Configuration restaurant', 'Gestion du menu', 'Utilisateurs et permissions'],
      },
      {
        emoji: '📋',
        label: 'Playbooks',
        title: 'Playbooks de campagne prêts pour KFC',
        desc: 'Playbooks opérationnels pour l’exécution des campagnes, de la création de promotions dans Atlas au lancement de récompenses de cycle de vie dans Braze pour les clients KFC.',
        link: '/docs/playbooks/onboarding',
        cta: 'Voir les playbooks',
        items: ['Créer des promotions', 'Promo Achetez 1, recevez 1', 'Braze Welcome Reward Canvas'],
      },
    ],
    markets: [{ flagCode: 'au', name: 'Australie' }],
  },
  'es-ES': {
    description: 'Wiki de la plataforma KFC Atlas',
    badge: 'Plataforma Atlas · Wiki',
    titleLead: 'Atlas.',
    titleAccent: 'Bien ejecutado.',
    summary:
      'Todo lo que necesitas para lanzar, operar y escalar Atlas, desde la experiencia del cliente hasta las operaciones del restaurante.',
    heroSearchPlaceholder: 'Buscar guías, artículos y secciones',
    heroPrimaryCta: 'Empezar con la guía Front-End →',
    heroSecondaryCta: 'Empezar con la guía Byte Portal →',
    heroCapabilitiesCta: 'Explorar Tech Stack →',
    storyTitle: 'Historia de Atlas',
    storyBody:
      'Mira un breve video sobre cómo Atlas conecta el recorrido del cliente, los estándares de plataforma y la habilitación de mercados.',
    storyVideoLabel: 'Video de presentación de Atlas',
    sectionEyebrow: 'Tres secciones',
    sectionTitle: 'Diseñado para todos los equipos que operan la plataforma',
    prototypeCardEyebrow: 'Vista previa interactiva',
    prototypeCardTitle: 'Atlas Peek',
    prototypeCardBody:
      'Explora un prototipo multilingüe del recorrido del cliente con estado, que se comporta como una mini app en lugar de una presentación lineal.',
    prototypeCardCta: 'Abrir vista previa',
    marketsLabel: 'Mercados',
    marketsSublabel: 'Onboarding — despliegue hasta finales de 2026',
    upcomingMarketsLabel: 'Próximamente',
    upcomingMarkets: [
      { flagCode: 'ca', name: 'Canadá' },
      { flagCode: 'fr', name: 'Francia' },
      { flagCode: 'de', name: 'Alemania' },
      { flagCode: 'es', name: 'España' },
      { flagCode: 'th', name: 'Tailandia' },
    ],
    stats: [
      { value: 830, suffix: '+', label: 'Restaurantes', sub: 'Onboarding de restaurantes' },
      { value: '3', label: 'Módulos clave', subItems: ['Front-End', 'Byte Commerce', 'Byte Connect'] },
      { value: '1', label: 'Plataforma', sub: 'Atlas por KFC Global - Brand Experience Team' },
    ],
    sections: [
      {
        emoji: '🖥️',
        label: 'Guía Front-End',
        title: 'Lo que experimentan tus clientes',
        desc: 'Comprende el recorrido de pedido de extremo a extremo, desde el descubrimiento hasta el pago. Cubre configuraciones específicas por mercado para fidelización, promociones y canales de pedido en Australia y futuros mercados de despliegue.',
        link: '/docs/frontend/overview',
        cta: 'Leer la guía',
        items: ['Recorrido del cliente', 'Canales de pedido', 'Encuestas de engagement del cliente'],
      },
      {
        emoji: '⚙️',
        label: 'Guía Byte Portal',
        title: 'Cómo operar la plataforma',
        desc: 'Guía paso a paso para equipos de restaurante y regionales sobre el uso de Byte Commerce Admin Portal: configuración del restaurante, gestión de menús y controles de acceso.',
        link: '/docs/admin-portal-guide/',
        cta: 'Leer la guía',
        items: ['Configuración del restaurante', 'Gestión de menús', 'Usuarios y permisos'],
      },
      {
        emoji: '📋',
        label: 'Playbooks',
        title: 'Playbooks de campaña listos para KFC',
        desc: 'Playbooks operativos para ejecutar campañas, desde crear promociones en Atlas hasta lanzar recompensas de ciclo de vida en Braze para clientes KFC.',
        link: '/docs/playbooks/onboarding',
        cta: 'Ver playbooks',
        items: ['Crear promociones', 'Promo Compra 1 y recibe 1', 'Braze Welcome Reward Canvas'],
      },
    ],
    markets: [{ flagCode: 'au', name: 'Australia' }],
  },
  'de-DE': {
    description: 'KFC Atlas Plattform-Wiki',
    badge: 'Atlas Plattform · Wiki',
    titleLead: 'Atlas.',
    titleAccent: 'Richtig umgesetzt.',
    summary:
      'Alles, was du brauchst, um Atlas einzuführen, zu betreiben und zu skalieren, von der Customer Experience bis zum Restaurantbetrieb.',
    heroSearchPlaceholder: 'Guides, Artikel und Abschnitte suchen',
    heroPrimaryCta: 'Mit dem Front-End Guide starten →',
    heroSecondaryCta: 'Mit dem Byte Portal Guide starten →',
    heroCapabilitiesCta: 'Tech Stack erkunden →',
    storyTitle: 'Atlas Story',
    storyBody:
      'Ein kurzer Film darüber, wie Atlas Customer Journey, Plattformstandards und Market Enablement zusammenführt.',
    storyVideoLabel: 'Atlas Präsentationsvideo',
    sectionEyebrow: 'Drei Bereiche',
    sectionTitle: 'Gebaut für alle Teams, die die Plattform betreiben',
    prototypeCardEyebrow: 'Interaktive Vorschau',
    prototypeCardTitle: 'Atlas Peek',
    prototypeCardBody:
      'Erkunde einen zustandsbasierten, mehrsprachigen Customer-Journey-Prototyp, der sich wie eine Mini-App verhält statt wie eine lineare Präsentation.',
    prototypeCardCta: 'Vorschau öffnen',
    marketsLabel: 'Märkte',
    marketsSublabel: 'Onboarding — Rollout bis Ende 2026',
    upcomingMarketsLabel: 'Danach geplant',
    upcomingMarkets: [
      { flagCode: 'ca', name: 'Kanada' },
      { flagCode: 'fr', name: 'Frankreich' },
      { flagCode: 'de', name: 'Deutschland' },
      { flagCode: 'es', name: 'Spanien' },
      { flagCode: 'th', name: 'Thailand' },
    ],
    stats: [
      { value: 830, suffix: '+', label: 'Restaurants', sub: 'Restaurant-Onboarding' },
      { value: '3', label: 'Kernmodule', subItems: ['Front-End', 'Byte Commerce', 'Byte Connect'] },
      { value: '1', label: 'Plattform', sub: 'Atlas von KFC Global - Brand Experience Team' },
    ],
    sections: [
      {
        emoji: '🖥️',
        label: 'Front-End Guide',
        title: 'Was deine Kunden erleben',
        desc: 'Verstehe die komplette Bestellreise vom Entdecken bis zum Checkout. Enthält marktspezifische Konfigurationen für Loyalty, Promotions und Bestellkanäle in Australien und zukünftigen Rollout-Märkten.',
        link: '/docs/frontend/overview',
        cta: 'Guide lesen',
        items: ['Customer Journey', 'Bestellkanäle', 'Customer-Engagement-Umfragen'],
      },
      {
        emoji: '⚙️',
        label: 'Byte Portal Guide',
        title: 'So wird die Plattform betrieben',
        desc: 'Schritt-für-Schritt-Anleitungen für Restaurant- und Regionalteams zur Nutzung des Byte Commerce Admin Portal, einschließlich Restaurant-Setup, Menüverwaltung und Zugriffskontrollen.',
        link: '/docs/admin-portal-guide/',
        cta: 'Guide lesen',
        items: ['Restaurant-Setup', 'Menüverwaltung', 'Benutzer und Berechtigungen'],
      },
      {
        emoji: '📋',
        label: 'Playbooks',
        title: 'KFC-fertige Kampagnen-Playbooks',
        desc: 'Operative Playbooks für die Kampagnenausführung, von der Erstellung von Promotions in Atlas bis zum Start von Lifecycle Rewards in Braze für KFC-Kunden.',
        link: '/docs/playbooks/onboarding',
        cta: 'Playbooks ansehen',
        items: ['Promotions erstellen', 'Buy 1 Get 1 Promo', 'Braze Welcome Reward Canvas'],
      },
    ],
    markets: [{ flagCode: 'au', name: 'Australien' }],
  },
};

function formatStatValue(stat, locale) {
  if (typeof stat.value === 'number') {
    return `${stat.value.toLocaleString(locale)}${stat.suffix ?? ''}`;
  }

  return `${stat.value}${stat.suffix ?? ''}`;
}

function localeClass(baseClass) {
  return baseClass;
}

function MarketFlag({ flagCode, name, compact = false }) {
  const flagSrc = useBaseUrl(`/img/flags/${flagCode}.svg`);
  const frameClassName = compact ? styles.upcomingMarketFlag : styles.marketFlag;
  const imageClassName = compact ? styles.upcomingMarketFlagImage : styles.marketFlagImage;

  return (
    <div className={frameClassName}>
      <img className={imageClassName} src={flagSrc} alt={`${name} flag`} loading="lazy" />
    </div>
  );
}

export default function Home() {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const locale = HOME_CONTENT[currentLocale] ? currentLocale : 'en-US';
  const content = HOME_CONTENT[locale];
  const heroVideoSrc = useBaseUrl('/video/colonel-sanders-cooking-chicken.mp4');
  const storyVideoSrc = useBaseUrl('/video/atlas-hype-production-video-FINAL-1080p.mp4');
  const storyPosterSrc = useBaseUrl('/img/atlas-hype-video-poster.jpg');

  return (
    <Layout title="Home" description={content.description}>
      <div className={styles.hero}>
        <div className={styles.heroTexture} />
        <div className={styles.heroMedia} aria-hidden="true">
          <video className={styles.heroVideo} autoPlay muted loop playsInline preload="metadata">
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
          <div className={styles.heroMediaOverlay} />
        </div>

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <div className={styles.badgeDot} />
              <span className={localeClass(styles.badgeText)}>{content.badge}</span>
            </div>

            <h1 className={localeClass(styles.heroTitle)}>
              {content.titleLead}
              <br />
              <span className={styles.heroTitleAccent}>{content.titleAccent}</span>
            </h1>

            <p className={localeClass(styles.heroSummary)}>{content.summary}</p>

            <div className={styles.searchWrap}>
              <SearchBox
                className="hero-search"
                inputClassName="hero-search__input"
                dropdownClassName="hero-search__dropdown"
                resultClassName="hero-search__result"
                titleClassName="hero-search__title"
                metaClassName="hero-search__meta"
                emptyClassName="hero-search__empty"
                placeholder={content.heroSearchPlaceholder}
              />
            </div>

            <div className={styles.heroActions}>
              <Link to="/docs/frontend/overview" className={`${styles.button} ${styles.buttonPrimary}`}>
                {content.heroPrimaryCta}
              </Link>
              <Link to="/docs/admin-portal-guide/" className={`${styles.button} ${styles.buttonSecondary}`}>
                {content.heroSecondaryCta}
              </Link>
              <Link to="/docs/tech-stack/" className={`${styles.button} ${styles.buttonTertiary}`}>
                {content.heroCapabilitiesCta}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.statsBar}>
        {content.stats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <div className={styles.statValue}>{formatStatValue(stat, locale)}</div>
            <div className={localeClass(styles.statLabel)}>{stat.label}</div>
            <div className={styles.statSub}>
              {stat.subItems ? (
                <span className={styles.statSubList}>
                  {stat.subItems.map((item) => (
                    <span key={item} className={styles.statSubItem}>
                      {item}
                    </span>
                  ))}
                </span>
              ) : (
                stat.sub
              )}
            </div>
          </div>
        ))}
      </div>

      <section className={styles.storySection} aria-labelledby="atlas-story-title">
        <div className={styles.storyInner}>
          <div className={styles.storyCopy}>
            <h2 id="atlas-story-title" className={localeClass(styles.storyTitle)}>
              {content.storyTitle}
            </h2>
            <p className={styles.storyBody}>{content.storyBody}</p>
          </div>
          <div className={styles.storyVideoCard}>
            <video
              id="atlas-story-video"
              className={styles.storyVideo}
              controls
              playsInline
              preload="none"
              poster={storyPosterSrc}
              aria-label={content.storyVideoLabel}
            >
              <source src={storyVideoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <div className={styles.marketsSection}>
        <div className={styles.prototypeCallout}>
          <div className={localeClass(styles.prototypeEyebrow)}>{content.prototypeCardEyebrow}</div>
          <h2 className={localeClass(styles.prototypeTitle)}>{content.prototypeCardTitle}</h2>
          <p className={styles.prototypeBody}>{content.prototypeCardBody}</p>
          <Link to="/sneak-peek" className={`${styles.button} ${styles.prototypeButton}`}>
            {content.prototypeCardCta} →
          </Link>
        </div>
        <div className={localeClass(styles.sectionLabel)}>{content.marketsLabel}</div>
        <div className={styles.marketsSublabel}>{content.marketsSublabel}</div>
        <div className={styles.marketsGrid}>
          {content.markets.map((market) => (
            <div key={market.name} className={styles.marketCard}>
              <MarketFlag flagCode={market.flagCode} name={market.name} />
              <div className={styles.marketName}>{market.name}</div>
            </div>
          ))}
        </div>
        <div className={styles.upcomingDivider} />
        <div className={styles.upcomingMarketsLabel}>{content.upcomingMarketsLabel}</div>
        <div className={styles.upcomingMarketsGrid}>
          {content.upcomingMarkets.map((market) => (
            <div key={market.name} className={styles.upcomingMarketCard}>
              <MarketFlag flagCode={market.flagCode} name={market.name} compact />
              <div className={styles.upcomingMarketName}>{market.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sectionsSection}>
        <div className={styles.sectionsInner}>
          <div className={styles.sectionHeader}>
            <div className={localeClass(styles.sectionLabel)}>{content.sectionEyebrow}</div>
            <h2 className={localeClass(styles.sectionTitle)}>{content.sectionTitle}</h2>
          </div>

          <div className={styles.sectionGrid}>
            {content.sections.map((section) => (
              <div key={section.label} className={styles.sectionCard}>
                <div className={styles.sectionEmoji}>{section.emoji}</div>
                <div className={localeClass(styles.cardLabel)}>{section.label}</div>
                <h3 className={localeClass(styles.cardTitle)}>{section.title}</h3>
                <p className={styles.cardDescription}>{section.desc}</p>
                <ul className={styles.cardList}>
                  {section.items.map((item) => (
                    <li key={item} className={styles.cardListItem}>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={section.link} className={`${styles.button} ${styles.cardButton}`}>
                  {section.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
