import React from "react";
import { Typography, Link } from "@material-ui/core";

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Organizer
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};

export default Copyright;
