import got from "got";

class EvolutionSeeder {
    static async seed(cap) {
        const rawAllChains = await got(`https://pokeapi.co/api/v2/evolution-chain/?offset=0&limit=${cap}`)
        const parsedAllChains = JSON.parse(rawAllChains.body)
        const parsedChainList = parsedAllChains.results
    }
}

export default EvolutionSeeder