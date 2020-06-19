import React from "react";
import Title from "../components/title/Title";
import {useHistory} from 'react-router-dom';

export default function SizaineSettingsPage(props) {
    const history = useHistory();

    return <>
        <Title goBack={()=>history.goBack()}/>
    </>
}
