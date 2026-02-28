import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import './App.css'

import DefaultPage from "./views/DefaultPage"
import FirstPage from "./views/FirstPage"
import SecondPage from "./views/SecondPage"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DefaultPage />} />
          <Route path="firstPage" element={<FirstPage />} />
          <Route path="secondPage" element={<SecondPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App;