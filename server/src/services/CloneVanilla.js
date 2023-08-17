import { Pokemon, Type, TypeSlot } from "../models/index.js";

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
            console.log(`Cloning ${newMon.name}`);
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
            console.log(`Cloning ${newType.name}`);
            return newType;
        });
        const clonedTypes = await Type.query().insertGraphAndFetch(projectTypes);
        return clonedTypes;
    }

    // get vanilla mons
    // for each vanilla mon
    // related query for vanillaTypes
    // find matching projectMon + id
    // for each vanillaType
    // find matching projectType + id

    static async typeSlots(projectPokemon, projectTypes, projectId, generation) {
        const vanillaPokemon = await Pokemon.query()
            .whereNot("generation", ">", generation)
            .andWhere("projectId", null);
        const projectTypeSlots = [];
        const manipVanillaPokemon = await Promise.all(
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
}

export default CloneVanilla;
