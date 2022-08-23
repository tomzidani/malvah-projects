export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_OPACITY":
      return {
        ...state,
        opacity: action.payload,
      }
    case "CHANGE_COORDINATES":
      return {
        ...state,
        parallaxPosition: action.payload,
      }
    case "CHANGE_ROTATION":
      return {
        ...state,
        rotationPosition: action.payload,
      }
    case "CHANGE_SCALE":
      return {
        ...state,
        scale: action.payload,
      }
    case "MOUSE_ENTER":
      return {
        ...state,
        active: true,
      }
    case "MOUSE_LEAVE":
      return {
        ...state,
        active: false,
      }
    default:
      throw new Error("")
  }
}
