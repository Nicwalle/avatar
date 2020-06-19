import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar";
import React from "react";

export default function ElementProgress(props) {
    let {name, value, color, image} = props;

    return <div style={{width:'70%'}}>
        <CircularProgressbarWithChildren
            value={value || 0}
            circleRatio={0.75}
            strokeWidth={18}
            styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                strokeLinecap: "round",
                trailColor: '#cb926a',
                pathColor: color,
            })}
        >
            <img alt={name} src={image} width={'40%'} />
        </CircularProgressbarWithChildren>
    </div>
}
