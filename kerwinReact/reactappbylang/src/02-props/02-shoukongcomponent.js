import React, { useState } from 'react'
import './css/maizuo.css'
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'
import Tabbar from './maizuocomponent/Tabbar'
import Navbar from './maizuocomponent/Navbar'

export default function App() {
    const [current, setCurrent] = useState(0);
    const list = [{ id: 1, text: "film" }, { id: 2, text: "cinema" }, { id: 3, text: "center" }];

    const which = () => {
        switch (current) {
            case 0:
                return <Film />;
            case 1:
                return <Cinema />;
            case 2:
                return <Center />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Navbar event={() => setCurrent(2)} />

            {which()}

            <Tabbar event={(index) => setCurrent(index)} current={current} list={list} />
        </div>
    );
}





