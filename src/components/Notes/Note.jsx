import React, { useState } from "react";

export default function Notes(props) {
    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);
    const [isHover, setisHover] = useState(false);

    const noteClickHandler = () => {
        setTitle(title);
        setText(text);
    }

    const hoverNoteHandler = () => {
        setisHover(true);
    };
    const hoverOutHandler = () => {
        setisHover(false);
    };
    const deleteHandler = () => props.deleteNote(props.id);

    return (
        <div className="note" id ={props.id} onClick={noteClickHandler} onMouseOver={hoverNoteHandler} onMouseOut={hoverOutHandler}>
            {isHover && (
                <span className="material-symbols-outlined check-circle">check_circle</span>
            )}
                <div className="title">{title}</div>
                <div className="text">{text}</div>
                    {isHover && (
                        <div className="note-footer" style={{visibility: isHover ? 'visible' : 'hidden'}}>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon">palette</span>
                                <span className="tooltip-text">Background options</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon">add_alert</span>
                                <span className="tooltip-text">Remind me</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon">person_add</span>
                                <span className="tooltip-text">Collaborator</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon">image</span>
                                <span className="tooltip-text">Add Image</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon archive-btn" onClick={deleteHandler}>archive</span>
                                <span className="tooltip-text">Archive</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon">more_vert</span>
                                <span className="tooltip-text">More</span>
                            </div>
                        </div>
                    )}

        </div>   
    );
}

