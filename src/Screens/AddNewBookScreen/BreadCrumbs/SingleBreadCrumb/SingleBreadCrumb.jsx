import React, { useContext } from "react";
import { AppContext } from "../../../_context/AppContext";

import "./single-bread-crumb.css";

const SingleBreadCrumbs = (props) => {
    const context = useContext(AppContext);
    return (
        <div id="single-bread-crumbs-container"
            className="is-flex is-flex-column is-flex-aligned-center"
            onClick={props.hasPassed ? () => context.depositAddNewBookActiveStep(props.stepMark) : null}>

            <div className={`${props.isActive ? "is-active" : props.hasPassed ? "has-passed" : "not-passed"} bread-crumb-circle-wrapper`}>
                <p>{props.stepMark}</p>
            </div>
            <p>{props.stepSubtitle}</p>
        </div>
    );
}

export default SingleBreadCrumbs;
