import React, { useContext } from "react";
import { AppContext } from "../../_context/AppContext";
import SingleBreadCrumb from "./SingleBreadCrumb/SingleBreadCrumb";
import "./bread-crumbs.css";

const BreadCrumbs = () => {
    const context = useContext(AppContext);

    return (
        <div id="bread-crumbs-container" className="is-flex is-flex-aligned-center">
            <SingleBreadCrumb
                stepMark={1}
                stepSubtitle="Genre"
                isActive={context.addNewBookActiveStep === 1 ? true : false}
                hasPassed={context.addNewBookActiveStep > 1 ? true : false} />
            <SingleBreadCrumb stepMark={2}
                stepSubtitle="Subgenre"
                isActive={context.addNewBookActiveStep === 2 ? true : false}
                hasPassed={context.addNewBookActiveStep > 2 ? true : false} />
            <SingleBreadCrumb
                stepMark={3}
                stepSubtitle={(context.isNewSubgenreScreen || context.addNewBookActiveStep === 4) ? 
                    "Add new subgenre" : context.addNewBookActiveStep < 3 ? 
                    "..." : "Information"}
                isActive={context.addNewBookActiveStep === 3 ? true : false}
                hasPassed={context.addNewBookActiveStep > 3 ? true : false} />
            {(context.isNewSubgenreScreen || context.addNewBookActiveStep === 4) &&
                <SingleBreadCrumb
                    stepMark={4}
                    stepSubtitle="Information"
                    isActive={context.addNewBookActiveStep === 4 ? true : false} />
            }
        </div>
    );
}

export default BreadCrumbs;
