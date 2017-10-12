import React from "react";
import imgReact from './img/react.png'

export default class TestComp extends React.Component {

    render() {
        return <div>
            <p>Hello, Component!</p>
            <img src={imgReact} alt=""/>
        </div>
    }
}
