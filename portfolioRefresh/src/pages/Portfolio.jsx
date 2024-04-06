import projects from "../components/projects";
import Project from "../components/Project";

export default function Portfolio() {
  return (
    <>
      <div>
        <div class="container-fluid">
          <div class="row">
          <h1>Portfolio</h1>
          </div>
        <div class="row">
          <div class="card text-white bg-secondary mb-3">
          <Project projects={projects} />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

