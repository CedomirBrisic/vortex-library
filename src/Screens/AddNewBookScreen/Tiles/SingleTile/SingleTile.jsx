import React, { useContext } from "react";
import { AppContext } from "../../../_context/AppContext";

import "./single-tile.css";

const SingleTile = (props) => {
    const context = useContext(AppContext);

    const calculateWhatToDeposit = (inputData) => {
        switch (inputData) {
            case "genres":
                context.depositNewBookGenre(context.dummyData.genres[props.tileGenreIndex])
                break;
            case "subgenre":
                context.depositNewBookSubgenre(context.possibleSubGenres[props.tileGenreIndex])
                break;
            case "addNewSubgenre":
                context.depositSelectToAddNewSubgenre()
                break;
            default:
                console.log(`vortex library`);
        }
    }

    return (
        <div id="single-tile-container"
            onClick={() => calculateWhatToDeposit(props.tileType)}>
            <div className={(context.newBookDataToSend.genre?.name === props.title || context.newBookDataToSend.subgenre?.name === props.title || (context.isNewSubgenreSelectedToAdd && props.tileType === "addNewSubgenre") ? "is-selected" : "is-not-selected")}>
            <p>{props.title}</p>
        </div>
        </div >
    );
}

export default SingleTile;