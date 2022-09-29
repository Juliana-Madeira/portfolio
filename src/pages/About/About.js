import React from 'react';
import { Link } from 'react-router-dom';

import './About.css';


const About = () => {
  return (
    <div className='about'>
      <div className="about_text">
        <p className='title'>Sobre mim</p>
        <p className='about_p'>Graduada em Design desde 2001, pós-graduada em Gestão de Qualidade e Produtividade, formada como Full Stack Web Dev pelo 
          Bootcamp da Ironhack, desde maio de 2022 e mais cursos na área de Desenvolvimento Web. Me destaco em solucionar 
          problemas com criatividade, utilizando boas práticas de programação e preocupação com uma boa 
          experiência do usuário (UX). 
          Acostumada a trabalhar em equipe, utilizo metodologia ágil (kanban) para planejamentos e andamento de projetos.  
          Trabalho com HTML, CSS, Javascript puro, React JS, fazendo uso de hooks, API REST,  
          styled components, Material UI, Figma, Git, GitHub, MERN Stack. <br/>
          Conheça alguns dos meus 
         <Link to='/projects' className='link_to_projects'> projetos</Link> :)
        </p>
      </div>
    </div>
  )
}

export default About;