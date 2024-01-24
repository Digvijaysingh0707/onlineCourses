import { Button, Card, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const AddCourse = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const handleAddCourse = async () => {
        const response = await axios.post(
            "http://localhost:3000/admin/courses",
            { title, description, imageLink: "", published: true },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            }
        );
        localStorage.setItem("token", response?.data?.token);
    };

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

                <Button size={"small"} variant="contained" onClick={handleAddCourse}>
                    Add Course
                </Button>
            </Card>
        </div>
    );
};

export default AddCourse;
