import "./Sidebar.css";

export default function Sidebar({ activeView, setActiveView }) {
    return (
        <div className="sidebar">
            <div className={`sidebar-item ${activeView === "notes" ? "active" : ""}`} onClick={() => setActiveView("notes")}>
                <span className="material-symbols-outlined hover active">lightbulb</span>
                <span className="sidebar-text">Notes</span>
            </div>
            <div className={`sidebar-item ${activeView === "reminders" ? "active" : ""}`} onClick={() => setActiveView("reminders")}>
                <span className="material-symbols-outlined hover">notifications</span>
                <span className="sidebar-text">Reminders</span>
            </div>
            <div className="sidebar-item">
                <span className="material-symbols-outlined hover">edit</span>
                <span className="sidebar-text">Edit Labels</span>
            </div>
            <div className="sidebar-item">
                <span className="material-symbols-outlined hover">archive</span>
                <span className="sidebar-text">Archive</span>
            </div>
            <div className="sidebar-item">
                <span className="material-symbols-outlined hover">delete</span>
                <span className="sidebar-text">Trash</span>
            </div>

            <p>Open-source licenses</p>
        </div>
    );
}