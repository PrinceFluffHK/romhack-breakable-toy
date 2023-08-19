/* eslint-disable no-console */
import { connection } from "../boot.js";
import ProjectSeeder from "./seeders/ProjectSeeder.js";
import UserSeeder from "./seeders/UserSeeder.js";
import PokemonSeeder from "./seeders/PokemonSeeder.js";
import TypeSeeder from "./seeders/TypeSeeder.js";
import AbilitySeeder from "./seeders/AbilitySeeder.js";

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
        await AbilitySeeder.seed();

        console.log("Seeding pokemon...");
        await PokemonSeeder.seed();

        console.log("Done!");
        await connection.destroy();
    }
}

export default Seeder;
