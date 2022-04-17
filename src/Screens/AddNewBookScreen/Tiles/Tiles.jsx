import React, { useContext, useEffect, useState } from "react";

import { AppContext } from "../../_context/AppContext";
import SingleTile from "./SingleTile/SingleTile";
import "./tiles.css";

const Tiles = () => {
    const context = useContext(AppContext);
    const [tilesToDisplay, setTilesToDisplay] = useState("");


    useEffect(() => {
        switch (context.addNewBookActiveStep) {
            case 1:
                depositGenresTiles()
                break;
            case 2:
                depositSubgenresTiles()
                break;
            case 3:
                calculateStep3Tiles()
                break;
            default:
                console.log(`vortex library`);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.addNewBookActiveStep]);

    const depositGenresTiles = () => {
        const output = context.dummyData.genres.map((genre, i) => {
            return <SingleTile key={`SingleTile-${i}`}
                tileType="genres"
                title={genre.name}
                tileGenreIndex={i} />
        })
        setTilesToDisplay(output)
    }

    const depositSubgenresTiles = () => {
        const output = context.possibleSubGenres.map((subgenre, i) => {
            return <SingleTile key={`SingleTile-${i}`}
                tileType="subgenre"
                title={subgenre.name}
                tileGenreIndex={i} />
        })
        setTilesToDisplay(output)
    }

    const calculateStep3Tiles = () => {

    }

    return (
        <div id="tiles-container"
            className="is-flex">
            {tilesToDisplay}
            {context.addNewBookActiveStep === 2 &&
            <SingleTile key="add-new-subgenre"
            tileType="addNewSubgenre"
            title="Add new"
            tileGenreIndex="" />}
        </div>
    );
}

export default Tiles;
