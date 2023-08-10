import express from "express";
import Project from "../../../models/Project.js";
import ProjectSerializer from "../../../serializers/ProjectSerializer.js";

const projectsRouter = new express.Router()

projectsRouter.get("/", async (req, res) => {
    const { id } = req.users
    try {
        const projects = []
        // const projects = Project.query().where() //projects.creatorId === userId
        const serializedProjects = ProjectSerializer.getSummary(projects)
        return res.status(200).json({ projects: serializedProjects })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default projectsRouter