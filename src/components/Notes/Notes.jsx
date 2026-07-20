import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
    const { notes, deleteNote, toggleModal, setSelectedNotes } = props;

    return (
        <div className="notes">
            {notes.length === 0 ? (<p>Notes you add appear here</p>) : (
                notes.map((note, index) => (<Note key={index} note={note} deleteNote={deleteNote} toggleModal={toggleModal} setSelectedNotes={setSelectedNotes}/>
                ))
            )}
        </div>
    );
};

export default Notes;