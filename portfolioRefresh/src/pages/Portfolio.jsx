import projects from "../components/projects";
import Project from "../components/Project";

export default function Portfolio() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <h1>Portfolio</h1>
        </div>
        <div class="row">
          <Project projects={projects} />
        </div>
      </section >
    </>
  );
}

