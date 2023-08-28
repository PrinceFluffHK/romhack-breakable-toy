class AbilitySlotSeeder {
    static async construct(monId, monAbilities, vanillaAbilities) {
        const projectAbilitySlots = monAbilities.map((ability) => {
            let noDashName = ability.ability.name
            if (noDashName != "well-baked-body" && noDashName != "soul-heart") {
                noDashName = noDashName.replace("-", " ")
            }
            const abilityWithId = vanillaAbilities.filter(
                (vanillaAbility) => noDashName === vanillaAbility.name
            );
            const newSlot = {
                slotNum: ability.slot,
                pokemonId: monId,
                abilityId: abilityWithId[0].id,
            };
            return newSlot;
        });
        return projectAbilitySlots;
    }
}

export default AbilitySlotSeeder;
