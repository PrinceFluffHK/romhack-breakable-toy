class AbilitySerializer {
    static trim(abilitiesArray) {
        const serializedAbilities = abilitiesArray.map(ability => {
            const newAbility = {
                id: type.id,
                name: ability.name,
                description: ability.description
            }
            return newAbility
        })
        return serializedAbilities
    }
}

export default AbilitySerializer