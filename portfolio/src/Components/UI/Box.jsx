import styles from './Box.module.scss';

const Box = ({ text }) => {
  return (
    <div className={styles.box}>
      <span className='h5'>{text}</span>
    </div>
  );
};

export default Box;
