import React from "react";

const AbilityDisplay = ({ abilities }) => {
    const ability1 = abilities.find((slot) => slot.slot === 1);
    const ability2 = abilities.find((slot) => slot.slot === 2);
    const ability3 = abilities.find((slot) => slot.slot === 3);
    const abilityList = [ability1, ability2, ability3];

    const checkPresent = (ability) => {
        if (ability) {
            return ability.name;
        } else {
            return "[No ability]";
        }
    };
    const abilityDisplay = abilityList.map((ability, index) => {
        const checkedAbility = checkPresent(ability);
        let textClass = "";
        if (checkedAbility === "[No ability]") {
            textClass = "text-grayed";
        }
        return (
            <div key={index} className={`flex-single-ability ${textClass}`}>
                {checkedAbility}
            </div>
        );
    });

    return (
        <div id="ability-container" className="poke-grid-abilities-list">
            {abilityDisplay}
        </div>
    );
};

export default AbilityDisplay;
