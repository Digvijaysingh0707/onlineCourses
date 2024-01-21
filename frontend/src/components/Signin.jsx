import { Button, Card, TextField, Typography } from "@mui/material";

function Signin() {
    return (
        <div >
            <div style={{ paddingTop: 150, marginBottom: 10, display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h6">Welcome to Udemy. Sign in below</Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card variant="outlined" style={{ width: 400, padding: 20 }}>
                    <TextField fullWidth id="outlined-basic" label="Email" type={"text"} />
                    <br />
                    <TextField fullWidth id="outlined-basic" label="Password" type={"password "} />
                    <br />
                    <Button size={"small"} variant="contained">Sign in</Button>

                </Card>
            </div>
        </div>
    );
}

export default Signin;