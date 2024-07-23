import { useState } from "react";
import "../styles/style.css";

export default function GeneralInfo({
  ActiveComponent,
  setComponent,
  initialName,
  initialEmail,
  initialPhone,
}) {
  const [editable, setEditable] = useState(false);
  const [editButtonState, setEditButtonState] = useState(false);
  const [saveButtonState, setSaveButtonState] = useState(true);

  const [name, setName] = useState(initialName || "");
  const [email, setEmail] = useState(initialEmail || "");
  const [phone, setPhone] = useState(initialPhone || "");

  const toggleFormVisibility = () => {
    setComponent("general");
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

  const handleEditButtonState = (e) => {
    e.preventDefault();
  };
  return (
    <div className="general-info">
      <button onClick={toggleFormVisibility}>General Info</button>
      {ActiveComponent === "general" && editable === true && (
        <form>
          <div style={{ display: "flex", alignItems: "center", marginBottom: '10px' }}>
            <label>Name: &nbsp;</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <br />
          <div style={{ display: "flex", alignItems: "center", marginBottom: '10px' }}>
          <label>Email: &nbsp;</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </div>
          <br />
          <div style={{ display: "flex", alignItems: "center", marginBottom: '10px' }}>
          <label>Phone: &nbsp;</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          </div>
          <br />
        </form>
      )}
      {ActiveComponent === "general" && editable === false && (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Name: &nbsp;</h3>
            <p>{name}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Email: &nbsp;</h3>
            <p>{email}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Phone: &nbsp;</h3>
            <p>{phone}</p>
          </div>
        </>
      )}
      {ActiveComponent === "general" && (
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
