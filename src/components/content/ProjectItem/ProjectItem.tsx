import { useContext, useReducer, useRef } from "react"
import cn from "classnames"
import { Hash } from "react-feather"
import { animate } from "../../../utils/helpers/animate.helpers"
import { reducer } from "../../../utils/reducers/projectItem.reducer"
import ProjectImage from "../ProjectImage/ProjectImage"
import ProjectTitle from "../ProjectTitle/ProjectTitle"
import "./ProjectItem.scss"
import { CursorContext } from "../../../utils/contexts/CursorContext"

type ProjectItemType = {
  project: any
  itemIndex: number
}

const initialState = {
  opacity: 0,
  parallaxPosition: { x: 0, y: -20 },
  scale: 0.8,
  rotationPosition: 0,
  active: false,
}

const ProjectItem = ({ project, itemIndex }: ProjectItemType) => {
  const { title, url, tags } = project

  const [state, dispatch] = useReducer(reducer, initialState)
  const listItem = useRef<any>(null)

  const { setSize } = useContext(CursorContext)

  const easeMethod = "easeInOutCubic"

  const makeParallax = (e: MouseEvent) => {
    const speed = -5

    const x = (window.innerWidth - e.pageX * speed) / 100
    const y = (window.innerHeight - e.pageY * speed) / 100

    dispatch({ type: "CHANGE_COORDINATES", payload: { x, y } })
  }

  const handleMouseEnter = () => {
    setSize("regular")

    handleScale(0.8, 1, 500)
    handleOpacity(0, 1, 500)
    handleRotation(state.rotationPosition, 500)
    dispatch({ type: "MOUSE_ENTER" })
    listItem.current.addEventListener("mousemove", makeParallax)
  }

  const handleMouseLeave = () => {
    setSize("small")

    listItem.current.removeEventListener("mousemove", makeParallax)
    handleScale(1, initialState.scale, 800)
    handleOpacity(1, 0, 800)
    handleRotation(state.rotationPosition, 500)
    dispatch({ type: "CHANGE_COORDINATES", payload: initialState.parallaxPosition })
    dispatch({ type: "MOUSE_LEAVE" })
  }

  const handleOpacity = (initialOpacity: number, newOpacity: number, duration: number) => {
    animate({
      from: initialOpacity,
      to: newOpacity,
      onUpdate: (newOpacity: number, cb: Function) => {
        dispatch({ type: "CHANGE_OPACITY", payload: newOpacity })
        cb()
      },
      onComplete: () => {},
      duration,
      easeMethod,
    })
  }

  const handleScale = (initialScale: number, newScale: number, duration: number) => {
    animate({
      from: initialScale,
      to: newScale,
      onUpdate: (newScale: number, cb: Function) => {
        dispatch({ type: "CHANGE_SCALE", payload: newScale })
        cb()
      },
      onComplete: () => {},
      duration,
      easeMethod,
    })
  }

  const handleRotation = (initialRotation: number, duration: number) => {
    // Random between 15 and -15
    const newRotation: number = Math.random() * 15 * (Math.round(Math.random()) ? 1 : -1)

    animate({
      from: initialRotation,
      to: newRotation,
      onUpdate: (newRotation: number, cb: Function) => {
        dispatch({ type: "CHANGE_ROTATION", payload: newRotation })
        cb()
      },
      onComplete: () => {},
      duration,
      easeMethod,
    })
  }

  return (
    <li className="project-item" ref={listItem}>
      <ProjectTitle title={title} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
      <ProjectImage
        url={url}
        opacity={state.opacity}
        parallaxPosition={state.parallaxPosition}
        scale={state.scale}
        rotationPosition={state.rotationPosition}
      />

      <div className={cn("item__infos", { "is-active": state.active })}>
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
