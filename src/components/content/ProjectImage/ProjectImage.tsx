type ProjectImageType = {
  url: string
  opacity: number
  parallaxPosition: any
  scale: number
  rotationPosition: number
}

const ProjectImage = ({ url, opacity, parallaxPosition, scale, rotationPosition }: ProjectImageType) => {
  const attributes = {
    style: {
      opacity,
      transform: `translate3d(${parallaxPosition.x}px, ${parallaxPosition.y}px, 0px) rotate(${rotationPosition}deg) scale(${scale})`,
    },
  }
  return <img src={url} className="item__image" {...attributes} />
}

export default ProjectImage
