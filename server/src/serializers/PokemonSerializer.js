import _ from "lodash";
import EvoSerializer from "./EvoSerializer.js";

class PokemonSerializer {
    static async getSummary(array) {
        const requiredAttributes = [
            "name",
            "spriteUrl",
            "profileUrl",
            "id",
            "baseHp",
            "baseAtk",
            "baseDef",
            "baseSpA",
            "baseSpD",
            "baseSpe",
            "evHp",
            "evAtk",
            "evDef",
            "evSpA",
            "evSpD",
            "evSpe",
            "nationalNum",
            "regionalNum",
        ];
        const serializedPokemon = await Promise.all(
            array.map(async (mon) => {
                let serializedMon = {};
                for (const attribute of requiredAttributes) {
                    serializedMon[attribute] = mon[attribute];
                }
                const upperName = _.capitalize(serializedMon.name);
                serializedMon.name = upperName;
                if (serializedMon.name === "Squirtle") {
                    serializedMon.name = "[REDACTED]";
                }
                try {
                    serializedMon.types = await this.getTypes(mon);
                } catch (error) {
                    console.error(`ERROR: Failed to serialize types for ${mon.name}`);
                }

                try {
                    serializedMon.abilities = await this.getAbilities(mon);
                } catch (error) {
                    console.error(`ERROR: Failed to serialize abilities for ${mon.name}`);
                }

                try {
                    serializedMon.evolutions = await this.getEvos(mon);
                } catch (error) {
                    console.error(`ERROR: Failed to serialize evolutions for ${mon.name}`);
                }

                return serializedMon;
            })
        );
        return serializedPokemon;
    }

    static async getTypes(mon) {
        try {
            const typeSlots = await mon.$relatedQuery("typeSlots");
            const backwardsTypes = await Promise.all(
                typeSlots.map(async (slot) => {
                    try {
                        const type = await slot.$relatedQuery("type");
                        const upperTypeName = _.capitalize(type.name);
                        const typeSlot = {
                            name: upperTypeName,
                            icon: type.iconUrl,
                            label: type.labelUrl,
                            slotNum: slot.slotNum,
                        };
                        return typeSlot;
                    } catch (error) {
                        console.error(`ERROR: Failed to serialize ${slot.id}`);
                    }
                })
            );
            let fixedTypes = backwardsTypes;
            if (fixedTypes[0].slotNum === 2) {
                fixedTypes = fixedTypes.reverse();
            }
            return fixedTypes;
        } catch (error) {
            console.error(`ERROR: Failed to get types for ${mon.name}`);
        }
    }

    static async getAbilities(mon) {
        try {
            const abilitySlots = await mon.$relatedQuery("abilitySlots");
            const abilities = await Promise.all(
                abilitySlots.map(async (slot) => {
                    const ability = await slot.$relatedQuery("ability");
                    const upperName = _.capitalize(ability.name);
                    return {
                        name: upperName,
                        slotNum: slot.slotNum,
                        description: ability.description,
                    };
                })
            );
            return abilities;
        } catch (error) {
            console.error(`Failed to get abilities for ${mon.name}`);
        }
    }

    static async getEvos(mon) {
        try {
            const preEvoLinks = await mon.$relatedQuery("preLinks");
            const preEvos = await EvoSerializer.getEvos(preEvoLinks, "pre");

            const postEvoLinks = await mon.$relatedQuery("postLinks");
            const postEvos = await EvoSerializer.getEvos(postEvoLinks, "post");

            return {
                preEvos,
                postEvos,
            };
        } catch (error) {
            console.error(`Failed to get evolutions for ${mon.name}`);
        }
    }
}

export default PokemonSerializer;
