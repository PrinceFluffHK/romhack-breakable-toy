class TypeSerializer {
    static trim(typeArray) {
        const serializedTypes = typeArray.map(type => {
            const newType = {
                id: type.id,
                name: type.name,
                iconUrl: type.iconUrl,
                labelUrl: type.labelUrl
            }
            return newType
        })
        return serializedTypes
    }
}

export default TypeSerializer