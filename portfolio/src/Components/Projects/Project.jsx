import useSanityImage from 'src/hooks/useSanityImage';
import styles from './Project.module.scss';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';

const Project = ({ project }) => {
  const { image, title, technologies, description, url } = project;

  const imageUrl = useSanityImage();

  const renderTechnologies = technologies.map((technology) => (
    <span key={technology._key}>{technology.technology}</span>
  ));
  return (
    <li className={styles.project}>
      <a href={url}>
        <div className={styles.image}>
          <AiFillGithub className={styles.icon} />
          <Image src={imageUrl(image).url()} layout='fill' />
        </div>
        {renderTechnologies}
        <h3 className='h5'>{title}</h3>
        <p>{description}</p>
      </a>
    </li>
  );
};

export default Project;
