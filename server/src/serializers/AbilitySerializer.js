import _ from "lodash"

class AbilitySerializer {
    static trim(abilitiesArray) {
        const serializedAbilities = abilitiesArray.map(ability => {
            const upperName = _.capitalize(ability.name)
            const newAbility = {
                id: ability.id,
                name: upperName,
                description: ability.description
            }
            return newAbility
        })
        return serializedAbilities
    }
}

export default AbilitySerializer