import React, { useState } from "react";

export default function Notes(props) {
    const { toggleModal, note, setSelectedNotes, updateNoteColor } = props;
    const [isHover, setisHover] = useState(false);
    const [isColorOpen, setIsColorOpen] = useState(false);

    const noteClickHandler = () => {
        toggleModal();
        setSelectedNotes(note);
    };

    const hoverNoteHandler = () => {
        setisHover(true);
    };
    const hoverOutHandler = () => {
        setisHover(false);
    };
    const deleteHandler = (e) => {
        e.stopPropagation();
        props.deleteNote(note.id);
    };

    const iconClickHandler = (e) => {
        e.stopPropagation();
    };

    const toggleColorPalette = (e) => {
        e.stopPropagation();
        setIsColorOpen((prevState) => !prevState);
    };

    const selectColorHandler = (e, color) => {
        e.stopPropagation();
        updateNoteColor(note.id, color);
        setIsColorOpen(false);
    };

    const reminderClickHandler = (e) => {
        e.stopPropagation();
        props.addReminder(note);
    };

    return (
        <div className="note" id={props.id} onClick={noteClickHandler} onMouseOver={hoverNoteHandler} onMouseOut={hoverOutHandler} style={{ backgroundColor: note.color || "#fff" }}>
            {isHover && (
                <span className="material-symbols-outlined check-circle">check_circle</span>
            )}
            <div className="title">{note.title}</div>
            <div className="text">{note.text}</div>
            {note.reminder && <div className="reminder-chip">{note.reminder}</div>}
            {isHover && (
                <div className="note-footer" style={{visibility: isHover ? 'visible' : 'hidden'}} onClick={iconClickHandler}>
                    <div className="tooltip color-palette" onClick={toggleColorPalette}>
                        <div>
                            <span className="material-symbols-outlined hover small-icon">palette</span>
                            <span className="tooltip-text">Background options</span>
                        </div>
                        {isColorOpen && (
                            <div className="color-menu">
                                <div className="color-options">
                                    <button type="button" className="color-option" onClick={(e) => selectColorHandler(e, "#fff8e1")} style={{ backgroundColor: "#fff8e1" }} />
                                    <button type="button" className="color-option" onClick={(e) => selectColorHandler(e, "#fce8e6")} style={{ backgroundColor: "#fce8e6" }} />
                                    <button type="button" className="color-option" onClick={(e) => selectColorHandler(e, "#e8f0fe")} style={{ backgroundColor: "#e8f0fe" }} />
                                    <button type="button" className="color-option" onClick={(e) => selectColorHandler(e, "#e6f4ea")} style={{ backgroundColor: "#e6f4ea" }} />
                                    <button type="button" className="color-option" onClick={(e) => selectColorHandler(e, "#f3e8fd")} style={{ backgroundColor: "#f3e8fd" }} />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="tooltip" onClick={reminderClickHandler}>
                        <span className="material-symbols-outlined hover small-icon">add_alert</span>
                        <span className="tooltip-text">Remind me</span>
                    </div>
                    <div className="tooltip" onClick={iconClickHandler}>
                        <span className="material-symbols-outlined hover small-icon">person_add</span>
                        <span className="tooltip-text">Collaborator</span>
                    </div>
                    <div className="tooltip" onClick={iconClickHandler}>
                        <span className="material-symbols-outlined hover small-icon">image</span>
                        <span className="tooltip-text">Add Image</span>
                    </div>
                    <div className="tooltip" onClick={iconClickHandler}>
                        <span className="material-symbols-outlined hover small-icon archive-btn" onClick={deleteHandler}>archive</span>
                        <span className="tooltip-text">Archive</span>
                    </div>
                    <div className="tooltip" onClick={iconClickHandler}>
                        <span className="material-symbols-outlined hover small-icon">more_vert</span>
                        <span className="tooltip-text">More</span>
                    </div>
                </div>
            )}
        </div>
    );
}

