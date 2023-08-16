import got from "got";
import { VanillaType } from "../../models/index.js";

class VanillaTypeSeeder {
    static async seed() {
        const rawAllTypes = await got("https://pokeapi.co/api/v2/type");
        const parsedAllTypes = JSON.parse(rawAllTypes.body);
        const parsedTypeList = parsedAllTypes.results;
        for (const singleType of parsedTypeList) {
            const currentType = await VanillaType.query().findOne({
                name: singleType.name,
            });
            if (!currentType) {
                const rawTypeData = await got(singleType.url);
                const parsedType = JSON.parse(rawTypeData.body);
                const vanillaType = {
                    name: parsedType.name,
                    iconUrl: VanillaTypeSeeder.getTypeIcon(parsedType.name),
                    labelUrl: VanillaTypeSeeder.getTypeLabel(parsedType.name),
                };
                console.log(`Inserting ${vanillaType.name}...`);
                await VanillaType.query().insert(vanillaType);
            }
        }
    }

    static getTypeIcon(typeName) {
        let iconUrl = "";
        switch (typeName) {
            case "normal":
                iconUrl =
                    "https://romhack-studio-production.s3.amazonaws.com/Normal_icon_HOME3.png";
                break;
            case "fighting":
                iconUrl =
                    "https://romhack-studio-production.s3.amazonaws.com/Fighting_icon_HOME3.png";
                break;
            case "flying":
                iconUrl =
                    "https://romhack-studio-production.s3.amazonaws.com/Flying_icon_HOME3.png";
                break;
            case "poison":
                iconUrl =
                    "https://romhack-studio-production.s3.amazonaws.com/Poison_icon_HOME3.png";
                break;
            case "ground":
                iconUrl =
                    "https://romhack-studio-production.s3.amazonaws.com/Ground_icon_HOME3.png";
                break;
            case "rock":
                iconUrl = "https://romhack-studio-production.s3.amazonaws.com/Rock_icon_HOME3.png";
                break;
            case "bug":
                iconUrl = "https://romhack-studio-production.s3.amazonaws.com/Bug_icon_HOME3.png";
                break;
            case "ghost":
                iconUrl = "https://romhack-studio-production.s3.amazonaws.com/Ghost_icon_HOME3.png";
                break;
            case "steel":
                iconUrl = "https://romhack-studio-production.s3.amazonaws.com/Steel_icon_HOME3.png";
                break;
            case "fire":
                iconUrl = "https://romhack-studio-production.s3.amazonaws.com/Fire_icon_HOME3.png";
                break;
            case "water":
                iconUrl = "https://romhack-studio-production.s3.amazonaws.com/Water_icon_HOME3.png";
                break;
            case "grass":
                iconUrl = "https://romhack-studio-production.s3.amazonaws.com/Grass_icon_HOME3.png";
                break;
            case "electric":
                iconUrl =
                    "https://romhack-studio-production.s3.amazonaws.com/Electric_icon_HOME3.png";
                break;
            case "psychic":
                iconUrl =
                    "https://romhack-studio-production.s3.amazonaws.com/Psychic_icon_HOME3.png";
                break;
            case "ice":
                iconUrl = "https://romhack-studio-production.s3.amazonaws.com/Ice_icon_HOME3.png";
                break;
            case "dragon":
                iconUrl =
                    "https://romhack-studio-production.s3.amazonaws.com/Dragon_icon_HOME3.png";
                break;
            case "dark":
                iconUrl =
                    "https://romhack-studio-production.s3.amazonaws.com/63px-Dark_icon_HOME3.png";
                break;
            case "fairy":
                iconUrl = "https://romhack-studio-production.s3.amazonaws.com/Fairy_icon_HOME3.png";
                break;
            default:
                iconUrl =
                    "https://romhack-studio-production.s3.amazonaws.com/Normal_icon_HOME3.png";
                break;
        }
        return iconUrl;
    }

    static getTypeLabel(typeName) {
        let labelUrl = "";
        switch (typeName) {
            case "normal":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/NormalIC_SV.png";
                break;
            case "fighting":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/FightingIC_SV.png";
                break;
            case "flying":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/FlyingIC_SV.png";
                break;
            case "poison":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/PoisonIC_SV.png";
                break;
            case "ground":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/GroundIC_SV.png";
                break;
            case "rock":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/RockIC_SV.png";
                break;
            case "bug":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/BugIC_SV.png";
                break;
            case "ghost":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/GhostIC_SV.png";
                break;
            case "steel":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/SteelIC_SV.png";
                break;
            case "fire":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/FireIC_SV.png";
                break;
            case "water":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/WaterIC_SV.png";
                break;
            case "grass":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/GrassIC_SV.png";
                break;
            case "electric":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/ElectricIC_SV.png";
                break;
            case "psychic":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/PsychicIC_SV.png";
                break;
            case "ice":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/IceIC_SV.png";
                break;
            case "dragon":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/DragonIC_SV.png";
                break;
            case "dark":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/DarkIC_SV.png";
                break;
            case "fairy":
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/FairyIC_SV.png";
                break;
            default:
                labelUrl = "https://romhack-studio-production.s3.amazonaws.com/NormalIC_SV.png";
                break;
        }
        return labelUrl;
    }
}

export default VanillaTypeSeeder;
