import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Form from "./components/Form/Form.jsx";
import Notes from "./components/Notes/Notes.jsx";
import Note from "./components/Notes/Note.jsx";
import Modal from "./components/Modal/Modal.jsx";

const NOTES = [
    // {
    //     id: "123",
    //     title: "Hello",
    //     text: "World"
    // }
];

function App() {

    const [notes, setNotes] = useState(NOTES);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addNote = (note) => {
        setNotes((prevNotes) => {
            return [...prevNotes, note];
        });
    };

    const deleteNote = (id) => {
        setNotes((prevNotes) => {
            return prevNotes.filter(note => id !== note.id);
        });
    };

    return (
        <div>
            <Navbar />
            <Sidebar />
            <Form addNote={addNote} />
            <Notes notes={notes} deleteNote={deleteNote}/>
            <Modal isModalOpen={isModalOpen}/>
        </div>
    );
}

export default App;