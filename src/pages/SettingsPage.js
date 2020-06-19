import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SizaineSettingsCard from "../components/sizaineSettingsCard/SizaineSettingsCard";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 16
    }
}));

export default function SettingsPage(props) {
    const classes = useStyles();

    let {data} = props;

    return <>
        <AppBar position={'static'}>
            <Toolbar style={{alignItems:'center'}}>
                <Typography variant="h6">
                    Avatar Progress
                </Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.root}>
            <Grid container spacing={2} direction={'row'}>
                {data.map((sizaine, index)=> <Grid item xs={6} md={4} key={index}>
                    <SizaineSettingsCard sizaine={sizaine}/>
                </Grid>)}
            </Grid>
        </Container>
    </>
}
