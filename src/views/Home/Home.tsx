import { useEffect, useRef, useState } from "react"
import { ProjectItem } from "../../components/content"
import { projects } from "../../utils/provider/projects.provider"
import "./Home.scss"

const Home = () => {
  const menuItems = useRef<any>(null)
  const [renderItems, setRenderItems] = useState<any>(projects)

  const cloneItems = () => {
    const itemHeight = menuItems.current.childNodes[0].offsetHeight
    const numberOfItemsCanFit = Math.ceil(window.innerHeight / itemHeight)

    const clonedItems = [...renderItems].filter((_, i) => i < numberOfItemsCanFit).map((target) => target)

    setRenderItems([...renderItems, ...clonedItems])
    return clonedItems.length * itemHeight
  }

  const getScrollPosition = () => {
    return ((menuItems.current.pageYOffset || menuItems.current.scrollTop) - (menuItems.current.clientTop || 0)) as number
  }

  const setScrollPosition = (scrollPosition: number) => {
    menuItems.current.scrollTop = scrollPosition
  }

  const initScroll = () => {
    const scrollPosition = getScrollPosition()

    scrollPosition <= 0 && setScrollPosition(1)
  }
  useEffect(() => {
    const clonesHeight = cloneItems()
    initScroll()

    menuItems.current.style.scrollBehavior = "unset"

    const scrollUpdate = () => {
      const scrollPosition = getScrollPosition()

      if (clonesHeight + scrollPosition >= menuItems.current.scrollHeight) {
        setScrollPosition(1)
      } else if (scrollPosition <= 0) {
        setScrollPosition(menuItems.current.scrollHeight - clonesHeight)
      }
    }

    menuItems.current.addEventListener("scroll", scrollUpdate)

    return () => {
      menuItems.current.removeEventListener("scroll", scrollUpdate)
    }
  }, [menuItems])

  return (
    <main className="app-home">
      <section className="home__projects">
        <ul ref={menuItems}>
          {renderItems.map((project, i) => (
            <ProjectItem key={i} project={project} itemIndex={i} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Home
