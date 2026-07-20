import React, { useState } from "react";
import "./Form.css";
import { uid } from 'uid';

export default function Form(props) {
    const { edit, selectedNote, toggleModal } = props;
    const [title, setTitle] = useState((edit && selectedNote?.title) || "");
    const [text, setText] = useState((edit && selectedNote?.text) || "");
    const [isActiveForm, setIsActiveForm] = useState(edit);

    const titleChangeHandler = (event) => setTitle(event.target.value);
    const textChangeHandler = (event) => {setText(event.target.value), setIsActiveForm(true);};
    const submitClickHandler = (event) => {
        event.preventDefault();

        if(!edit) {
            props.addNote({
                id: uid(),
                title,
                text,
            });
            setIsActiveForm(false);
        } else {
            props.editNote({
                id: selectedNote?.id,
                title,
                text,
            });
            toggleModal();   
        }
        
        setTitle("");
        setText("");
    }

    const formClickHandler = () => {
        setIsActiveForm(true);
    }

    return (
        <main>
                <div className="form-container active-form" onClick={formClickHandler}>
                    <form onSubmit={submitClickHandler} className={isActiveForm ? "form" : ""}>
                        {isActiveForm && (
                            <div className="title">
                            <input onChange={titleChangeHandler} value={title} type="text" className="note-title" placeholder="Title" />
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon" style={{color: '#5d5f5f'}}>keep</span>
                                <span className="tooltip-text">Pin Note</span>
                            </div>
                            </div>
                        )}
                        <input onChange={textChangeHandler} value={text} type="text" className="note-text" placeholder="Take a note..." />
                        
                        {isActiveForm ? (
                            <div className="form-actions">
                            <div className="icons">
                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icon text-format" style={{color: '#444746'}}>text_format</span>
                                    <span className="tooltip-text">Formatting Options</span>
                                </div>
                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icon" style={{color: '#444746'}}>palette</span>
                                    <span className="tooltip-text">Change Color</span>
                                </div>
                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icon" style={{color: '#444746'}}>add_alert</span>
                                    <span className="tooltip-text">Remind me</span>
                                </div>
                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icon" style={{color: '#444746'}}>person_add</span>
                                    <span className="tooltip-text">Collaborator</span>
                                </div>
                
                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icon" style={{color: '#444746'}}>image</span>
                                    <span className="tooltip-text">Add Image</span>
                                </div>
                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icon archive-btn" style={{color: '#444746'}}>archive</span>
                                    <span className="tooltip-text">Archive</span>
                                </div>
                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icon" style={{color: '#444746'}}>more_vert</span>
                                    <span className="tooltip-text">More</span>
                                </div>
                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icon" style={{color: '#aaabab'}}>undo</span>
                                    <span className="tooltip-text">Undo</span>
                                </div>
                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icon" style={{color: '#aaabab'}}>redo</span>
                                    <span className="tooltip-text">Redo</span>
                                </div>
                            </div>
                            <button className="close-btn">Close</button>
                        </div>
                        ) : (
                            <div className="form-actions">
                        <div className="tooltip">
                            <span className="material-symbols-outlined hover checkbox">check_box</span>
                            <span className="tooltip-text">New List</span>
                        </div>
                            <div className="tooltip">
                            <span className="material-symbols-outlined hover" style={{color: '#535555'}}>brush</span>
                            <span className="tooltip-text">New note with drawing</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover">image</span>
                                <span className="tooltip-text">New note with image</span>
                            </div>
                        </div>
                        )
                        }

                        {/* <div id="checklist-container" style={{display: 'block', padding: '8px 0', border: '1px solid #d3d4d4'}}>
                            <div className="checklist-item" style={{display: 'flex', gap: '10px', width: '598px'}}>
                                <span className="material-symbols-outlined drag-indicator" style={{color: '#5d5f5f', cursor: 'move'}}>drag_indicator</span>
                                <input type="checkbox" style={{cursor: 'pointer'}} />
                                <input type="text" className="list-item-input" placeholder="List item" style={{border: 'none', outline: 'none', width: '100%'}} />
                                <span className="material-symbols-outlined" style={{color: 'black', cursor: 'pointer'}}>close</span>
                            </div>
                        </div> */}
                
                        
                    </form>
                </div>
           

        </main>
    );
}