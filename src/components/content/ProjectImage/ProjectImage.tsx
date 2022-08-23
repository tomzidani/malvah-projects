type ProjectImageType = {
  url: string
  opacity: number
  parallaxPosition: any
}

const ProjectImage = ({ url, opacity, parallaxPosition }: ProjectImageType) => {
  const attributes = {
    style: {
      opacity,
      transform: `translate3d(${parallaxPosition.x}px, ${parallaxPosition.y}px, 0px)`,
    },
  }
  return <img src={url} className="item__image" {...attributes} />
}

export default ProjectImage
