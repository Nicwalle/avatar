import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles"
import React from "react";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        width: 100,
        height: 100,
    },
    card: {
        borderRadius: 16,
        paddingTop:24,
    },
    cardColor: props => ({
        background: props.sizaine.color
    }),
    cardContent: {
        color: theme.palette.common.white,
    },
    sizaineName: {
        fontSize: 20
    },
    sizaineScore: {
        textAlign: 'center'
    }
}));

export default function SizaineSettingsCard(props) {
    const classes = useStyles(props);

    let {sizaine} = props;
    let {name, air, earth, fire, water, bonus} = sizaine;
    const score = air + earth + fire + water + bonus;

    return <Link to={'/settings/'+ name} style={{ textDecoration: 'none' }}>
        <Card className={`${classes.card} ${classes.cardColor}`} raised>
            <Grid container direction={'column'} alignItems={'center'}>
                <Grid item>
                    <CardMedia
                        image={`https://firebasestorage.googleapis.com/v0/b/avatar-progress.appspot.com/o/${sizaine.name}.png?alt=media`}
                        className={classes.cardMedia}
                        title={sizaine.name}
                    />
                </Grid>
                <Grid item>
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.sizaineName}>{sizaine.name}</Typography>
                        <Typography className={classes.sizaineScore}><b style={{fontSize:24}}>{score}</b> points</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    </Link>
}
