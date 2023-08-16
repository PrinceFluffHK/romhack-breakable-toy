import got from "got";
import { VanillaPokemon } from "../../models/index.js";
import VanillaTypeSeeder from "./VanillaTypeSeeder.js";

class VanillaPokemonSeeder {
    static async seed() {
        const rawAllMons = await got("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100000");
        const parsedAllMons = JSON.parse(rawAllMons.body);
        const parsedMonList = parsedAllMons.results;
        for (const singleMon of parsedMonList) {
            const currentMon = await VanillaPokemon.query().findOne({
                name: singleMon.name,
            });
            if(!currentMon) {
                const rawMonData = await got(`https://pokeapi.co/api/v2/pokemon/${singleMon.name}/`);
                if (rawMonData) {
                    const parsedMonData = JSON.parse(rawMonData.body);
                    const vanillaMon = {
                        name: parsedMonData.name,
                        baseHp: parsedMonData.stats[0].base_stat,
                        baseAtk: parsedMonData.stats[1].base_stat,
                        baseDef: parsedMonData.stats[2].base_stat,
                        baseSpA: parsedMonData.stats[3].base_stat,
                        baseSpD: parsedMonData.stats[4].base_stat,
                        baseSpe: parsedMonData.stats[5].base_stat,
                        evHp: parsedMonData.stats[0].effort,
                        evAtk: parsedMonData.stats[1].effort,
                        evDef: parsedMonData.stats[2].effort,
                        evSpA: parsedMonData.stats[3].effort,
                        evSpD: parsedMonData.stats[4].effort,
                        evSpe: parsedMonData.stats[5].effort,
                        spriteUrl: parsedMonData.sprites.front_default,
                        profileUrl: parsedMonData.sprites.other["official-artwork"].front_default,
                        nationalNum: parsedMonData.id,
                        generation: this.getPokemonGen(parsedMonData.id)
                    };
                    const newMon = await VanillaPokemon.query().insertAndFetch(vanillaMon);
                    const monTypes = parsedMonData.types
                    await VanillaTypeSeeder.seedSlots(newMon, monTypes)

                    return heeebidyjeebidy
                }
            }
        }
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

export default VanillaPokemonSeeder;
