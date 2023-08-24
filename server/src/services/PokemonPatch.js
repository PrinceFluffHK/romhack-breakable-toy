import { Ability, AbilitySlot, Pokemon, Type, TypeSlot } from "../models/index.js";
import _ from "lodash";

class PokemonPatch {
    static async updateType(type, projectId, currentMon, slotNum) {
        const slotExists = currentMon.types.find((currentType) => currentType.slotNum === slotNum);
        if (type) {
            const typeExists = await Type.query().findOne({
                name: type.toLowerCase(),
                projectId,
            });
            if (typeExists) {
                if (slotExists) {
                    const sameType = currentMon.types.find(
                        (currentType) => currentType.name.toLowerCase() === type.toLowerCase()
                    );
                    if (sameType) {
                        return slotExists;
                    } else {
                        const foundSlot = await TypeSlot.query()
                            .findOne({
                                projectId: projectId,
                                slotNum: slotNum,
                                pokemonId: currentMon.id,
                            })
                            .patch({
                                typeId: typeExists.id,
                            });
                    }
                } else {
                    const slot = {
                        projectId,
                        slotNum,
                        pokemonId: currentMon.id,
                        typeId: typeExists.id,
                    };
                    try {
                        await TypeSlot.query().insert(slot);
                    } catch (error) {
                        console.error("Man,", error);
                    }
                }
                const upperName = _.capitalize(typeExists.name);
                const serializedNewType = {
                    name: upperName,
                    icon: typeExists.iconUrl,
                    label: typeExists.labelUrl,
                    slotNum: slotNum,
                };
                return serializedNewType;
            } else {
                return slotExists;
            }
        } else {
            if (slotExists) {
                if (slotExists.slotNum === 2) {
                    const numDeleted = await TypeSlot.query()
                        .findOne({
                            projectId,
                            slotNum,
                            pokemonId: currentMon.id,
                        })
                        .delete();
                } else if (slotExists.slotNum === 1) {
                    return slotExists;
                }
            }
        }
    }

    static async updateAbility(ability, projectId, currentMon, slotNum) {
        const slotExists = currentMon.abilities.find(
            (currentSlot) => currentSlot.slotNum === slotNum
        );
        if (ability) {
            const newAbility = await Ability.query().findOne({
                name: ability.toLowerCase(),
                projectId,
            });
            if (slotExists) {
                if (slotExists.name.toLowerCase() === ability.toLowerCase()) {
                    return slotExists;
                } else {
                    if (!newAbility) {
                        return slotExists;
                    }

                    const foundSlot = await AbilitySlot.query()
                        .findOne({
                            projectId,
                            slotNum,
                            pokemonId: currentMon.id,
                        })
                        .patch({
                            abilityId: newAbility.id,
                        });
                }
            } else {
                const slot = {
                    projectId,
                    slotNum,
                    pokemonId: currentMon.id,
                    abilityId: newAbility.id,
                };
                try {
                    await AbilitySlot.query().insert(slot);
                } catch (error) {
                    console.error(`Failure to add ability to ${currentMon.name}`);
                }
            }
            const upperName = _.capitalize(newAbility.name);
            const serializedNewAbility = {
                name: upperName,
                slotNum: slotNum,
                description: newAbility.description,
            };
            return serializedNewAbility;
        } else {
            if (slotExists) {
                const numDeleted = await AbilitySlot.query()
                    .findOne({
                        projectId: projectId,
                        slotNum: slotNum,
                        pokemonId: currentMon.id,
                    })
                    .delete();
            }
        }
    }

    static async updateStat(currentMon, propertyName, property) {
        const propInt = parseInt(property);
        if (currentMon[propertyName] != propInt) {
            try {
                await Pokemon.query()
                    .findById(currentMon.id)
                    .patch({
                        [propertyName]: propInt,
                    });
            } catch (error) {
                console.error(error);
            }
        }
        return propInt;
    }
}

export default PokemonPatch;
