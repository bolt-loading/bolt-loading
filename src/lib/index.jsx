import "./style/style.scss";
import React, { useState, useEffect } from "react";
import Loadings from "./loadings";

const Index = props => {

    let [isShow, setIsShow] = useState(false);

    useEffect(() => props.isShow && setIsShow(props.isShow), [props.isShow])

    return (
        isShow && (
            <div className="loading-container">
                {
                    props.loadingAnimation ? <props.loadingAnimation /> : <Loadings.AppleLoading />
                }
            </div>
        )
    )
}

export {
    Loadings
}

export default Index;