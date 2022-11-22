import styles from './Experience.module.scss';

const Experience = ({ experience }) => {
  const { experience: title, company, period } = experience;

  return (
    <li className={styles.experience}>
      <div className={styles.period}>{period}</div>
      <div className={styles.description}>
        <h4>{title}</h4>
        <h5>{company}</h5>
      </div>
    </li>
  );
};

export default Experience;
