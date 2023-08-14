class PokemonSerializer {
    static async getSummary(array) {
        const requiredAttributes = ["name", "spriteUrl"]
        const serializedPokemon = await Promise.all(
            array.map(async (mon) =>{
                let serializedMon = {}
                for (const attribute of requiredAttributes) {
                    serializedMon[attribute] = mon[attribute]
                }
                return serializedMon
            })
        )
        return serializedPokemon
    }
}

export default PokemonSerializer