import React, { useContext } from "react";

import { AppContext } from "../../_context/AppContext";
import { IoIosArrowBack } from 'react-icons/io';
import "./buttons.css";

const Buttons = () => {
    const context = useContext(AppContext);

    return (
        <div id="buttons-container">
            {context.addNewBookActiveStep !== 1 &&
                <div className="btn is-flex is-flex-aligned-center is-justify-center"
                    onClick={context.depositGoToPreviousStep}>
                    < IoIosArrowBack size={20}/>
                    <p>{`Back`}</p>
                </div>
            }
            <div className={`${context.nextBtnIsEnabled ? "next-btn-enabled" : "next-btn-disabled"} btn`}
                onClick={context.nextBtnIsEnabled ? context.depositGoToNextStep : null}>
                <p>{`${context.nextBtnIsEnabled ? "Next" : context.isNewSubgenreScreen ? "Please add subgenre data" : "Please select one "}`}</p>
            </div>
        </div>
    );
}

export default Buttons;
