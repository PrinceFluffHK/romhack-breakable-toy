import got from "got";
import { Ability } from "../../models/index.js";
import parseGeneration from "../../services/parseGeneration.js";

class AbilitySeeder {
    static async seed() {
        const rawAllAbilities = await got("https://pokeapi.co/api/v2/ability?offset=0&limit=300");
        const parsedAllAbilities = JSON.parse(rawAllAbilities.body);
        const parsedAbilityList = parsedAllAbilities.results;
        for (const singleAbility of parsedAbilityList) {
            const currentAbility = await Ability.query().findOne({
                name: singleAbility.name,
            });
            if (!currentAbility) {
                const rawAbilityData = await got(singleAbility.url);
                const parsedAbility = JSON.parse(rawAbilityData.body);
                const englishEffects = parsedAbility.effect_entries.filter(
                    (entry) => entry.language.name === "en"
                );

                const generation = parseGeneration(parsedAbility.generation.name);
                const ability = {
                    name: parsedAbility.name,
                    description: this.parseEffect(englishEffects),
                    generation: generation,
                };
                console.log(`Inserting ${ability.name}`);
                await Ability.query().insert(ability);
            }
        }
    }

    static parseEffect(effects) {
        if (effects[0]) {
            return effects[0].short_effect;
        } else {
            return null;
        }
    }
}

export default AbilitySeeder;
