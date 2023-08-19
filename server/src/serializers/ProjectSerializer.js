import User from "../models/User.js";

class ProjectSerializer {
    static async getSummary(array) {
        const requiredAttributes = ["projectName", "generation", "regionName", "id"];
        const serializedProjects = await Promise.all(
            array.map(async (project) => {
                let serializedProject = {};
                for (const attribute of requiredAttributes) {
                    serializedProject[attribute] = project[attribute];
                }
                const creator = await project.$relatedQuery("creator");
                serializedProject.creatorName = creator.username;
                return serializedProject;
            })
        );
        return serializedProjects;
    }
}

export default ProjectSerializer;
