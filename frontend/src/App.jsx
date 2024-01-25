import Signup from "./components/Signup"
import Appbar from "./components/Appbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signin from "./components/Signin"
import AddCourse from "./components/AddCourse"
import Courses from "./components/Courses"
import CourseDetail from "./components/CourseDetail"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';



function App() {

  return (
    <div style={{ width: "100vw", height: '100vh', background: "#eeeeee " }}>
      <RecoilRoot>
        <Router>
          <Appbar />

          <Routes>
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />


            <Route path="/addCourse" element={<AddCourse />} />

            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />

          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  )
}

export default App
