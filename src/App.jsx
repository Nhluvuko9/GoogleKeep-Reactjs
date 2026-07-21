import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Form from "./components/Form/Form.jsx";
import Notes from "./components/Notes/Notes.jsx";
import Modal from "./components/Modal/Modal.jsx";

const NOTES = [];

function App() {
    const [notes, setNotes] = useState(NOTES);
    const [reminders, setReminders] = useState([]);
    const [selectedNote, setSelectedNotes] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isColorPalette, setIsColorPalette] = useState(false);
    const [activeView, setActiveView] = useState("notes");

    const addNote = (note) => {
        if (note.reminder) {
            setReminders((prevReminders) => [...prevReminders, note]);
            return;
        }

        setNotes((prevNotes) => [...prevNotes, note]);
    };

    const editNote = (editedNote) => {
        setNotes((prevNotes) => {
            const newArray = prevNotes.map((note) => {
                if (editedNote.id === note.id) {
                    note.title = editedNote.title;
                    note.text = editedNote.text;
                }
                return note;
            });
            return newArray;
        });
    };

    const deleteNote = (id) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
        setReminders((prevReminders) => prevReminders.filter((note) => note.id !== id));
    };

    const addReminder = (note) => {
        const reminderNote = {
            ...note,
            id: `${note.id}-reminder`,
            reminder: "Later today",
        };
        setReminders((prevReminders) => [...prevReminders, reminderNote]);
    };

    const toggleModal = () => {
        setIsModalOpen((prevState) => !prevState);
    };

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const updateNoteColor = (id, color) => {
        const applyColorToNotes = (sourceNotes) =>
            sourceNotes.map((note) => (note.id === id ? { ...note, color } : note));

        setNotes((prevNotes) => applyColorToNotes(prevNotes));
        setReminders((prevReminders) => applyColorToNotes(prevReminders));
    };

    const visibleNotes = activeView === "reminders" ? reminders : notes;

    return (
        <div className={`app ${isDarkMode ? "dark-theme" : "light-theme"}`}>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Sidebar activeView={activeView} setActiveView={setActiveView} />
            <Form addNote={addNote} />
            <Notes
                notes={visibleNotes}
                deleteNote={deleteNote}
                toggleModal={toggleModal}
                setSelectedNotes={setSelectedNotes}
                addReminder={addReminder}
                emptyMessage={activeView === "reminders" ? "No reminders yet" : "Notes you add appear here"}
                updateNoteColor={updateNoteColor}
            />
            {isModalOpen && (<Modal isModalOpen={isModalOpen} selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote} />)}
        </div>
    );
}

export default App;