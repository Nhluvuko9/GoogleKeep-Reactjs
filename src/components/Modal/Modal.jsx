import React, {useState} from "react";
import "./Modal.css";
import Form from "../Form/Form";

export default function Modal(props) {
    const { isModalOpen, selectedNote, toggleModal, editNote } = props;

    const [hasCursor, setHasCursor] = useState(false);

    const handleCloseModal = () => !hasCursor && toggleModal();
    const handleMouseOverNote = () => setHasCursor(true);
    const handleMouseOutNote = () => setHasCursor(false);

    return (
        <div className={`modal ${isModalOpen ? "open-modal" : ""}`} onClick={handleCloseModal}>
            <div className="modal-content" onMouseOver={handleMouseOverNote} onMouseOut={handleMouseOutNote}>
                <Form selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote} edit/>
            </div>
        </div>
    );
};