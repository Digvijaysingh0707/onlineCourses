import { Card, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
const CourseCard = ({ course }) => {
    const navigate = useNavigate()
    console.log(course?._id, 'COURSE')
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ border: "2px solid black", margin: 10, width: 300, minHeight: 200, textAlign: "center" }} >

                <Typography variant="h5"> {course?.title}</Typography>
                <Typography variant="subtitle">{course?.description}</Typography >
                {course.imageLink ?
                    <img src={course.imageLink} style={{ width: 300 }} /> :
                    "NA"}
            </Card>
        </div>
    )
}

export default CourseCard
