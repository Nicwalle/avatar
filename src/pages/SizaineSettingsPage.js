import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";

export default function SizaineSettingsPage(props) {
    return <>
        <AppBar position={'static'}>
            <Toolbar style={{alignItems:'center'}}>
                <Typography variant="h6">
                    Avatar Progress
                </Typography>
            </Toolbar>
        </AppBar>
        </>
}
