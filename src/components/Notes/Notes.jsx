import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
    const { notes, deleteNote, toggleModal, setSelectedNotes, addReminder, updateNoteColor, emptyMessage = "Notes you add appear here" } = props;

    return (
        <div className="notes">
            {notes.length === 0 ? (<p>{emptyMessage}</p>) : (
                notes.map((note, index) => (<Note key={index} note={note} deleteNote={deleteNote} toggleModal={toggleModal} setSelectedNotes={setSelectedNotes} addReminder={addReminder} updateNoteColor={updateNoteColor}/>
                ))
            )}
        </div>
    );
};

export default Notes;