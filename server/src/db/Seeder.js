/* eslint-disable no-console */
import { connection } from "../boot.js";
import ProjectSeeder from "./seeders/ProjectSeeder.js";
import UserSeeder from "./seeders/UserSeeder.js";
import PokemonSeeder from "./seeders/PokemonSeeder.js";
import TypeSeeder from "./seeders/TypeSeeder.js";
import AbilitySeeder from "./seeders/AbilitySeeder.js";
import EvoTriggerSeeder from "./seeders/EvoTriggerSeeder.js";
import EvolutionSeeder from "./seeders/EvolutionSeeder.js";

class Seeder {
    static async seed() {
        const maxId =
            // include individual seed commands here
            console.log("Seeding users...");
        await UserSeeder.seed();

        console.log("Seeding projects...");
        await ProjectSeeder.seed();

        console.log("Seeding types...");
        await TypeSeeder.seed();

        console.log("Seeding abilities...");
        await AbilitySeeder.seed(358); //current count: 358
        
        console.log("Seeding evolution triggers...")
        await EvoTriggerSeeder.seed();

        console.log("Seeding pokemon...");
        await PokemonSeeder.seed(1281); //current count: 1281

        console.log("Seeding evolutions...")
        await EvolutionSeeder.seed(530) //current count: 530; gen 1: 78

        console.log("Done!");
        await connection.destroy();
    }
}

export default Seeder;
