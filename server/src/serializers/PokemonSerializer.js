import _ from "lodash"

class PokemonSerializer {
    static async getSummary(array) {
        const requiredAttributes = ["name", "spriteUrl", "id"]
        const serializedPokemon = await Promise.all(
            array.map(async (mon) =>{
                let serializedMon = {}
                for (const attribute of requiredAttributes) {
                    serializedMon[attribute] = mon[attribute]
                }
                const upperName = _.capitalize(serializedMon.name)
                serializedMon.name = upperName
                return serializedMon
            })
        )
        return serializedPokemon
    }
}

export default PokemonSerializer