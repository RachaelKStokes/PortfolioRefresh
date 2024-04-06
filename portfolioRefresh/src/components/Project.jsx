import { AiFillGithub } from "react-icons/ai";



export default function Project({ projects }) {
  return (
    <div class="container-fluid">
    <div class="row">
        {projects.map((project) => (
          <div class="card text-white bg-secondary mb-3" key={project.id}>
            <p class="card-header" >{`${project.title}`}</p>
            <img src={`${project.picture}`} alt="white flower" width="200"></img>
            <p>{`${project.used}`}</p>
            <a href={`${project.repoLink}`} class="fs-3" target="blank">
            <AiFillGithub />
            </a>
            </div>
        ))}
    </div>
    </div>
    );
}