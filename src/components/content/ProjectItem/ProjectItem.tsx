import { useReducer, useRef } from "react"
import { Hash } from "react-feather"
import { reducer } from "../../../utils/reducers/projectItem.reducer"
import ProjectImage from "../ProjectImage/ProjectImage"
import ProjectTitle from "../ProjectTitle/ProjectTitle"
import "./ProjectItem.scss"

type ProjectItemType = {
  project: any
  itemIndex: number
}

const initialState = {
  opacity: 0,
  parallaxPosition: { x: 0, y: -20 },
}

const ProjectItem = ({ project, itemIndex }: ProjectItemType) => {
  const { title, url, tags } = project

  const [state, dispatch] = useReducer(reducer, initialState)
  const listItem = useRef<any>(null)

  const makeParallax = (e: MouseEvent) => {
    const speed = -5

    const x = (window.innerWidth - e.pageX * speed) / 75
    const y = (window.innerHeight - e.pageY * speed) / 75

    dispatch({ type: "CHANGE_COORDINATES", payload: { x, y } })
  }

  const handleMouseEnter = () => {
    dispatch({ type: "CHANGE_OPACITY", payload: 1 })

    listItem.current.addEventListener("mousemove", makeParallax)
  }

  const handleMouseLeave = () => {
    listItem.current.removeEventListener("mousemove", makeParallax)

    dispatch({ type: "CHANGE_OPACITY", payload: 0 })
    dispatch({ type: "CHANGE_COORDINATES", payload: initialState.parallaxPosition })
  }

  return (
    <li className="project-item" ref={listItem}>
      <ProjectTitle title={title} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
      <ProjectImage url={url} opacity={state.opacity} parallaxPosition={state.parallaxPosition} />

      <div className="item__infos">
        <p>
          <span>
            <Hash />0{itemIndex}
          </span>
        </p>

        <ul>
          {tags.map((tag: any, i: any) => (
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
