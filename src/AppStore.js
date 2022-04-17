import React, { Component } from "react";

import { AppContext } from "./Screens/_context/AppContext";
import dummyData from "./data/dummy-data"
export default class AppStore extends Component {
    state = {
        dummyData: dummyData,
        addNewBookActiveStep: 1,
        newBookDataToSend: {
            genre: null,
            subgenre: null
        },
        possibleSubGenres: null,
        nextBtnIsEnabled: false,
        isNewSubgenreSelectedToAdd: false,
        isNewSubgenreScreen: false,
        newlyAddedSubgenreName: "",
        isNewlyAddedSubgenreDescriptonRequired: false
    }

    depositAddNewBookActiveStep = (inputData) => {
        let checkIsNewSubgenreScreen = false
        inputData === 3 && this.state.newlyAddedSubgenreName ? checkIsNewSubgenreScreen = true : checkIsNewSubgenreScreen = false
        this.setState({
            addNewBookActiveStep: inputData,
            nextBtnIsEnabled: true,
            isNewSubgenreScreen: checkIsNewSubgenreScreen
        })
    }

    depositNewBookGenre = (genreData) => {
        const data = {
            id: genreData.id,
            name: genreData.name
        }

        this.setState({
            newBookDataToSend: {
                ...this.state.newBookDataToSend,
                genre: data,
                subgenre: null
            },
            possibleSubGenres: genreData.subgenres,
            nextBtnIsEnabled: true,
            isNewSubgenreSelectedToAdd: false,
            newlyAddedSubgenreName: "",
            isNewlyAddedSubgenreDescriptonRequired: false
        })
    }

    depositNewBookSubgenre = (inputData) => {
        this.setState({
            newBookDataToSend: {
                ...this.state.newBookDataToSend,
                subgenre: inputData
            },
            nextBtnIsEnabled: true,
            isNewSubgenreSelectedToAdd: false,
            newlyAddedSubgenreName: "",
            isNewlyAddedSubgenreDescriptonRequired: false
        })
    }
    depositSelectToAddNewSubgenre = () => {
        this.setState({
            newBookDataToSend: {
                ...this.state.newBookDataToSend,
                subgenre: null
            },
            isNewSubgenreSelectedToAdd: true,
            nextBtnIsEnabled: true,

        })
    }

    depositGoToNextStep = () => {
        let checkNextBtnIsEnabled = false
        let checkIsNewSubgenreScreen = false
        let checkSubgenre = this.state.newBookDataToSend.subgenre
        switch (this.state.addNewBookActiveStep) {
            case 1:
                (this.state.newBookDataToSend.subgenre || this.state.isNewSubgenreSelectedToAdd) ?
                    checkNextBtnIsEnabled = true : checkNextBtnIsEnabled = false
                break;
            case 2:
                this.state.isNewSubgenreSelectedToAdd ? checkIsNewSubgenreScreen = true : checkIsNewSubgenreScreen = false
                this.state.newlyAddedSubgenreName ? checkNextBtnIsEnabled = true : checkNextBtnIsEnabled = false
                break;
            case 3:
                this.state.isNewSubgenreSelectedToAdd ? checkSubgenre =
                    { name: this.state.newlyAddedSubgenreName, isDescriptionRequired: this.state.isNewlyAddedSubgenreDescriptonRequired } :
                    checkSubgenre = this.state.newBookDataToSend.subgenre
                break;
            default:
                checkNextBtnIsEnabled = false
                checkIsNewSubgenreScreen = false
        }

        this.setState({
            addNewBookActiveStep: this.state.addNewBookActiveStep + 1,
            nextBtnIsEnabled: checkNextBtnIsEnabled,
            isNewSubgenreScreen: checkIsNewSubgenreScreen,
            newBookDataToSend: {
                ...this.state.newBookDataToSend,
                subgenre: checkSubgenre
            }
        })
    }
    depositGoToPreviousStep = () => {
        let checkIsNewSubgenreScreen = false
        this.state.addNewBookActiveStep === 4 ? checkIsNewSubgenreScreen = true : checkIsNewSubgenreScreen = false
        this.setState({
            addNewBookActiveStep: this.state.addNewBookActiveStep - 1,
            nextBtnIsEnabled: true,
            isNewSubgenreScreen: checkIsNewSubgenreScreen
        })
    }

    depositNewlyAddedSubgenreName = (event) => {
        const checkNextBtnIsEnabled = event.target.value ? true : false
        this.setState({
            newlyAddedSubgenreName: event.target.value,
            nextBtnIsEnabled: checkNextBtnIsEnabled
        })
    }

    depositIsNewlyAddedSubgenreDescriptonRequired = (event) => {
        this.setState({
            isNewlyAddedSubgenreDescriptonRequired: event.target.checked
        })
    }
    resetAddNewBook = () => {
        this.setState({
            addNewBookActiveStep: 1,
            newBookDataToSend: {
                genre: null,
                subgenre: null
            },
            possibleSubGenres: null,
            nextBtnIsEnabled: false,
            isNewSubgenreSelectedToAdd: false,
            isNewSubgenreScreen: false,
            newlyAddedSubgenreName: "",
            isNewlyAddedSubgenreDescriptonRequired: false
        })
    }

    render() {
        return (
            <>
                <AppContext.Provider value={{
                    ...this.state,
                    depositAddNewBookActiveStep: this.depositAddNewBookActiveStep,
                    depositNewBookGenre: this.depositNewBookGenre,
                    depositGoToNextStep: this.depositGoToNextStep,
                    depositGoToPreviousStep: this.depositGoToPreviousStep,
                    depositNewBookSubgenre: this.depositNewBookSubgenre,
                    depositSelectToAddNewSubgenre: this.depositSelectToAddNewSubgenre,
                    depositNewlyAddedSubgenreName: this.depositNewlyAddedSubgenreName,
                    depositIsNewlyAddedSubgenreDescriptonRequired: this.depositIsNewlyAddedSubgenreDescriptonRequired,
                    resetAddNewBook: this.resetAddNewBook
                }}>
                    {this.props.children}
                </AppContext.Provider >
            </>
        )
    }
}