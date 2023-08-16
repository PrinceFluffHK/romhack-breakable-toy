import { ProjectPokemon, ProjectType, VanillaPokemon, VanillaType } from "../models/index.js"

class CloneVanilla {
    static async pokemon(generation, projectId) {
        const fullMonList = await VanillaPokemon.query()
        fullMonList.forEach(async mon => {
            if (mon.generation <= generation) {
                mon.projectId = projectId
                delete mon.id
                delete mon.createdAt
                delete mon.updatedAt
                await ProjectPokemon.query().insert(mon)
            }
        })
    }

    static async types(projectId) {
        const fullTypeList = await VanillaType.query()
        fullTypeList.forEach(async type => {
            type.projectId = projectId
            delete type.id
            delete type.createdAt
            delete type.updatedAt
            await ProjectType.query().insert(type)
        })
    }
}

export default CloneVanilla