import React from "react";
import AbilityServices from "../../../../server/src/services/AbilityServices";

const AbilityDisplayShow = ({ abilities }) => {
    const abilityList = AbilityServices.makeList(abilities)
    const abilityDisplay = abilityList.map(ability => {
        let textClass = ""
        if (ability.name === "[No ability]") {
            textClass = "text-grayed"
        }
        return(
            <h4 className={textClass}>{ability.slot}. {ability.name}</h4>
        )
    })
    return(
        <div className="flex-show-top">
            <h3>Abilities:</h3>
            {abilityDisplay}
        </div>
    )
}

export default AbilityDisplayShow