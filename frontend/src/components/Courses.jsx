import axios from "axios";
import { useEffect, useState } from "react"

const Courses = () => {
    const [courses, setCourses] = useState([])

    const fetchCourses = async () => {
        try {
            const response = await axios.get("http://localhost:3000/admin/courses", {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            });
            setCourses(response?.data?.courses)
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };


    useEffect(() => {
        fetchCourses()
    }, [])

    console.log(courses)
    return (
        <div>
            {JSON.stringify(courses)}
        </div>
    )
}

export default Courses