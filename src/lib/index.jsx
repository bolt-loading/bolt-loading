import "./style/style.scss";
import React from "react";
import Loadings from "./loadings";

const Index = props => {
    return (
        <div className="loading-container">
            <Loadings.KitchenLoading />
        </div>
    )
}

export default Index;