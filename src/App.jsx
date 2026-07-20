import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Form from "./components/Form/Form.jsx";
import Notes from "./components/Notes/Notes.jsx";
import Note from "./components/Notes/Note.jsx";
import Modal from "./components/Modal/Modal.jsx";

const NOTES = [];

function App() {

    const [notes, setNotes] = useState(NOTES);
    const [selectedNote, setSelectedNotes] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addNote = (note) => {
        setNotes((prevNotes) => {
            return [...prevNotes, note];
        });
    };

    const editNote = (editedNote) => {
        setNotes(prevNotes => {
            const newArray = prevNotes.map(note => {
            if(editedNote.id === note.id) {
                note.title = editedNote.title
                note.text = editedNote.text
            }
            return note;
            })
            return newArray;
        })
    };

    const deleteNote = (id) => {
        setNotes((prevNotes) => {
            return prevNotes.filter(note => id !== note.id);
        });
    };

    const toggleModal = () => {
        setIsModalOpen(prevState => {
            return !prevState;
        })
    }

    return (
        <div>
            <Navbar />
            <Sidebar />
            <Form addNote={addNote} />
            <Notes notes={notes} deleteNote={deleteNote} toggleModal={toggleModal} setSelectedNotes={setSelectedNotes} />
            {isModalOpen && (<Modal isModalOpen={isModalOpen} selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote}/>)}

        </div>
    );
}

export default App;