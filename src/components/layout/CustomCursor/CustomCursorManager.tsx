import { useState } from "react"
import { CursorContext } from "../../../utils/contexts/CursorContext"

const CustomCursorManager = ({ children }: any) => {
  const [size, setSize]: any = useState<any>("small")

  return <CursorContext.Provider value={{ size, setSize }}>{children}</CursorContext.Provider>
}

export default CustomCursorManager
