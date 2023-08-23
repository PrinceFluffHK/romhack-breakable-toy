import { Type, TypeSlot } from "../models/index.js";
import _ from "lodash"

class PokemonPatch {
    static async updateType(type, projectId, currentMon, slotNum) {
        if (type) {
            const slotExists = currentMon.types.find(
                (currentType) => currentType.name.toLowerCase() === type.toLowerCase()
            );
            if (!slotExists) {
                const newType = await Type.query().findOne({
                    name: type.toLowerCase(),
                    projectId,
                });
                const foundSlot = await TypeSlot.query()
                    .findOne({
                        projectId: projectId,
                        slotNum: slotNum,
                        pokemonId: currentMon.id,
                    })
                    .patch({
                        typeId: newType.id,
                    });
                if (foundSlot === 0) {
                    const slot = {
                        projectId,
                        slotNum,
                        pokemonId: currentMon.id,
                        typeId: newType.id
                    }
                    try {
                        await TypeSlot.query().insert(slot) 
                    } catch (error) {
                        console.error("Man,")
                    }
                }
                const upperName = _.capitalize(newType.name)
                const serializedNewType = {
                    name: upperName,
                    icon: newType.iconUrl,
                    label: newType.labelUrl,
                    slotNum: slotNum 

                }
                return serializedNewType;
            } else {
                return slotExists
            }
        }
    }

    static async updateAbility(ability, projectId, currentMon, slotNum) {

    }
}

export default PokemonPatch;
