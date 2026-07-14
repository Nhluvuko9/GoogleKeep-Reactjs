import "./Form.css";

export default function Form() {
    return (
        <main>
            <div className="form-container inactive-form">
                <form>
                    <div className="placeholder">
                        <input type="text" className="note-text" placeholder="Take a note..." />
                    </div>
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
                </form>
		    </div>
        </main>
    );
}