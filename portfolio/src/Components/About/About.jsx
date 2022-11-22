import useSanityImage from 'src/hooks/useSanityImage';
import styles from './About.module.scss';
import Image from 'next/image';
import Box from '../UI/Box';

const About = ({ about }) => {
  const { image, title, text, button, url } = about;

  const imageUrl = useSanityImage();

  const renderBiography = text.map((text) => (
    <p key={text._key}>{text.paragraph}</p>
  ));

  return (
    <section className={styles.about} id='about'>
      <div className={styles.image}>
        <Image src={imageUrl(image).url()} layout='fill' />
        <div className={styles.box}>
          <Box text='sobre' />
        </div>
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        {renderBiography}
        <a href={url} className='btn btn-primary'>
          {button}
        </a>
      </div>
    </section>
  );
};

export default About;
