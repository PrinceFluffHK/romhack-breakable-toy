import React, { useEffect, useState } from "react";

const PokemonEdit = props => {
    const [projectData, setProjectData] = useState({})
    const projectId = 0 //set
    const getProjectData = async () => {
        try {
            const response = await fetch(`/api/v1/projects/${projectId}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`;
                const error = new Error(errorMessage);
                throw error;
            }
            const responseBody = await response.json()
            setProjectData(responseBody.projectData)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`);
        } 
    }

    useEffect(() => {
        getProjectData()
    }, [])

    const handleSubmit = () => {

    }

    const typeOptions = projectData.typeOptions

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="type1">
                <select
                    id="type1"
                    name="type1"
                    type
                >

                </select>
            </label>
            Hello from PokemonEdit
        </form>
    )
}

export default PokemonEdit