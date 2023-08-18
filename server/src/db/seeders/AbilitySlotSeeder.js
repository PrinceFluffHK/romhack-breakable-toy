class AbilitySlotSeeder {
    static async construct(monId, monAbilities, vanillaAbilities) {
        const projectAbilitySlots = monAbilities.map((ability) => {
            const abilityWithId = vanillaAbilities.filter(
                (vanillaAbility) => ability.ability.name === vanillaAbility.name
            );
            const newSlot = {
                slotNum: ability.slot,
                pokemonId: monId,
                abilityId: abilityWithId[0].id,
            }
            return newSlot
        });
        return projectAbilitySlots
    }

    // static async flattenAndInsert(abilitiesArray) {
    //     const flattenedArray = abilitiesArray.flat()

    // }
}

export default AbilitySlotSeeder;
