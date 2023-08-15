import got from "got";
import _ from "lodash";
import { VanillaPokemon } from "../../models/index.js";

class VanillaPokemonSeeder {
    static async seed() {
        const rawAllMons = await got("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100000");
        const parsedAllMons = JSON.parse(rawAllMons.body);
        const parsedMonList = parsedAllMons.results;
        const seedMonData = await Promise.all(
            parsedMonList.map(async (mon) => {
                const rawMonData = await got(`https://pokeapi.co/api/v2/pokemon/${mon.name}/`);
                if (rawMonData) {
                    const parsedMonData = JSON.parse(rawMonData.body);
                    const upperName = _.capitalize(parsedMonData.name);
                    const vanillaMonData = {
                        name: upperName,
                        baseHp: parsedMonData.stats[0].base_stat,
                        evHp: parsedMonData.stats[0].effort,
                        baseAtk: parsedMonData.stats[1].base_stat,
                        evAtk: parsedMonData.stats[1].effort,
                        baseDef: parsedMonData.stats[2].base_stat,
                        evDef: parsedMonData.stats[2].effort,
                        baseSpA: parsedMonData.stats[3].base_stat,
                        evSpA: parsedMonData.stats[3].effort,
                        baseSpD: parsedMonData.stats[4].base_stat,
                        evSpD: parsedMonData.stats[4].effort,
                        baseSpe: parsedMonData.stats[5].base_stat,
                        evSpe: parsedMonData.stats[5].effort,
                        catchRate: 100,
                        spriteUrl: parsedMonData.sprites.front_default,
                        nationalNum: parsedMonData.id,
                    };
                    return vanillaMonData;
                }
            })
        );

        for (const singleMon of seedMonData) {
            const currentMon = await VanillaPokemon.query().findOne({
                name: singleMon.name,
            });
            if (!currentMon) {
                console.log(`Inserting ${singleMon.name}...`);
                await VanillaPokemon.query().insert(singleMon);
            }
        }
    }
}

export default VanillaPokemonSeeder;
