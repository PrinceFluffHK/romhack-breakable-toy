import _ from "lodash";

class TypeSerializer {
    static trim(typeArray) {
        const serializedTypes = typeArray.map((type) => {
            const upperName = _.capitalize(type.name);
            const newType = {
                id: type.id,
                name: upperName,
                iconUrl: type.iconUrl,
                labelUrl: type.labelUrl,
            };
            return newType;
        });
        return serializedTypes;
    }
}

export default TypeSerializer;
