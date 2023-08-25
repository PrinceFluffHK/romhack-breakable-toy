import React from "react";
import AbilityServices from "../../../../server/src/services/AbilityServices";

const AbilityDisplayList = ({ abilities }) => {
    const abilityList = AbilityServices.makeList(abilities);
    const abilityDisplay = abilityList.map((ability, index) => {
        let textClass = "";
        if (ability.name === "[No ability]") {
            textClass = "text-grayed";
        }
        return (
            <div key={index} className={`flex-single-ability ${textClass}`}>
                {ability.name}
            </div>
        );
    });

    return (
        <div id="ability-container" className="poke-grid-abilities-list">
            {abilityDisplay}
        </div>
    );
};

export default AbilityDisplayList;
