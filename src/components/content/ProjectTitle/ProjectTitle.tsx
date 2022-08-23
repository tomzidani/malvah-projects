type ProjectTitleType = {
  title: string
}

const ProjectTitle = ({ title }: ProjectTitleType) => {
  return (
    <div className="item__title">
      <h2>{title}</h2>
    </div>
  )
}

export default ProjectTitle
