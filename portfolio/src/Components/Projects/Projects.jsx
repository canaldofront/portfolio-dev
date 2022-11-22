import Project from './Project';
import styles from './Projects.module.scss';

const Projects = ({ projects }) => {
  const { title, projects: portfolio, button, url } = projects;

  const renderProjects = portfolio.map((project) => (
    <Project key={project._key} project={project} />
  ));

  return (
    <section className={styles.projects} id='projects'>
      <h2>{title}</h2>
      <ul className={styles.list}>{renderProjects}</ul>
      <a href={url} className='btn btn-primary'>
        {button}
      </a>
    </section>
  );
};

export default Projects;
