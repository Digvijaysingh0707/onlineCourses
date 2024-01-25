import { Button, Card, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const AddCourse = ({ courseId, fetchCourse }) => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [imageLink, setImageLink] = useState()



    const handleAddCourse = async () => {
        const response = await axios.post(
            "http://localhost:3000/admin/courses",
            { title, description, imageLink, published: true },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            }
        );
        // localStorage.setItem("token", response?.data?.token);
    };

    const handleUpdateCourse = async () => {
        const response = await axios.put(
            "http://localhost:3000/admin/courses/" + courseId,
            { title, description, imageLink, published: true },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            }
        );
        fetchCourse()
    }
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card variant="outlined" style={{ width: 400, padding: 20 }}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Title"
                    type={"text"}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Description"
                    type={"text"}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Image Link"
                    type={"text"}
                    onChange={(e) => setImageLink(e.target.value)}
                />

                <Button size={"small"} variant="contained" onClick={courseId ? handleUpdateCourse : handleAddCourse}>
                    {(courseId ? "Update " : "Add ") + "Course"}
                </Button>
            </Card>
        </div>
    );
};

export default AddCourse;
