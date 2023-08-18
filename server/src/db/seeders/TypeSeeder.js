import got from "got";
import { Type, TypeSlot } from "../../models/index.js";
import parseGeneration from "../../services/parseGeneration.js";

class TypeSeeder {
    static async seed() {
        const rawAllTypes = await got("https://pokeapi.co/api/v2/type");
        const parsedAllTypes = JSON.parse(rawAllTypes.body);
        const parsedTypeList = parsedAllTypes.results;
        for (const singleType of parsedTypeList) {
            const currentType = await Type.query().findOne({
                name: singleType.name,
            });
            if (!currentType) {
                const rawTypeData = await got(`https://pokeapi.co/api/v2/type/${singleType.name}`);
                if (rawTypeData) {
                    const parsedType = JSON.parse(rawTypeData.body);
                    const name = parsedType.name;
                    const generation = parseGeneration(parsedType.generation.name);
                    const typeImg = this.getTypeImg(parsedType.name);
                    const type = {
                        name,
                        iconUrl: typeImg.iconUrl,
                        labelUrl: typeImg.labelUrl,
                        generation,
                    };
                    console.log(`Inserting ${type.name}...`);
                    await Type.query().insert(type);
                }
            }
        }
    }

    static async seedSlots(mon, types) {
        for (const singleType of types) {
            const currentType = await Type.query().findOne({
                name: `${singleType.type.name}`,
            });

            const typeSlot = {
                slotNum: singleType.slot,
                typeId: currentType.id,
                pokemonId: mon.id,
            };
            console.log(
                `Inserting ${singleType.type.name} into ${mon.name} in slot ${singleType.slot}`
            );
            await TypeSlot.query().insert(typeSlot);
        }
    }

    static getTypeImg(typeName) {
        switch (typeName) {
            case "normal":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Normal_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/NormalIC_SV.png",
                };
            case "fighting":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Fighting_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/FightingIC_SV.png",
                };
            case "flying":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Flying_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/FlyingIC_SV.png",
                };
            case "poison":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Poison_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/PoisonIC_SV.png",
                };
            case "ground":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Ground_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/GroundIC_SV.png",
                };
            case "rock":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Rock_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/RockIC_SV.png",
                };
            case "bug":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Bug_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/BugIC_SV.png",
                };
            case "ghost":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Ghost_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/GhostIC_SV.png",
                };
            case "steel":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Steel_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/SteelIC_SV.png",
                };
            case "fire":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Fire_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/FireIC_SV.png",
                };
            case "water":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Water_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/WaterIC_SV.png",
                };
            case "grass":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Grass_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/GrassIC_SV.png",
                };
            case "electric":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Electric_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/ElectricIC_SV.png",
                };
            case "psychic":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Psychic_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/PsychicIC_SV.png",
                };
            case "ice":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Ice_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/IceIC_SV.png",
                };
            case "dragon":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Dragon_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/DragonIC_SV.png",
                };
            case "dark":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/63px-Dark_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/DarkIC_SV.png",
                };
            case "fairy":
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/Fairy_icon_HOME3.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/FairyIC_SV.png",
                };
            default:
                return {
                    iconUrl: "https://pfrs-production.s3.amazonaws.com/NormalIC_SV.png",
                    labelUrl: "https://pfrs-production.s3.amazonaws.com/Normal_icon_HOME3.png",
                };
        }
    }
}

export default TypeSeeder;
