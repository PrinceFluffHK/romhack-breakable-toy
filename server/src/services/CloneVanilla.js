import { Ability, Pokemon, Type, TypeSlot } from "../models/index.js";

class CloneVanilla {
    static async pokemon(generation, projectId) {
        const vanillaPokemon = await Pokemon.query()
            .whereNot("generation", ">", generation)
            .andWhere("projectId", null);
        const projectPokemon = vanillaPokemon.map((mon) => {
            const newMon = {
                ...mon,
                projectId,
            };
            delete newMon.id;
            delete newMon.createdAt;
            delete newMon.updatedAt;
            return newMon;
        });
        const clonedPokemon = await Pokemon.query().insertGraphAndFetch(projectPokemon);
        return clonedPokemon;
    }

    static async types(generation, projectId) {
        const vanillaTypes = await Type.query()
            .whereNot("generation", ">", generation)
            .andWhere("projectId", null);
        const projectTypes = vanillaTypes.map((type) => {
            const newType = {
                ...type,
                projectId,
            };
            delete newType.id;
            delete newType.createdAt;
            delete newType.updatedAt;
            return newType;
        });
        const clonedTypes = await Type.query().insertGraphAndFetch(projectTypes);
        return clonedTypes;
    }

    static async typeSlots(projectPokemon, projectTypes, projectId, generation) {
        const vanillaPokemon = await Pokemon.query()
            .whereNot("generation", ">", generation)
            .andWhere("projectId", null);
        const projectTypeSlots = [];
        const manipulateVanillaPokemon = await Promise.all(
            vanillaPokemon.map(async (mon) => {
                const relatedVanillaTypes = await mon.$relatedQuery("types");
                const matchingMon = projectPokemon.find((matchMon) => matchMon.name === mon.name);
                relatedVanillaTypes.forEach((type, index) => {
                    const matchingType = projectTypes.find(
                        (matchType) => matchType.name === type.name
                    );
                    const newTypeSlot = {
                        slotNum: index + 1,
                        typeId: matchingType.id,
                        pokemonId: matchingMon.id,
                        projectId,
                    };
                    projectTypeSlots.push(newTypeSlot);
                });
            })
        );
        const clonedTypeSlots = await TypeSlot.query().insertGraphAndFetch(projectTypeSlots);
        return clonedTypeSlots;
    }

    static async abilities(generation, projectId) {
        const vanillaAbilities = await Ability.query()
            .whereNot("generation", ">", generation)
            .andWhere("projectId", null);
        const projectAbilities = vanillaAbilities.map((ability) => {
            const newAbility = {
                ...ability,
                projectId,
            };
            delete newAbility.id;
            delete newAbility.createdAt;
            delete newAbility.updatedAt;
            return newAbility;
        });
        const clonedAbilities = await Ability.query().insertGraphAndFetch(projectAbilities);
        return clonedAbilities;
    }

    static async abilitySlots() {
        
    }

    static async evoTriggers() {
        
    }
}

export default CloneVanilla;
