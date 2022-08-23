type ProjectImageType = {
  url: string
}

const ProjectImage = ({ url }: ProjectImageType) => {
  return <img src={url} className="item__image" />
}

export default ProjectImage
