import { useState } from "react";
import "../styles/style.css";

export default function EducationalExperience({
  ActiveComponent,
  setComponent,
  initialSchool,
  initialStudy,
  initialDate,
}) {
  const [editable, setEditable] = useState(false);
  const [editButtonState, setEditButtonState] = useState(false);
  const [saveButtonState, setSaveButtonState] = useState(true);

  const [school, setSchool] = useState(initialSchool || "");
  const [study, setStudy] = useState(initialStudy || "");
  const [date, setDate] = useState(initialDate || "");

  const toggleFormVisibility = () => {
    setComponent("education");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditable(true);
    setEditButtonState(true);
    setSaveButtonState(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setEditable(false);
    setEditButtonState(false);
    setSaveButtonState(true);
  };

  return (
    <div className="educational-experience">
      <button onClick={toggleFormVisibility}>Educational Experience</button>
      {ActiveComponent === "education" && editable === true && (
        <form>
          <div style={{ display: "flex", alignItems: "center", marginBottom: '10px' }}>
          <label>School: &nbsp;</label>
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          />
          </div>
          <br />
          <div style={{ display: "flex", alignItems: "center", marginBottom: '10px' }}>
          <label>Study: &nbsp;</label>
          <input
            type="text"
            value={study}
            onChange={(e) => setStudy(e.target.value)}
            required
          />
          </div>
          <br />
          <div style={{ display: "flex", alignItems: "center", marginBottom: '10px' }}>
          <label>Date: &nbsp;</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          </div>
          <br />
        </form>
      )}
      {ActiveComponent === "education" && editable === false && (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>School: &nbsp;</h3>
            <p>{school}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Study: &nbsp;</h3>
            <p>{study}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Date: &nbsp;</h3>
            <p>{date}</p>
          </div>
        </>
      )}
      {ActiveComponent === "education" && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={handleEdit} disabled={editButtonState}>
            Edit
          </button>
          <button onClick={handleSave} disabled={saveButtonState}>
            Save
          </button>
        </div>
      )}
    </div>
  );
}
