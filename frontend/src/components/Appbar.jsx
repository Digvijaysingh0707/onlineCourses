import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Appbar() {
    const navigate = useNavigate()
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: 4 }}>
            <Typography>Coursera</Typography>
            <div>
                <Button style={{ marginRight: 10 }} variant="contained" onClick={() => navigate("/signup")}>Sign up</Button>
                <Button variant="contained" onClick={() => navigate("/login")}>Sign in</Button>
            </div>
        </div>
    );
}

export default Appbar;