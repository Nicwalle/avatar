import React from "react";
import './Title.css'
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import {ArrowBack} from "@material-ui/icons";

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
        textAlign: 'center'
    }
}));

export default function Title(props) {

    const classes = useStyles();

    let {goBack} = props;

    return <AppBar position={'static'}>
        <Container>
            <Toolbar style={{alignItems:'center'}}>
                <Typography variant="h6" className={classes.title}>
                    Avatar Progress
                </Typography>
                <span style={{position: 'absolute', left: 0}}>
                    <Button color="inherit" onClick={goBack}>
                        <SvgIcon component={ArrowBack}/>
                    </Button>
                </span>
            </Toolbar>
        </Container>
    </AppBar>;
}
