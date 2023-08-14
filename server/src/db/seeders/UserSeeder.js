import { User } from "../../models/index.js"

class UserSeeder {
    static async seed() {
        const userData = [
            {
                username: "AdminFluff",
                email: "pokemondxdy@gmail.com",
                cryptedPassword: "$2b$10$5eHKuKhjHc15ADUTjnjR2u/5.jPa9QxM9uAfHWMY.L0sWz1XueIiy"
            },
            {
                username: "TestFluff",
                email: "testfluff@email.com",
                cryptedPassword: "bdgliusbdoguasfiabiwfba",
            },
            {
                username: "TestBray",
                email: "testbray@email.com",
                cryptedPassword: "sdfjoi237rtt032ehg9",
            },
        ]

        for (const singleUser of userData) {
            const currentUser = await User.query().findOne({ email: singleUser.email })
            if (!currentUser) {
                await User.query().insert(singleUser)
            }
        }
    }
}

export default UserSeeder