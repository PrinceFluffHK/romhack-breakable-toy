class AbilityServices {
    static makeList(abilities) {
        let abilityArray = []
        for (let i = 1; i <= 3; i++) {
            const ability = abilities.find((slot) => slot.slotNum === i)
            if (ability) {
                abilityArray.push(ability)
            } else {
                const newAbility = {
                    name: "[No ability]",
                    slotNum: i
                }
                abilityArray.push(newAbility)
            }
        }
        return abilityArray
    }
}

export default AbilityServices