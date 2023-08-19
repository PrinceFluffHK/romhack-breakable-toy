import { Ability, AbilitySlot, Pokemon, Type, TypeSlot } from "../models/index.js";

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
        const slotsNestedArray = await Promise.all(
            vanillaPokemon.map(async (mon, index) => {
                const relatedVanillaTypes = await mon.$relatedQuery("types");
                const matchingMon = projectPokemon.find((matchMon) => matchMon.name === mon.name);
                const slotsArray = this.buildTypeSlotsArray(
                    relatedVanillaTypes,
                    projectTypes,
                    projectId,
                    matchingMon
                );
                return slotsArray;
            })
        );
        const flattenedArray = slotsNestedArray.flat();
        await TypeSlot.query().insertGraph(flattenedArray);
    }

    static buildTypeSlotsArray(typesArray, projectTypes, projectId, matchingMon) {
        const slotsArray = typesArray.map((type, index) => {
            let matchingType = projectTypes.find((matchType) => matchType.name === type.name);
            if (!matchingType) {
                const projectNormal = projectTypes.find((matchType) => matchType.name === "normal");
                matchingType = projectNormal;
            }
            const newTypeSlot = {
                slotNum: typesArray.length - index,
                typeId: matchingType.id,
                pokemonId: matchingMon.id,
                projectId,
            };
            return newTypeSlot;
        });
        return slotsArray;
    }

    static async abilities(generation, projectId) {
        const vanillaAbilities = await Ability.query().where("projectId", null);
        // not currently accounting for past generation ability assignments
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

    static async abilitySlots(projectPokemon, projectAbilities, projectId, generation) {
        const vanillaPokemon = await Pokemon.query()
            .whereNot("generation", ">", generation)
            .andWhere("projectId", null);
        const slotsNestedArray = await Promise.all(
            vanillaPokemon.map(async (mon) => {
                const relatedVanillaAbilities = await mon.$relatedQuery("abilities");
                const relatedVanillaSlots = await mon.$relatedQuery("abilitySlots");
                const matchingMon = projectPokemon.find((matchMon) => matchMon.name === mon.name);
                return this.buildAbilitySlotsArray(
                    relatedVanillaAbilities,
                    relatedVanillaSlots,
                    projectAbilities,
                    projectId,
                    matchingMon
                );
            })
        );
        const flattenedArray = slotsNestedArray.flat();
        const clonedAbilitySlots = await AbilitySlot.query().insertGraphAndFetch(flattenedArray);
        return clonedAbilitySlots;
    }

    static buildAbilitySlotsArray(
        vanillaAbilities,
        vanillaSlots,
        projectAbilities,
        projectId,
        matchingMon
    ) {
        const slotsArray = vanillaAbilities.map((ability, index) => {
            const matchingAbility = projectAbilities.find(
                (matchAbility) => matchAbility.name === ability.name
            );
            const newTypeSlot = {
                slotNum: vanillaSlots[index].slotNum,
                abilityId: matchingAbility.id,
                pokemonId: matchingMon.id,
                projectId,
            };
            return newTypeSlot;
        });
        return slotsArray;
    }
}

export default CloneVanilla;
