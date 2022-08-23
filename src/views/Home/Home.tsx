import { ProjectItem } from "../../components/content"
import { projects } from "../../utils/provider/projects.provider"
import "./Home.scss"

const Home = () => {
  return (
    <main className="app-home">
      <section className="home__projects">
        <ul>
          {projects.map((project, i) => (
            <ProjectItem key={i} project={project} itemIndex={i} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Home
