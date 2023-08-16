import got from "got";
import { VanillaPokemon } from "../../../models/index.js";
import CloneVanilla from "../../../services/cloneVanilla.js";
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
            if (!currentMon) {
                const rawMonData = await got(
                    `https://pokeapi.co/api/v2/pokemon/${singleMon.name}/`
                );
                if (rawMonData) {
                    const parsedMonData = JSON.parse(rawMonData.body);
                    console.log(parsedMonData.sprites.other[`official-artwork`]);
                    const vanillaMon = {
                        name: parsedMonData.name,
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
                        // profileUrl: parsedMonData.sprites.other["official-artwork"].front_default,
                        nationalNum: parsedMonData.id,
                        generation: VanillaPokemonSeeder.getPokemonGen(parsedMonData.id),
                    };
                    console.log(vanillaMon);
                    const newMon = await VanillaPokemon.query().insertAndFetch(vanillaMon);
                    const monTypes = parsedMonData.types;
                    VanillaTypeSeeder.seedSlots(newMon, monTypes);
                    return heeebidyjeebidy;
                }
            }
        }
    }

    static getPokemonGen(monId) {
        if (monId <= 151) {
            return 1;
        } else if (monId <= 251) {
            return 2;
        } else if (monId <= 386) {
            return 3;
        } else if (monId <= 493) {
            return 4;
        } else if (monId <= 649) {
            return 5;
        } else if (monId <= 721) {
            return 6;
        } else if (monId <= 809) {
            return 7;
        } else if (monId <= 905) {
            return 8;
        } else if (monId <= 1200) {
            return 9;
        } else if (monId <= 10003) {
            return 3;
        } else if (monId <= 10012) {
            return 4;
        } else if (monId <= 10015) {
            return 3;
        } else if (monId <= 10024) {
            return 5;
        } else if (monId <= 10090) {
            return 6;
        } else if (monId <= 10160) {
            return 7;
        } else if (monId <= 10249) {
            return 8;
        } else {
            return 9;
        }
    }
}

export default VanillaPokemonSeeder;
