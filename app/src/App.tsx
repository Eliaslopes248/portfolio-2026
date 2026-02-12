
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProjectCatalog from "./pages/ProjectCatalog"

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/"               element={<HomePage/>}/>
        <Route path="/projectCatalog" element={<ProjectCatalog/>}/>
      </Routes>
    </Router>
  )
}

export default App
