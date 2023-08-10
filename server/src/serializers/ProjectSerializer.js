import User from "../models/User.js"

class ProjectSerializer {
    static async getSummary (array) {
        const requiredAttributes = ["projectName", "generation", "regionName"]
        const serializedProjects = array.map(project => {
            let serializedProject = {}
            for (const attribute of requiredAttributes) {
                serializedProject[attribute] = project[attribute]
            }
            // serializedProject.creatorName = User.query().findById(project.creatorId)
            return serializedProject
        })
        return serializedProjects
    }
}

export default ProjectSerializer