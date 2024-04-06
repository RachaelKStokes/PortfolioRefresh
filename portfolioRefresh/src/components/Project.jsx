import { AiFillGithub } from "react-icons/ai";



export default function Project({ projects }) {
  return (
    <div class="proj-group" class="row">
        {projects.map((project) => (
          <div class="proj-item" key={project.id} class="col-lg-6">
            <img src={`${project.picture}`}></img>
            <p class="fs-3" >{`${project.title}`}</p>
            <a href={`${project.repoLink}`} class="fs-3" target="blank">
                        <AiFillGithub />
            </a>
            </div>
        ))}
    </div>
    );
}