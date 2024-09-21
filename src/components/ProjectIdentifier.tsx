import React, { useState } from "react";
import Button from "./Button";

interface Props {
  setProjectCode: React.Dispatch<React.SetStateAction<string>>;
}

function ProjectIdentifier({ setProjectCode }: Props) {
  const [projectID, setProjectID] = useState("ID");
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const handleProjectIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectID(e.target.value.toUpperCase());
  };

  const onButtonClick = () => {
    setIsInputDisabled(!isInputDisabled);
    setProjectCode(projectID);
  };

  return (
    <>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label className="col-form-label">Project ID:</label>
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            onChange={handleProjectIdChange}
            disabled={isInputDisabled}
            value={projectID}
          />
        </div>
        <div className="col-auto">
          <Button handleButtonClick={onButtonClick}>
            {isInputDisabled ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-lock"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-unlock"
                viewBox="0 0 16 16"
              >
                <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2M3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
              </svg>
            )}
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProjectIdentifier;
