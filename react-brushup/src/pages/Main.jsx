import React, { Component } from "react";
import { Route } from "react-router-dom";

//Import Pages
import home from "./home";

class Main extends Component {
    render() {
        return (
            <div>
                {/*Render Different Pages based on Route*/}
                <Route exact path="/" component={home} />
            </div>
        );
    }
}

//Export The Main Page
export default Main;
