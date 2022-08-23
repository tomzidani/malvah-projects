import { useContext } from "react"
import { CursorContext } from "../../../utils/contexts/CursorContext"
import "./Header.scss"

const Header = () => {
  const { setSize } = useContext(CursorContext)

  const handleMouseEnter = () => setSize("medium")
  const handleMouseLeave = () => setSize("small")

  const linkAttributes = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  }

  return (
    <header className="app-header">
      <nav className="header__nav">
        <a href="#" {...linkAttributes}>
          collab
        </a>
        <a href="#" {...linkAttributes}>
          studio
        </a>
      </nav>
    </header>
  )
}

export default Header
