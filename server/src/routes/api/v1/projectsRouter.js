import express from "express";
import Project from "../../../models/Project.js";
import ProjectSerializer from "../../../serializers/ProjectSerializer.js";
import cleanUserInput from "../../../services/cleanUserInput.js"
import { ValidationError } from "objection";
import CloneVanilla from "../../../services/CloneVanilla.js";


const projectsRouter = new express.Router()

projectsRouter.get("/", async (req, res) => {
    const { id } = req.user
    try {
        const projects = await Project.query().where('creatorId', `${id}`)
        const serializedProjects = await ProjectSerializer.getSummary(projects)
        return res.status(200).json({ projects: serializedProjects })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

projectsRouter.get("/search", async (req, res) => {
    const { id } = req.user
    try {
        const projects = await Project.query().where('creatorId', `${id}`) 
        const serializedProjects = await ProjectSerializer.getSummary(projects)
        return res.status(200).json({ projects: serializedProjects })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

projectsRouter.post("/", async (req, res) => {
    const { body } = req
    const { usePreset } = body
    delete body.usePreset
    const formData = cleanUserInput(body)
    formData.creatorId = req.user.id
    try {
        const newProject = await Project.query().insertAndFetch(formData)
        if(usePreset) {
            CloneVanilla.pokemon(newProject.generation, newProject.id)
        }
        return res.status(201).json({ newProject })
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data })
        }
        return res.status(500).json({ errors: error })
    }
})

export default projectsRouter