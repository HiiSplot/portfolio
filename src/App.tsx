import React from "react"
import { Header } from "./Components/header"
import { Projects } from "./Components/projects"
import { Photography } from "./Components/photography"
import { Contact } from "./Components/contact"
import { About } from "./Components/about"

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Projects />
      <Photography />
      <About />
      <Contact />
    </>
  )
}

export default App
