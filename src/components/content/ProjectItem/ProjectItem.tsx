import { Hash } from "react-feather"
import ProjectImage from "../ProjectImage/ProjectImage"
import ProjectTitle from "../ProjectTitle/ProjectTitle"
import "./ProjectItem.scss"

type ProjectItemType = {
  project: any
  itemIndex: number
}

const ProjectItem = ({ project, itemIndex }: ProjectItemType) => {
  const { title, url, tags } = project
  return (
    <li className="project-item">
      <ProjectTitle title={title} />
      <ProjectImage url={url} />

      <div className="item__infos">
        <p>
          <span>
            <Hash />0{itemIndex}
          </span>
        </p>

        <ul>
          {tags.map((tag, i) => (
            <li key={i}>
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default ProjectItem
