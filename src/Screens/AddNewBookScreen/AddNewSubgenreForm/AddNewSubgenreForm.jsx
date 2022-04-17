import React, { useContext } from "react";
import { AppContext } from "../../_context/AppContext";

import "./add-new-subgenre-form.css";

const AddNewSubgenreForm = () => {
    const context = useContext(AppContext);


    return (
        <div id="add-new-subgenre-form-container">
            <input className="txt-input" type="text" name="newSubgenre" id="newSubgenre" placeholder="Subgenre name"
                value={context.newlyAddedSubgenreName}
                onChange={(event) => context.depositNewlyAddedSubgenreName(event)} />
            <label htmlFor="isDescriptionRequired" className="is-flex is-flex-aligned-center">
                <input checked={context.isNewlyAddedSubgenreDescriptonRequired} onChange={(event) => context.depositIsNewlyAddedSubgenreDescriptonRequired(event)} type="checkbox" name="isDescriptionRequired" id="isDescriptionRequired" />
                Description is required for this subgenre
            </label>
        </div>
    );
}

export default AddNewSubgenreForm;
