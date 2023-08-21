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
                serializedMon.types = await this.getTypes(mon);
                serializedMon.abilities = await this.getAbilities(mon);
                serializedMon.evolutions = await this.getEvos(mon)

                return serializedMon;
            })
        );
        return serializedPokemon;
    }

    static async getTypes(mon) {
        const types = await mon.$relatedQuery("types");
        const backwardsTypes = types.map((type) => {
            const upperTypeName = _.capitalize(type.name);
            return {
                name: upperTypeName,
                icon: type.iconUrl,
                label: type.labelUrl,
            };
        });
        return backwardsTypes.reverse();
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
                        slot: slot.slotNum,
                        description: ability.description,
                    };
                })
            );
            return abilities;
        } catch (error) {
            console.error(`Failed to get abilities for ${mon.name}`)
        }
    }

    static async getEvos(mon) {
        try {
            const preEvoLinks = await mon.$relatedQuery("preLinks")
            const preEvos = await EvoSerializer.getEvos(preEvoLinks, "pre")
            
            const postEvoLinks = await mon.$relatedQuery("postLinks")
            const postEvos = await EvoSerializer.getEvos(postEvoLinks, "post")

            return {
                preEvos,
                postEvos
            }

        } catch (error) {
            console.error(`Failed to get evolutions for ${mon.name}`)
        }
    }
}

export default PokemonSerializer;
