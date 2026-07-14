import "./Form.css";

export default function FormActive() {
    return (
        <main>
            <div className="form-container active-form">
                <form className="form" id="form">
                    <div className="title">
                    <input id="note-title" type="text" className="note-title" placeholder="Title" />
                    <div className="tooltip">
                        <span className="material-symbols-outlined hover small-icon" style={{color: '#5d5f5f'}}>keep</span>
                        <span className="tooltip-text">Pin Note</span>
                    </div>
                    </div>
                    <input id="note-text" type="text" className="note-text" placeholder="Take a note..." />
                    
                    <div id="checklist-container" style="display: block; padding: 8px 0; border-top: 1px solid #d3d4d4; border-bottom: 1px solid #d3d4d4;">
                    <div className="checklist-item" style="display: flex; align-items: center; gap: 10px; width: 598px;">
                        <span className="material-symbols-outlined" style="color: #5d5f5f; font-size: 20px; cursor: move; align-items: start;">drag_indicator</span>
                        <input type="checkbox" style="cursor: pointer;" />
                        <input type="text" className="list-item-input" placeholder="List item" style="border: none; outline: none; width: 100%; font-size: 0.9rem;" />
                        <span className="material-symbols-outlined" style="color: black; font-size: 20px; cursor: pointer;">close</span>
                    </div>
                    </div>
            
                    <div className="form-actions">
                        <div className="icons">
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon" style="color: #444746; font-size: 1.4rem;">text_format</span>
                                <span className="tooltip-text">Formatting Options</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon" style="color: #444746;">palette</span>
                                <span className="tooltip-text">Change Color</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon" style="color: #444746;">add_alert</span>
                                <span className="tooltip-text">Remind me</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon" style="color: #444746;">person_add</span>
                                <span className="tooltip-text">Collaborator</span>
                            </div>
            
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon" style="color: #444746;">image</span>
                                <span className="tooltip-text">Add Image</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon archive-btn" style="color: #444746;">archive</span>
                                <span className="tooltip-text">Archive</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon" style="color: #444746;">more_vert</span>
                                <span className="tooltip-text">More</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon" style="color: #aaabab;">undo</span>
                                <span className="tooltip-text">Undo</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icon" style="color: #aaabab;">redo</span>
                                <span className="tooltip-text">Redo</span>
                            </div>
                        </div>
                        <button className="close-btn">Close</button>
                    </div>
                </form>
            </div>
        </main>
    );
}