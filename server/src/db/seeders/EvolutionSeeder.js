import got from "got";
import _ from "lodash"
import { EvoTrigger, Evolution, Pokemon } from "../../models/index.js";

class EvolutionSeeder {
    static async seed(cap) {
        const rawAllChains = await got(
            `https://pokeapi.co/api/v2/evolution-chain/?offset=0&limit=${cap}`
        );
        const parsedAllChains = JSON.parse(rawAllChains.body);
        const parsedChainList = parsedAllChains.results;
        const deepChainList = await Promise.all(
            parsedChainList.map(async (chain) => {
                const rawChainData = await got(chain.url);
                const parsedChainData = JSON.parse(rawChainData.body);
                const linkOneMon = await Pokemon.query().findOne({
                    name: parsedChainData.chain.species.name,
                    projectId: null,
                });
                const linksArray = await this.parseEvolutions(linkOneMon, parsedChainData.chain.evolves_to)
                return linksArray;
            })
        );
        const flatChainList = deepChainList.flat(2);
        await Evolution.query().insertGraph(flatChainList)
    }

    static async parseEvolutions(currentLinkMon, evolves_to_array) {
        if (evolves_to_array.length > 0) {
            const nextLinkArray = Promise.all(
                evolves_to_array.map(async (nextLink) => {
                    const nextLinkMon = await Pokemon.query().findOne({
                        name: nextLink.species.name,
                        projectId: null,
                    });
                    const currentLink = await Evolution.query().findOne({
                        postEvoId: nextLinkMon.id,
                        projectId: null,
                    })
                    if (!currentLink) {
                        const details = await this.getDetails(nextLink.evolution_details[0]);
                        const newLink = {
                            preEvoId: currentLinkMon.id,
                            postEvoId: nextLinkMon.id,
                            triggerId: details.triggerId,
                            levelReq: details.levelReq,
                            parameters: details.parameters,
                        };
                        console.log(`Inserting evolution from ${currentLinkMon.name} to ${nextLinkMon.name}`)
                        const nextLinks = await this.parseEvolutions(nextLinkMon, nextLink.evolves_to)
                        if(nextLinks) {
                            return [newLink, ...nextLinks]
                        } else {
                            return newLink
                        }
                    }
                })
            )
            return nextLinkArray
        }
    }

    static async getDetails(evo_details) {
        const trigger = await EvoTrigger.query().findOne({
            name: evo_details.trigger.name,
            projectId: null,
        });
        const parameters = this.getParameters(evo_details);

        return {
            triggerId: trigger.id,
            levelReq: evo_details.min_level,
            parameters,
        };
    }

    static getParameters(evo_details) {
        const {
            gender,
            held_item,
            item,
            known_move,
            known_move_type,
            location,
            min_affection,
            min_beauty,
            min_happiness,
            needs_overworld_rain,
            party_species,
            party_type,
            relative_physical_stats,
            time_of_day,
            trade_species,
            turn_upside_down,
        } = evo_details;
        let parameters = "";
        if (gender === 1) {
            parameters = parameters.concat("\nGender: Female");
        } else if (gender === 2) {
            parameters = parameters.concat("\nGender: Male");
        }
        if (held_item) {
            const capitalItem = _.capitalize(held_item.name)
            parameters = parameters.concat(`\nHolding: ${capitalItem}`)
        }
        if (item) {
            const capitalItem = _.capitalize(item.name)
            parameters = parameters.concat(`\nItem: ${capitalItem}`)
        }
        if (known_move) {
            const capitalMove = _.capitalize(known_move.name)
            parameters = parameters.concat(`\nKnowing ${capitalMove}`)
        }
        if (known_move_type) {
            const capitalType = _.capitalize(known_move_type.name)
            parameters = parameters.concat(`\nKnowing a ${capitalType}-type move`)
        }
        if (location) {
            const capitalLocation = _.capitalize(location.name)
            parameters = parameters.concat(`\nAt ${capitalLocation}`)
        }
        if (min_affection) {
            parameters = parameters.concat(`\nAffection: ${min_affection}`)
        }
        if (min_beauty) {
            parameters = parameters.concat(`\nBeauty: ${min_beauty}`)
        }
        if (min_happiness) {
            parameters = parameters.concat(`\nHappiness: ${min_happiness}`)
        }
        if (needs_overworld_rain) {
            parameters = parameters.concat(`\nNeeds Overworld Rain`)
        }
        if (party_species) {
            const capitalSpecies = _.capitalize(party_species.name)
            parameters = parameters.concat(`\n${capitalSpecies} in party`)
        }
        if (party_type) {
            const capitalType = _.capitalize(party_type.name)
            parameters = parameters.concat(`\n${capitalType}-type in party`)
        }
        if (relative_physical_stats === 1) {
            parameters = parameters.concat(`\nAtk > Def`)
        } else if (relative_physical_stats === -1) {
            parameters = parameters.concat(`\nDef > Atk`)
        } else if (relative_physical_stats === 0) {
            parameters = parameters.concat(`\nDef = Atk`)
        }
        if (time_of_day) {
            const capitalType = _.capitalize(time_of_day)
            parameters = parameters.concat(`\nTime: ${capitalType}`)
        }
        if (trade_species) {
            const capitalSpecies = _.capitalize(trade_species.name)
            parameters = parameters.concat(`\nTrade with ${capitalSpecies}`)
        }
        if (turn_upside_down) {
            parameters = parameters.concat(`\nTurn console upside-down`)
        }
        
        return parameters
    }
}

export default EvolutionSeeder;
