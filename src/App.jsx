import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Form from "./components/Form/Form.jsx";
import Notes from "./components/Notes/Notes.jsx";
import Note from "./components/Notes/Note.jsx";

const NOTES = [{
    id: "123",
    title: "Hello",
    text: "World"
}]

function App() {

    const [notes, setNotes] = useState(NOTES);

    const addNote = (note) => {
        setNotes((prevNotes) => {
            return [...notes, note]
        });
    };

    return (
        <div>
            <Navbar />
            <Sidebar />
            <Form addNote={addNote} />
            <Notes notes={notes}/>
        </div>
    );
}

export default App;