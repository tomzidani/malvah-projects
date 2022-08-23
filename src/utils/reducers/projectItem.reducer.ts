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
    default:
      throw new Error("")
  }
}
