import _ from "lodash"

class PokemonSerializer {
    static async getSummary(array) {
        const requiredAttributes = [
            "name", 
            "spriteUrl", 
            "profileUrl",
            "id", 
            "baseHp",
            "baseAtk",
            "baseDef",
            "baseSpA",
            "baseSpD",
            "baseSpe",
            "evHp",
            "evAtk",
            "evDef",
            "evSpA",
            "evSpD",
            "evSpe",
            "nationalNum",
            "regionalNum"
        ]
        const serializedPokemon = await Promise.all(
            array.map(async (mon) =>{
                let serializedMon = {}
                for (const attribute of requiredAttributes) {
                    serializedMon[attribute] = mon[attribute]
                }
                const upperName = _.capitalize(serializedMon.name)
                serializedMon.name = upperName
                if (serializedMon.name === "Squirtle") {
                    serializedMon.name = "[REDACTED]"
                }
                serializedMon.types = await this.getTypes(mon)
                serializedMon.abilities = await this.getAbilities(mon)

                return serializedMon
            })
        )
        return serializedPokemon
    }

    static async getTypes(mon) {
        const types = await mon.$relatedQuery("types")
        const reversedTypes = types.map(type => {
            const upperTypeName = _.capitalize(type.name)
            return {
                name: upperTypeName,
                icon: type.iconUrl,
                label: type.labelUrl
            }
        })
        return reversedTypes.reverse()
    }

    static async getAbilities(mon) {
        // const abilities = await mon.$relatedQuery("abilities")
        // console.log(abilities)
    }
}

export default PokemonSerializer