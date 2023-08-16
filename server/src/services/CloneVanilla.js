import { ProjectPokemon, ProjectType, VanillaPokemon, VanillaType } from "../models/index.js";

class CloneVanilla {
    static async pokemon(generation, projectId) {
        const fullMonList = await VanillaPokemon.query();
        fullMonList.forEach(async (mon) => {
            if (mon.generation <= generation) {
                const {
                    name,
                    baseHp,
                    baseAtk,
                    baseDef,
                    baseSpA,
                    baseSpD,
                    baseSpe,
                    evHp,
                    evDef,
                    evSpA,
                    evSpD,
                    evSpe,
                    spriteUrl,
                    profileUrl,
                    nationalNum,
                    generation,
                } = mon;
                const newMon = {
                    name,
                    baseHp,
                    baseAtk,
                    baseDef,
                    baseSpA,
                    baseSpD,
                    baseSpe,
                    evHp,
                    evAtk,
                    evDef,
                    evSpA,
                    evSpD,
                    evSpe,
                    spriteUrl,
                    profileUrl,
                    nationalNum,
                    generation,
                    projectId,
                };
                await ProjectPokemon.query().insert(newMon);
            }
        });
    }

    static async types(projectId) {
        const fullTypeList = await VanillaType.query();
        fullTypeList.forEach(async (type) => {
            const { name, iconUrl, labelUrl } = type;
            const newType = {
                name,
                iconUrl,
                labelUrl,
                projectId,
            };
            await ProjectType.query().insert(newType);
        });
    }
}

export default CloneVanilla;
