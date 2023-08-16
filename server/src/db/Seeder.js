/* eslint-disable no-console */
import { connection } from "../boot.js"
import ProjectSeeder from "./seeders/ProjectSeeder.js"
import UserSeeder from "./seeders/UserSeeder.js"
import VanillaPokemonSeeder from "./seeders/VanillaPokemonSeeder.js"
import VanillaTypeSeeder from "./seeders/VanillaTypesSeeder.js"

class Seeder {
  static async seed() {
    const maxId = 
    // include individual seed commands here
    console.log("Seeding users...")
    await UserSeeder.seed()

    console.log("Seeding projects...")
    await ProjectSeeder.seed()

    console.log("Seeding vanilla-types...")
    await VanillaTypeSeeder.seed()

    console.log("Seeding vanilla-pokemon...")
    // await VanillaPokemonSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder