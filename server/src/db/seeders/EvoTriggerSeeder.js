import got from "got"
import { EvoTrigger } from "../../models/index.js"

class EvoTriggerSeeder {
    static async seed() {
        const rawAllEvoTriggers = await got("https://pokeapi.co/api/v2/evolution-trigger/")
        const parsedAllEvoTriggers = JSON.parse(rawAllEvoTriggers.body)
        const parsedTriggerList = parsedAllEvoTriggers.results
        for (const singleTrigger of parsedTriggerList) {
            const currentTrigger = await EvoTrigger.query().findOne({
                name: singleTrigger.name
            })
            if(!currentTrigger) {
                const newTrigger = {
                    name: singleTrigger.name
                }
                await EvoTrigger.query().insert(newTrigger)
            }
        }
    }
}

export default EvoTriggerSeeder