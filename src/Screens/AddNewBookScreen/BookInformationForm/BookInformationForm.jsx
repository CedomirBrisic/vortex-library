import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../_context/AppContext";
import { IoIosArrowBack } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import "./book-information-form.css";

const BookInformationForm = () => {
    const context = useContext(AppContext);
    const [newBookDataToSend, setNewBookDataToSend] = useState({
        ...context.newBookDataToSend,
        bookTitle: "",
        author: "",
        isbn: "",
        publisher: "",
        datePublished: "",
        numberOfPages: "",
        format: "",
        edition: "",
        editionLanguage: "",
        description: ""
    })
    const [authorsToDisplay, setAuthorsToDisplay] = useState("")
    const [publishersToDisplay, setPublishersToDisplay] = useState("")
    const [formatsToDisplay, setFormatsToDisplay] = useState("")
    const [editionLanguagesToDisplay, setEditionLanguagesToDisplay] = useState("")
    const [isValidationFailed, setIsValidationFailed] = useState(false)
    const [isSuccessfullySubmited, setSuccessfullySubmited] = useState(false)

    useEffect(() => {
        const authorsOutput = context.dummyData.authors.map((author, index) => {
            return <option value={author.name} key={`author-${index}`}>{author.name}</option>
        })
        const publishersOutput = context.dummyData.publishers.map((publisher, index) => {
            return <option value={publisher.name} key={`publisher-${index}`}>{publisher.name}</option>
        })
        const formatsOutput = context.dummyData.formats.map((format, index) => {
            return <option value={format.name} key={`format-${index}`}>{format.name}</option>
        })
        const editionLanguagesOutput = context.dummyData.editionLanguages.map((editionLanguage, index) => {
            return <option value={editionLanguage.name} key={`editionLanguage-${index}`}>{editionLanguage.name}</option>
        })
        setAuthorsToDisplay(authorsOutput)
        setPublishersToDisplay(publishersOutput)
        setFormatsToDisplay(formatsOutput)
        setEditionLanguagesToDisplay(editionLanguagesOutput)
    }, [])

    const depositNewBookDataToSendProperty = (event) => {
        const property = event.target.getAttribute("data-property")
        setNewBookDataToSend({
            ...newBookDataToSend,
            [property]: event.target.value
        })
    }

    const submitNewBook = () => {
        if (newBookDataToSend.bookTitle && newBookDataToSend.author &&
            newBookDataToSend.isbn && newBookDataToSend.publisher &&
            newBookDataToSend.datePublished && newBookDataToSend.numberOfPages &&
            newBookDataToSend.format && newBookDataToSend.edition &&
            newBookDataToSend.editionLanguage &&
            (!newBookDataToSend.subgenre.isDescriptionRequired || (newBookDataToSend.subgenre.isDescriptionRequired && newBookDataToSend.description))) {
            console.log("FETCH --->>>", newBookDataToSend)
            setSuccessfullySubmited(true)
        } else {
            setIsValidationFailed(true)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const resetAddNewBook = () => {
        setIsValidationFailed(false)
        setSuccessfullySubmited(false)
        context.resetAddNewBook()
    }
    return (
        <>
            <div id="book-information-form-container">
                <div className="single-field-wrapper">
                    <label htmlFor="bookTitle">Book Title</label>
                    <input type="text" name="bookTitle" id="bookTitle" placeholder="Book title"
                        data-property="bookTitle"
                        value={newBookDataToSend.bookTitle}
                        onChange={((event) => depositNewBookDataToSendProperty(event))} />
                    <p className={isValidationFailed && !newBookDataToSend.bookTitle ? "validation-disclaimer" : "hide-disclaimer"}>*Please fill book title</p>
                </div>
                {/* ------------------------------------------------ */}
                <div className="single-field-wrapper">
                    <select name="authors" id="authors" className={newBookDataToSend.author ? "selected-dropdown-color" : "defualt-dropdown-color"}
                        data-property="author"
                        value={newBookDataToSend.author}
                        onChange={((event) => depositNewBookDataToSendProperty(event))}>
                        <option value="" selected disabled className="hide-option">Author</option>
                        {authorsToDisplay}
                    </select>
                    <p className={isValidationFailed && !newBookDataToSend.author ? "validation-disclaimer" : "hide-disclaimer"}>*Please choose author</p>
                </div>
                {/* ------------------------------------------------ */}
                <div className="single-field-wrapper">
                    <label htmlFor="isbn">ISBN</label>
                    <input type="text" name="isbn" id="isbn" placeholder="ISBN"
                        data-property="isbn"
                        value={newBookDataToSend.isbn}
                        onChange={((event) => depositNewBookDataToSendProperty(event))} />
                    <p className={isValidationFailed && !newBookDataToSend.isbn ? "validation-disclaimer" : "hide-disclaimer"}>*Please fill ISBN</p>
                </div>
                {/* ------------------------------------------------ */}
                <div className="single-field-wrapper">
                    <select name="publishers" id="publishers" className={newBookDataToSend.publisher ? "selected-dropdown-color" : "defualt-dropdown-color"}
                        data-property="publisher"
                        value={newBookDataToSend.publisher}
                        onChange={((event) => depositNewBookDataToSendProperty(event))}>
                        <option value="" selected disabled className="hide-option">Publisher</option>
                        {publishersToDisplay}
                    </select>
                    <p className={isValidationFailed && !newBookDataToSend.publisher ? "validation-disclaimer" : "hide-disclaimer"}>*Please choose publisher</p>
                </div>
                {/* ------------------------------------------------ */}
                <div className="single-field-wrapper short-field">
                    <label htmlFor="datePublished">Date published</label>
                    <input type="date" name="datePublished" id="datePublished" className={newBookDataToSend.datePublished ? "selected-dropdown-color" : "defualt-dropdown-color"}
                        data-property="datePublished"
                        value={newBookDataToSend.datePublished}
                        onChange={((event) => depositNewBookDataToSendProperty(event))} />
                    <p className={isValidationFailed && !newBookDataToSend.datePublished ? "validation-disclaimer" : "hide-disclaimer"}>*Please fill date published</p>
                </div>
                {/* ------------------------------------------------ */}
                <div className="single-field-wrapper short-field">
                    <label htmlFor="numberOfPages">Number of pages</label>
                    <input type="number" name="numberOfPages" id="numberOfPages"
                        data-property="numberOfPages"
                        value={newBookDataToSend.numberOfPages}
                        onChange={((event) => depositNewBookDataToSendProperty(event))} />
                    <p className={isValidationFailed && !newBookDataToSend.numberOfPages ? "validation-disclaimer" : "hide-disclaimer"}>*Please fill number of pages</p>
                </div>
                {/* ------------------------------------------------ */}
                <div className="single-field-wrapper short-field">
                    <select name="format" id="format" className={newBookDataToSend.format ? "selected-dropdown-color" : "defualt-dropdown-color"}
                        data-property="format"
                        value={newBookDataToSend.format}
                        onChange={((event) => depositNewBookDataToSendProperty(event))}>
                        <option value="" selected disabled className="hide-option">Format</option>
                        {formatsToDisplay}
                    </select>
                    <p className={isValidationFailed && !newBookDataToSend.format ? "validation-disclaimer" : "hide-disclaimer"}>*Please choose format</p>
                </div>
                {/* ------------------------------------------------ */}
                <div className="edition-inputs-container">
                    <div className="single-field-wrapper short-field">
                        <label htmlFor="edition">Edition</label>
                        <input type="text" name="edition" id="edition" placeholder="Edition"
                            data-property="edition"
                            value={newBookDataToSend.edition}
                            onChange={((event) => depositNewBookDataToSendProperty(event))} />
                        <p className={isValidationFailed && !newBookDataToSend.edition ? "validation-disclaimer" : "hide-disclaimer"}>*Please fill edition</p>
                    </div>
                    <div className="single-field-wrapper short-field">
                        <label htmlFor="editionLanguage">Edition language</label>
                        <select name="editionLanguage" id="editionLanguage" className={newBookDataToSend.editionLanguage ? "selected-dropdown-color" : "defualt-dropdown-color"}
                            data-property="editionLanguage"
                            value={newBookDataToSend.editionLanguage}
                            onChange={((event) => depositNewBookDataToSendProperty(event))}>
                            <option value="" selected disabled className="hide-option">Edition language</option>
                            {editionLanguagesToDisplay}
                        </select>
                        <p className={isValidationFailed && !newBookDataToSend.editionLanguage ? "validation-disclaimer" : "hide-disclaimer"}>*Please choose edition language</p>
                    </div>
                </div>
                {/* ------------------------------------------------ */}
                <div className="single-field-wrapper">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" rows="10" placeholder="Type the description..."
                        data-property="description"
                        value={newBookDataToSend.description}
                        onChange={((event) => depositNewBookDataToSendProperty(event))}>
                    </textarea>
                    <p className={newBookDataToSend.subgenre.isDescriptionRequired && isValidationFailed && !newBookDataToSend.description ? "validation-disclaimer" : "hide-disclaimer"}>*Please fill description</p>
                </div>
                <div className="horizontal-line"></div>

                <div id="buttons-container">
                    <div className="btn is-flex is-flex-aligned-center is-justify-center"
                        onClick={context.depositGoToPreviousStep}>
                        < IoIosArrowBack size={20} />
                        <p>{`Back`}</p>
                    </div>
                    <div className="next-btn-enabled btn"
                        onClick={submitNewBook}>
                        <p>Add book</p>
                    </div>
                </div>
            </div>
            {isSuccessfullySubmited &&
                <div className="successfully-submitted-container">
                    <div className="checkmark-wrapper">
                        <FaCheck size={42} color="green" className="checkmark-arrow" />
                    </div>
                    <p>Book added successfully</p>
                    <div className="add-another-book-btn" onClick={resetAddNewBook}>
                        <p>Add another book</p>
                    </div>
                </div>}
        </>
    );
}

export default BookInformationForm;
