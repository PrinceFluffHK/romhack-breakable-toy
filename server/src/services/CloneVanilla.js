import { ProjectPokemon, VanillaPokemon } from "../models/index.js"

class CloneVanilla {
    static async pokemon(generation, projectId) {
        const fullMonList = await VanillaPokemon.query()
        fullMonList.forEach(async mon => {
            mon.generation = CloneVanilla.getPokemonGen(mon.nationalNum)
            if (mon.generation <= generation) {
                mon.projectId = projectId
                delete mon.id
                delete mon.createdAt
                delete mon.updatedAt
                const insertedMon = await ProjectPokemon.query().insert(mon)
            }
        })
    }

    static getPokemonGen(monId) {
        if (monId <= 151) {
            return 1
        } else if (monId <= 251) {
            return 2
        } else if (monId <= 386) {
            return 3
        } else if (monId <= 493) {
            return 4
        } else if (monId <= 649) {
            return 5
        } else if (monId <= 721) {
            return 6
        } else if (monId <= 809) {
            return 7
        } else if (monId <= 905) {
            return 8
        } else if (monId <= 1200) {
            return 9
        } else if (monId <= 10003) {
            return 3 
        } else if (monId <= 10012) {
            return 4
        } else if (monId <= 10015) {
            return 3
        } else if (monId <= 10024) {
            return 5
        } else if (monId <= 10090) {
            return 6
        } else if (monId <= 10160) {
            return 7
        } else if (monId <= 10249) {
            return 8
        } else {
            return 9
        }
        
    }
}

export default CloneVanilla