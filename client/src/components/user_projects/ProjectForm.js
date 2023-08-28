import React, { useState } from "react";
import ErrorList from "../layout/ErrorList";
import GenerationOptions from "./GenerationOptions.js";
import translateServerErrors from "../../services/translateServerErrors";
import { Redirect } from "react-router-dom";

const ProjectForm = (props) => {
    const [projectRecord, setProjectRecord] = useState({
        projectName: "",
        generation: 0,
        regionName: "",
        usePreset: true,
    });

    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [errors, setErrors] = useState({});

    const addNewProject = async () => {
        try {
            const response = await fetch("/api/v1/projects", {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json",
                }),
                body: JSON.stringify(projectRecord),
            });
            if (!response.ok) {
                if (response.status === 422) {
                    const body = await response.json();
                    const newErrors = translateServerErrors(body.errors);
                    return setErrors;
                } else {
                    const errorMessage = `${response.status} (${response.statusText})`;
                    const error = new Error(errorMessage);
                    throw error;
                }
            } else {
                setShouldRedirect(true);
            }
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`);
        }
    };

    if (shouldRedirect) {
        return <Redirect push to="/my-projects" />;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewProject();
    };

    const handleChange = (event) => {
        setProjectRecord({
            ...projectRecord,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };
    let usePresetValue = "";
    if (projectRecord.usePreset) {
        usePresetValue = "Yes";
    } else {
        usePresetValue = "No";
    }
    const handleCheckbox = (event) => {
        let bool;
        if (projectRecord.usePreset) {
            bool = false;
        } else {
            bool = true;
        }

        setProjectRecord({
            ...projectRecord,
            usePreset: bool,
        });
    };

    return (
        <div className="poke-grid">
            <div className="nav-pane-left" />
            <div>
                <h1>New Project</h1>
                <form onSubmit={handleSubmit} className="margins">
                    <label htmlFor="projectName">
                        <h3>Project Name</h3>
                        <input
                            id="projectName"
                            type="text"
                            name="projectName"
                            onChange={handleChange}
                            value={projectRecord.projectName}
                        />
                    </label>
                    <label htmlFor="regionName">
                        <h3>Region Name</h3>
                        <input
                            id="regionName"
                            type="text"
                            name="regionName"
                            onChange={handleChange}
                            value={projectRecord.regionName}
                        />
                    </label>
                    <label htmlFor="usePreset">
                        <h3>
                            Use Preset?  
                            <button className="button" type="button" onClick={handleCheckbox} style={{marginLeft: "1rem", marginTop: ".55rem"}}>
                                {usePresetValue}
                            </button>
                        </h3>
                    </label>
                    <label htmlFor="generation">
                        <GenerationOptions
                            projectRecord={projectRecord}
                            setProjectRecord={setProjectRecord}
                        />
                    </label>
                    <input type="submit" className="button" value="Create Project" />
                </form>
            </div>
        </div>
    );
};

export default ProjectForm;
