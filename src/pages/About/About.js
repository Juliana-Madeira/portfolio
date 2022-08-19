import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import { FaGithub, FaLinkedin, FaDev} from "react-icons/fa";
import './About.css';


const About = () => {
  return (
    <div className='about'>
      <div className="about_text">
        <h2>Sobre mim</h2>
        <p>Designer desde 2001, pós graduada em Gestão
          da Qualidade e Produtividade e formada como Full Stack Web Developer pela
          Ironhack no campus de São Paulo/Brasil. Me
          destaco em solucionar problemas, tenho experiência
          em code review, utilizando boas práticas e muita
          criatividade no desenvolvimento. Acostumada em
          trabalhar em equipe, usando sempre a metodologia ágil Kanban.
          Trabalho com HTML, CSS, Javascript puro, React JS, fazendo uso de hooks, API REST,  
          styled components, libs de icons e outras habilidades mais. <br/>
          Conheça alguns dos meus 
         <Link to='/projects' className='link_to_projects'> projetos</Link> :)
        </p>
      </div>
      <div className='about_midias_profissionais'>
        <a href="https://github.com/Juliana-Madeira" target='_blank'rel="noreferrer" >
          GitHub 
          <p><FaGithub size={25}/></p>
        </a>
        <a href="https://www.linkedin.com/in/juliana-g-madeira/" target='_blank' rel="noreferrer">
          Linkedin
          <p><FaLinkedin size={25}/></p>
        </a>
        <a href="/" target='_blank' rel="noreferrer">
          Currículo
          <p><FaDev size={25}/></p>
        </a>
      </div>
    </div>
  )
}

export default About;