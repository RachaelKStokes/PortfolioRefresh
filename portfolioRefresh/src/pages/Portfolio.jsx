import projects from "../components/projects";
import Project from "../components/Project";

export default function Portfolio() {
  return (
    <>
      <section style={{
        padding: '20px'
      }}>
        <Header />
        <div className="container-fluid">
          <h1>Portfolio</h1>
        </div>
        <div class="row">
          <Project projects={projects} />
        </div>
        <Footer />
      </section >
    </>
  );
}
}
