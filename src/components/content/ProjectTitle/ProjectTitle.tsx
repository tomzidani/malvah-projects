import { MouseEventHandler } from "react"

type ProjectTitleType = {
  title: string
  handleMouseEnter: MouseEventHandler<HTMLDivElement>
  handleMouseLeave: MouseEventHandler<HTMLDivElement>
}

const ProjectTitle = ({ title, handleMouseEnter, handleMouseLeave }: ProjectTitleType) => {
  return (
    <div className="item__title" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2>{title}</h2>
    </div>
  )
}

export default ProjectTitle
