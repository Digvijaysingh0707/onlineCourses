import Signup from "./components/Signup"
import Appbar from "./components/Appbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signin from "./components/Signin"
import AddCourse from "./components/AddCourse"
import Courses from "./components/Courses"



function App() {

  return (
    <div style={{ width: "100vw", height: '100vh', background: "#eeeeee " }}>
      <Router>
        <Appbar />

        <Routes>
          <Route path="/courses" element={<Courses />} />

          <Route path="/addCourse" element={<AddCourse />} />

          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
