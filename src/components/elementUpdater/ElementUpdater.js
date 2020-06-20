import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import FireImage from "../../assets/images/fire.svg";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    elementImage: {
        width:32,
        height:32,
    },
    elementContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16
    },
    plusButton: {
        borderRadius: 50,
        marginLeft: 2,
        marginRight: 2,
        paddingLeft: 4,
        paddingRight: 4,
        minWidth: 48
    },
    elementValue: {
        width: 100,
    },
}));

export default function ElementUpdater(props) {

    const classes = useStyle();
    let {value, updateValue, element, label, image} = props;

    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(props.value);
    }, [props]);

    return <Grid container className={classes.elementContainer}>
        <TextField
            label={label}
            variant={'outlined'}
            type={'number'}
            value={inputValue}
            className={classes.elementValue}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <img
                            src={image}
                            alt={element}
                            className={classes.elementImage}
                        />
                    </InputAdornment>
                ),
            }}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={e => updateValue(e.target.value)}
        />
        {element==='bonus'
            ? (<>
                <Button aria-label="-2" variant={'outlined'} size={'large'} className={classes.plusButton} onClick={() => updateValue(value-2)}>-2</Button>
                <Button aria-label="-1" variant={'outlined'} size={'large'} className={classes.plusButton} onClick={() => updateValue(value-1)}>-1</Button>
            </>)
            : <></>}
        <Button aria-label="+1" variant={'outlined'} size={'large'} className={classes.plusButton} onClick={() => updateValue(value+1)}>+1</Button>
        <Button aria-label="+2" variant={'outlined'} size={'large'} className={classes.plusButton} onClick={() => updateValue(value+2)}>+2</Button>
        {element!=='bonus'
            ? <Button aria-label="+5" variant={'outlined'} size={'large'} className={classes.plusButton} onClick={() => updateValue(value+5)}>+5</Button>
            : <></>}
    </Grid>

}
