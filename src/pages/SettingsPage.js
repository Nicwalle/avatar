import React from "react";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SizaineSettingsCard from "../components/sizaineSettingsCard/SizaineSettingsCard";
import Title from "../components/title/Title";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 16
    }
}));

export default function SettingsPage(props) {
    const classes = useStyles();

    let {data} = props;

    return <>
        <Title/>
        <Container className={classes.root}>
            <Grid container spacing={2} direction={'row'}>
                {data.map((sizaine, index)=> <Grid item xs={6} md={4} key={index}>
                    <SizaineSettingsCard sizaine={sizaine}/>
                </Grid>)}
            </Grid>
        </Container>
    </>
}
