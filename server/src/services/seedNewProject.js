import got from 'got'
import _ from 'lodash'
import { Pokemon } from '../models/index.js'

const seedNewProject = async (generation, projectId) => {

    const generationData = await got(`https://pokeapi.co/api/v2/generation/${generation}/`)
    const parsedGenData = JSON.parse(generationData.body)
    const species = parsedGenData.pokemon_species
    species.forEach(async (mon) => {
        const rawMonData = await got(`https://pokeapi.co/api/v2/pokemon/${mon.name}`)
        const parsedMonData = JSON.parse(rawMonData.body)
        const upperName = _.capitalize(parsedMonData.name)
        console.log(`Inserting ${upperName}...`)
        const monData = {
            name: upperName,
            projectId: projectId,
            regionalNum: null,
            nationalNum: parsedMonData.id,
            dexEntry: "I DON'T CAAAAAARE",
            baseHp: parsedMonData.stats[0].base_stat,
            baseAtk: parsedMonData.stats[1].base_stat,
            baseDef: parsedMonData.stats[2].base_stat,
            baseSpA: parsedMonData.stats[3].base_stat,
            baseSpD: parsedMonData.stats[4].base_stat,
            baseSpe: parsedMonData.stats[5].base_stat,
            catchRate: 100,
            spriteUrl: parsedMonData.sprites.front_default
        }
        const importedMon = await Pokemon.query().insert(monData)
    })
}

// seedNewProject(1, 3)

export default seedNewProject