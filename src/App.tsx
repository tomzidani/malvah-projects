import { CustomCursor, CustomCursorManager, Footer, Header } from "./components/layout"
import { Home } from "./views"

const App = () => {
  return (
    <CustomCursorManager>
      <CustomCursor />
      <Header />
      <Home />
      <Footer />
    </CustomCursorManager>
  )
}

export default App
