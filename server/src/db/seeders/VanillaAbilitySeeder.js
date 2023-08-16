import got from "got";
import { VanillaAbility } from "../../models/index.js";

class VanillaAbilitySeeder {
    static async seed() {
        const rawAllAbilities = await got("https://pokeapi.co/api/v2/ability?offset=0&limit=500")
        const parsedAllAbilities = JSON.parse(rawAllAbilities.body)
        const parsedAbilityList = parsedAllAbilities.results
        for (const singleAbility of parsedAbilityList) {
            const currentAbility = await VanillaAbility.query().findOne({
                name: singleAbility.name
            })
            if (!currentAbility) {
                const rawAbilityData = await got(singleAbility.url)
                const parsedAbility = JSON.parse(rawAbilityData)
                const englishEffects = parsedAbility.effect_entries.filter(entry => {
                    entry.language.name === "en"
                })
                const generation = parseInt(parsedAbility.generation.url[38])
                const vanillaAbility = {
                    name: parsedAbility.name,
                    description: englishEffects[0],
                    generation: generation
                }
                await VanillaAbility.query().insert(vanillaAbility)
            }
        }
    }
}

export default VanillaAbilitySeeder