import React from "react";
import ReactDom from "react-dom";
import TestComp from "./assets/TestComp.jsx";
import "./assets/styles/style.scss";

class App extends React.Component {

    render() {
        return (
        <div>Hello, World!
            <TestComp />
        </div>
        );
    }
}
ReactDom.render(
    <App />,
    document.getElementById('wrapper')
);

export default App;