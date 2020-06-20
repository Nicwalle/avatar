import React, {useState} from "react";
import Title from "../components/title/Title";
import {useHistory, useParams} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import FireImage from '../assets/images/fire.svg'
import WaterImage from '../assets/images/water.svg'
import EarthImage from '../assets/images/earth.svg'
import AirImage from '../assets/images/air.svg'
import BonusImage from '../assets/images/bonus.svg'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import ElementUpdater from "../components/elementUpdater/ElementUpdater";

const useStyle = makeStyles((theme) => ({
    title: {
    },
    image: {
        height:80,
    },
    titleBox: {
        backgroundColor: theme.palette.background.surface,
        zIndex:-1,
        padding: 16,
        position: 'relative'
    },
}));

export default function SizaineSettingsPage(props) {
    const history = useHistory();
    const {sizaineName} = useParams();
    const [loaded, setLoaded] = useState(false);
    const classes = useStyle();
    const {data, updateValue} = props;

    const sizaine = data.find(item => {
        return item.name === sizaineName
    });

    if (!loaded && sizaine !== undefined) {
        setLoaded(true);
    }

    return <>
        <Title goBack={()=>history.goBack()}/>
        <Grid container>
            <Grid item xs={12} >
                <Grid container direction={'row'} justify={'space-between'} alignItems={'center'} className={classes.titleBox}>
                    <Typography variant={'h3'} className={classes.title}>{sizaineName}</Typography>
                    <img
                        src={`https://firebasestorage.googleapis.com/v0/b/avatar-progress.appspot.com/o/${sizaineName}.png?alt=media`}
                        alt={sizaineName}
                        className={classes.image}
                    />
                </Grid>
            </Grid>
            {loaded
                ? <Grid item xs={12}>
                    <ElementUpdater label={'Feu'} element={'fire'} image={FireImage} value={sizaine.fire} updateValue={(newValue) => updateValue(sizaine.name, 'fire', newValue)}/>
                    <ElementUpdater label={'Air'} element={'air'} image={AirImage} value={sizaine.air} updateValue={(newValue) => updateValue(sizaine.name, 'air', newValue)}/>
                    <ElementUpdater label={'Terre'} element={'earth'} image={EarthImage} value={sizaine.earth} updateValue={(newValue) => updateValue(sizaine.name, 'earth', newValue)}/>
                    <ElementUpdater label={'Eau'} element={'water'} image={WaterImage} value={sizaine.water} updateValue={(newValue) => updateValue(sizaine.name, 'water', newValue)}/>
                    <ElementUpdater label={'Bonus'} element={'bonus'} image={BonusImage} value={sizaine.bonus} updateValue={(newValue) => updateValue(sizaine.name, 'bonus', newValue)}/>
                </Grid>
                : <></>}
        </Grid>
    </>
}
