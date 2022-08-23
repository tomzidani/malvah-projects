import { createContext, Dispatch, SetStateAction } from "react"

export const CursorContext = createContext({ size: "small", setSize: (size: any): any => {} })
