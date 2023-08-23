import React from "react";
import AbilityServices from "../../../../server/src/services/AbilityServices";

const AbilityDisplayShow = ({ abilities }) => {
    const abilityList = AbilityServices.makeList(abilities)
    const abilityDisplay = abilityList.map(ability => {
        let slotAbbreviation = ability.slotNum
        if (slotAbbreviation === 3) {
            slotAbbreviation = "H"
        }
        let textClass = "text-height-varies-p"
        if (ability.name === "[No ability]") {
            textClass += " text-grayed"
        }
        return(
            <h4 key={ability.slotNum} className={textClass}>{slotAbbreviation}. {ability.name}</h4>
        )
    })
    return(
        <div className="flex-show-top">
            {abilityDisplay}
        </div>
    )
}

export default AbilityDisplayShow