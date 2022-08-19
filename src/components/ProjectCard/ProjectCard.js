import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from  'react-router-dom';
import api from '../../utils/api.utils';


const ProjectCard = () => {
  const { id } = useParams;
  const [project, setProject] = useState(null);

  const getProject = async () => {
      try {
        const projectsApi = await api.getOneProject(id);
        setProject(projectsApi);

      } catch (error) {
        console.log(error);
      }
    }
  

  useEffect(() => {
    getProject();
  }, [getProject]);
  

  return (
    <div className='project_card'>
       {project ? (
        <>
        <div className='project_card_title'>
          <p>{project.name}</p>
        </div>
        <div>
          <img src={project.img} alt={project.name} />
        </div>
        <div>
          <p>{project.description}</p>
        </div>
        <div>{project.url}</div>
        </>)
        : (
          ""
        )}
    </div>
  )
}

export default ProjectCard