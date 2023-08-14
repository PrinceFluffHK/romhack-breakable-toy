import React from "react";

const GenerationOptions = ({ projectRecord, setProjectRecord }) => {

    const genNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const handleChange = (event) => {
        setProjectRecord({
            ...projectRecord,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    const genRadio = genNumbers.map(number => {
        return(
            <label key={number} htmlFor={`radio-${number}`} className="radio-button">
                <input
                    id={`radio-${number}`}
                    type="radio"
                    name="generation"
                    value={number}
                    onChange={handleChange}
                >
                </input>
                {number}
            </label>
        )
    })

    return(
        <div className="radio-options">
            {genRadio}
        </div>
    )
}

export default GenerationOptions