import React, { useContext } from "react";
import { AppContext } from "../_context/AppContext";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import Tiles from "./Tiles/Tiles";
import Buttons from "./Buttons/Buttons";
import AddNewSubgenreForm from "./AddNewSubgenreForm/AddNewSubgenreForm"
import BookInformationForm from "./BookInformationForm/BookInformationForm";
import "./add-new-book-screen.css";

const AddNewBookScreen = () => {
    const context = useContext(AppContext);

    return (
        <div id="add-new-book-screen-container">
            <h1>Add book - New book</h1>
            <BreadCrumbs />
            {context.addNewBookActiveStep < 3 &&
                <Tiles />}
            {context.isNewSubgenreScreen &&
                <AddNewSubgenreForm />}
            {((context.addNewBookActiveStep === 3 && !context.isNewSubgenreScreen) || context.addNewBookActiveStep === 4) &&
                <BookInformationForm />}
            {(context.addNewBookActiveStep < 3 || context.isNewSubgenreScreen) &&
                <>
                    <div className="horizontal-line"></div>
                    <Buttons />
                </>}
        </div >
    );
}

export default AddNewBookScreen;
