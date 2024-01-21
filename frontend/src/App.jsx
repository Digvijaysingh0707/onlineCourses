import Signup from "./components/Signup"
import Appbar from "./components/Appbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signin from "./components/Signin"



function App() {

  return (
    <div style={{ width: "100vw", height: '100vh', background: "#eeeeee " }}>
      <Router>
        <Appbar />

        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
