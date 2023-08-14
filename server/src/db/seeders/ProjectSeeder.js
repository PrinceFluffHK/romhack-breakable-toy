import { Project, User } from "../../models/index.js";

class ProjectSeeder {
    static async seed() {
        const fluff = await User.query().findOne("email", "testfluff@email.com")
        const bray = await User.query().findOne("email", "testbray@email.com")

        const projectData = [
            {
                creatorId: fluff.id,
                projectName: "Emerald: DE",
                generation: 3,
                regionName: "Hoenn"

            },
            {
                creatorId: fluff.id,
                projectName: "SwSh: DE",
                generation: 8,
                regionName: "Galar"
            },
            {
                creatorId: bray.id,
                projectName: "Breezy Emerald",
                generation: 3,
                regionName: "Hoenn"
            }
        ]

        for (const singleProject of projectData) {
            const currentProject = await Project.query().findOne({ projectName: singleProject.projectName });
            if (!currentProject) {
                await Project.query().insert(singleProject);
            }}
    } 
}

export default ProjectSeeder