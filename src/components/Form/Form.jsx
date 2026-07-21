import React, { useState } from "react";
import "./Form.css";
import { uid } from 'uid';

export default function Form(props) {
    const { edit, selectedNote, toggleModal } = props;
    const [title, setTitle] = useState((edit && selectedNote?.title) || "");
    const [text, setText] = useState((edit && selectedNote?.text) || "");
    const [isActiveForm, setIsActiveForm] = useState(edit);
    const [isReminderPopoverOpen, setIsReminderPopoverOpen] = useState(false);
    const [selectedReminder, setSelectedReminder] = useState("");

    const reminderOptions = [
        { label: "Later today", value: "later-today" },
        { label: "Tomorrow", value: "tomorrow" },
        { label: "Next week", value: "next-week" },
    ];

    const titleChangeHandler = (event) => setTitle(event.target.value);
    const textChangeHandler = (event) => {setText(event.target.value), setIsActiveForm(true);};

    const saveNote = () => {
        const hasContent = title.trim() || text.trim();

        if (!edit && hasContent) {
            props.addNote({
                id: uid(),
                title,
                text,
                reminder: selectedReminder || null,
            });
        } else if (edit) {
            props.editNote({
                id: selectedNote?.id,
                title,
                text,
            });
            toggleModal();
        }

        setTitle("");
        setText("");
        setSelectedReminder("");
        setIsReminderPopoverOpen(false);
        setIsActiveForm(false);
    };

    const submitClickHandler = (event) => {
        event.preventDefault();
        saveNote();
    };

    const formClickHandler = () => {
        if (!isActiveForm) {
            setIsActiveForm(true);
        }
    };

    const closeFormHandler = (event) => {
        event.preventDefault();
        saveNote();
    };

    const reminderButtonHandler = (event) => {
        event.stopPropagation();
        setIsReminderPopoverOpen((prevState) => !prevState);
    };

    const selectReminderHandler = (label) => {
        setSelectedReminder(label);
        setIsReminderPopoverOpen(false);
    };

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

                    {selectedReminder && <span className="selected-reminder">{selectedReminder}</span>}

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
                                <div className="tooltip reminder-menu-wrapper">
                                    <button type="button" className="reminder-trigger" onClick={reminderButtonHandler}>
                                        <span className="material-symbols-outlined hover small-icon" style={{color: '#444746'}}>notifications</span>
                                    </button>
                                    <span className="tooltip-text">Remind me</span>
                                    {isReminderPopoverOpen && (
                                        <div className="reminder-popover" onClick={(event) => event.stopPropagation()}>
                                            <p className="reminder-title">Reminder</p>
                                            {reminderOptions.map((option) => (
                                                <button key={option.value} type="button" className="reminder-option" onClick={() => selectReminderHandler(option.label)}>
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
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
                            <button type="button" className="close-btn" onClick={closeFormHandler}>Close</button>
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
                    )}
                </form>
            </div>
        </main>
    );
}