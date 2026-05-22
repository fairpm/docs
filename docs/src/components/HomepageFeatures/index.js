import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'FAIR',
    Svg: require('@site/static/img/globe.svg').default,
    description: (
      <>
        <p>FAIR is an acronym for Federated And Independent Repositories.</p>
        <p>The FAIR Package Manager is an open-source initiative of The FAIR Web Foundation, a Linux Foundation project.</p>
      </>
    ),
  },
  {
    title: 'Technology',
    Svg: require('@site/static/img/networking.svg').default,
    description: (
      <>
        <p>Decentralized alternative for distributing your project dependencies.</p>
        <p>Everything is package if you're FAIR enough.</p>
      </>
    ),
  },
  {
    title: 'Security, Privacy & GDPR',
    Svg: require('@site/static/img/superhero.svg').default,
    description: (
      <>
        <p>FAIR is designed to improve user privacy by reducing unnecessary tracking and central data collection.</p>
        <p>Using signing and authentication, FAIR mitigates unapproved takeovers or nulling of your website dependencies, restoring trust in deliverables.</p>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--lg">
        <Heading as="h3">{title}</Heading>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
