import { useEffect, useRef, useState } from "react"
import { ProjectItem } from "../../components/content"
import { getScrollPosition, setScrollPosition } from "../../utils/helpers/scroll.helpers"
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

  const initScroll = () => {
    const scrollPosition = getScrollPosition(menuItems.current)

    scrollPosition <= 0 && setScrollPosition(1, menuItems.current)
  }

  const updateScroll = (clonesHeight: any) => {
    const scrollPosition = getScrollPosition(menuItems.current)

    const needToScrollToTop = clonesHeight + scrollPosition >= menuItems.current.scrollHeight
    const needToScrollToBottom = scrollPosition <= 0

    const scrollTo = needToScrollToTop || needToScrollToBottom ? (needToScrollToTop ? 1 : menuItems.current.scrollHeight - clonesHeight) : null

    if (scrollTo) setScrollPosition(scrollTo, menuItems.current)
  }

  useEffect(() => {
    const clonesHeight = cloneItems()

    initScroll()

    menuItems.current.style.scrollBehavior = "unset"

    menuItems.current.addEventListener("scroll", () => updateScroll(clonesHeight))

    return () => {
      menuItems.current.removeEventListener("scroll", () => updateScroll(clonesHeight))
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
