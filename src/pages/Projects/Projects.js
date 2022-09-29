import React from "react";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects_title">
        <h2>Alguns dos meus Projetos</h2>
      </div>
      <div className="all_cards">
        <div className="project_card">
          <p>The Free Dobby Game</p>
          <img
            src="https://epipoca.com.br/wp-content/uploads/2021/11/Dobby-em-Harry-Potter-Reproducao-1110x624.jpg"
            alt="dobby"
          />
          <a
            href="https://github.com/Juliana-Madeira/game-project"
            className="btn-repo-code"
            target="_blank"
            rel="noreferrer"
          >
            Repo Code
          </a>
          <a
            href="https://juliana-madeira.github.io/game-project/"
            className="btn-repo-code"
            target="_blank"
            rel="noreferrer"
          >
            Ver App
          </a>
        </div>
        <div className="project_card">
          <p>Movie Lib</p>
          <img
            src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg"
            alt="movie-lib"
            className="movie-lib"
          />
          <a
            href="https://github.com/Juliana-Madeira/movies-lib"
            className="btn-repo-code"
            target="_blank"
            rel="noreferrer"
          >
            Repo Code
          </a>
          <a
            href="https://movies-8rog5optg-juliana-madeira.vercel.app/"
            className="btn-repo-code"
            target="_blank"
            rel="noreferrer"
          >
            Ver App
          </a>
        </div>
        <div className="project_card">
          <p>E-commerce The Coeur</p>
          <img
            src="https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwdfd77b3d/images/hi-res-BR/3614228842822.1_1500px.jpg?sw=1200&sh=1200&sm=fit"
            alt="the coeur"
            className="the-coeur"
          />
          <a
            href="https://github.com/JessicaNonato/project3-client"
            className="btn-repo-code"
            target="_blank"
            rel="noreferrer"
          >
            Repo Code
          </a>
          <a
            href="https://thecoeur.herokuapp.com/"
            className="btn-repo-code"
            target="_blank"
            rel="noreferrer"
          >
            Ver App
          </a>
        </div>
        <div className="project_card">
          <p>Job Finder</p>
          <img src="./jobfinder.png" alt="job-finder" className="job-finder" />
          <a
            href="https://github.com/Juliana-Madeira/job-finder"
            className="btn-repo-code"
            target="_blank"
            rel="noreferrer"
          >
            Repo Code
          </a>
          <a
            href="https://juliana-madeira.github.io/job-finder/"
            className="btn-repo-code"
            target="_blank"
            rel="noreferrer"
          >
            Ver App
          </a>
        </div>
        <div className="project_card">
          <p>Case Salon</p>
          <img
            src="https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwdfd77b3d/images/hi-res-BR/3614228842822.1_1500px.jpg?sw=1200&sh=1200&sm=fit"
            alt="the coeur"
            className="the-coeur"
          />
          <a
            href="https://github.com/Juliana-Madeira/game-project"
            className="btn-repo-code"
            target="_blank"
            rel="noreferrer"
          >
            Repo Code
          </a>
          <a
            href="https://github.com/Juliana-Madeira/game-project"
            className="btn-repo-code"
            target="_blank"
            rel="noreferrer"
          >
            Ver App
          </a>
        </div>
        <div className="project_card">
          <p>Game Spider-Man</p>
          <img
            src="https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwdfd77b3d/images/hi-res-BR/3614228842822.1_1500px.jpg?sw=1200&sh=1200&sm=fit"
            alt="the coeur"
            className="the-coeur"
          />
          <a
            href="https://github.com/Juliana-Madeira/game-project"
            className="btn-repo-code"
            target="_blank"
            rel="noreferrer"
          >
            Repo Code
          </a>
          <a
            href="https://github.com/Juliana-Madeira/game-project"
            className="btn-repo-code"
            target="_blank"
            rel="noreferrer"
          >
            Ver App
          </a>
        </div>
        <div className="project_card">
          <p>The Spork</p>
          <img
            src="https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwdfd77b3d/images/hi-res-BR/3614228842822.1_1500px.jpg?sw=1200&sh=1200&sm=fit"
            alt="the coeur"
            className="the-coeur"
          />
          <a
            href="https://github.com/Juliana-Madeira/game-project"
            className="btn-repo-code"
            target="_blank"
            rel="noreferrer"
          >
            Repo Code
          </a>
          <a
            href="https://github.com/Juliana-Madeira/game-project"
            className="btn-repo-code"
            target="_blank"
            rel="noreferrer"
          >
            Ver App
          </a>
        </div>
      </div>
      {/*job finder, ecommerce perfume, receitas internacionais, case salon*/}
    </div>
  );
};

export default Projects;
