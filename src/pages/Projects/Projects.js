import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

import './Projects.css';

const Projects = () => {
  // const [projects, setProjects] = useState([]);


  // const getProjects = async () => {
  //   try {
  //     const projectsApi = await api.getAllProjects();
  //     setProjects(projectsApi);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getProjects();
  // }, []);


  return (
    <div className='projects'>
        <div className='project_pack'>
          <div className='projects_title'>
            <h2>Meus Projetos</h2>
          </div>
          <SearchBar/>
          {/* <div className='project_card'>
            <ul>
              <li>
                <span>Free Dobby Game</span>
                <img src='./dobby.png' alt="dobby-game"/>
              </li>
            </ul>
            <div>descrição</div>
            <div>botao codigo</div>
            <div>botao url</div>
          </div> */}
        </div>
        {/* {projects ? projects.map((project) => { const {_id, name, img, description, url} = project; 
          return( 
            <Link key={_id} to={`/projects/${_id}`}>
              <div>
                <span>{name}</span>
              </div>
              <div>
                <img src={img} alt={name} />
              </div>
              <div>
                <span>{description}</span>
              </div>
              <div>
                <span>{url}</span>
              </div>
            </Link>
          )}) : ""} */}
          {/*dobby game, movie lib, job finder, ecommerce perfume, receitas internacionais, case salon*/}
    </div>
  )
}

export default Projects;