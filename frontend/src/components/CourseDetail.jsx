import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CourseCard from "./CourseCard";
import AddCourse from "./AddCourse";

const CourseDetail = () => {
    const { courseId } = useParams()

    const [course, setCourse] = useState([])

    const fetchCourse = async () => {
        try {
            const response = await axios.get("http://localhost:3000/admin/courses/" + courseId, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            });
            setCourse(response?.data?.course)
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchCourse()
    }, [])

    return (
        <div>
            <CourseCard course={course} />
            <AddCourse courseId={courseId} fetchCourse={fetchCourse} />
        </div>
    )
}

export default CourseDetail