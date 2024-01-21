import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios"

const Signup = () => {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSignup = async () => {
        const response = await axios.post("http://localhost:3000/admin/signup", { username, password }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        localStorage.setItem("token", response?.data?.token)
    }
    return (
        <div >
            <div style={{ paddingTop: 150, marginBottom: 10, display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h6">Welcome to Udemy</Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card variant="outlined" style={{ width: 400, padding: 20 }}>
                    <TextField fullWidth id="outlined-basic" label="Email" type={"text"} onChange={e => setUserName(e.target.value)} />
                    <br />
                    <TextField fullWidth id="outlined-basic" label="Password" type={"password "} onChange={e => setPassword(e.target.value)} />
                    <br />
                    <Button size={"small"} variant="contained" onClick={handleSignup}>Sign up</Button>

                </Card>
            </div>
        </div>
    );
}

export default Signup;