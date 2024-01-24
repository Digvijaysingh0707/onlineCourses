import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Appbar() {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoader(false)
                const response = await axios.get("http://localhost:3000/admin/me", {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                });
                setUser(response.data.username)
                setLoader(true)
            } catch (error) {
                // Handle errors
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Call the async function

    }, []);
    // if (!loader) return
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: 4 }}>
            <Typography>Coursera</Typography>
            {!user ?
                <div>
                    <Button style={{ marginRight: 10 }} variant="contained" onClick={() => navigate("/signup")}>Sign up</Button>
                    <Button variant="contained" onClick={() => navigate("/login")}>Sign in</Button>
                </div>
                :
                <div>
                    <p>{user}</p>
                    <Button onClick={() => {
                        localStorage.removeItem("token"), window.location = "/"
                    }}>Log out</Button>
                </div>}

        </div>
    );
}

export default Appbar;