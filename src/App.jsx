import { useState } from "react";
import "./App.css";
import EducationalExperience from "./components/EducationalExperience";
import GeneralInformation from "./components/GeneralInfo";
import PracticalExperience from "./components/PracticalExperience";

function App() {
  const [activeComponent, setActiveComponent] = useState("");

  return (
    <>
      <header className="App-header">
        <h1>My CV Builder</h1>
      </header>
      <div className="App">
        {
          <GeneralInformation
            ActiveComponent={activeComponent}
            setComponent={setActiveComponent}
            initialName={"John"}
            initialEmail={"abc@gmail.com"}
            initialPhone={"123456"}
          />
        }
        {
          <EducationalExperience
            ActiveComponent={activeComponent}
            setComponent={setActiveComponent}
            initialSchool={"John"}
            initialStudy={"abc@gmail.com"}
            initialDate={"2000-01-01"}
          />
        }
        {
          <PracticalExperience
            ActiveComponent={activeComponent}
            setComponent={setActiveComponent}
            initialCompany={"HiTech"}
            initialPosition={"Associate Software Enginner"}
            initialResponsibilities={""}
            initialFromDate={"2000-01-01"}
            initialToDate={"2000-01-01"}
          />
        }
      </div>
    </>
  );
}

export default App;
