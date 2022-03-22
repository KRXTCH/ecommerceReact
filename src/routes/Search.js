// Lorys Jelezian
import React from 'react';
import { Header} from "../component/Header";
import { Cocktails} from "../component/Cocktails";

export default function Search() {
    const [value, setValue] = React.useState('');
    return (<><Header value={value} setValue={setValue}></Header>
        <Cocktails name={value}></Cocktails></>);
}