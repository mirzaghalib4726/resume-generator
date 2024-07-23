import { useState } from "react";
import "../styles/style.css";

export default function PracticalExperience({
  ActiveComponent,
  setComponent,
  initialCompany,
  initialPosition,
  initialResponsibilities,
  initialFromDate,
  initialToDate,
}) {
  const [editable, setEditable] = useState(false);
  const [editButtonState, setEditButtonState] = useState(false);
  const [saveButtonState, setSaveButtonState] = useState(true);

  const [company, setCompany] = useState(initialCompany || "");
  const [position, setPosition] = useState(initialPosition || "");
  const [responsibilities, setResponsibilities] = useState(
    initialResponsibilities || ""
  );
  const [fromDate, setFromDate] = useState(initialFromDate || "");
  const [toDate, setToDate] = useState(initialToDate || "");

  const toggleFormVisibility = () => {
    setComponent("practical");
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
    <div className="practical-experience">
      <button onClick={toggleFormVisibility}>Practical Experience</button>
      {ActiveComponent === "practical" && editable === true && (
        <form>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <label>Company:</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <label>Position:</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <label>Main Responsibilities:</label>
            <textarea
              type="text"
              value={responsibilities}
              onChange={(e) => setResponsibilities(e.target.value)}
              required
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <label>From Date:</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              required
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <label>To Date:</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              required
            />
          </div>
          <br />
        </form>
      )}
      {ActiveComponent === "practical" && editable === false && (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Company: &nbsp;</h3>
            <p>{company}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Position: &nbsp;</h3>
            <p>{position}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Main Responsibilities: &nbsp;</h3>
            <p>{responsibilities}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>From Date: &nbsp;</h3>
            <p>{fromDate}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>To Date: &nbsp;</h3>
            <p>{toDate}</p>
          </div>
        </>
      )}
      {ActiveComponent === "practical" && (
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
