import express from "express";
import Project from "../../../models/Project.js";
import ProjectSerializer from "../../../serializers/ProjectSerializer.js";
import cleanUserInput from "../../../services/cleanUserInput.js"
import { ValidationError } from "objection";


const projectsRouter = new express.Router()

projectsRouter.get("/", async (req, res) => {
    const { id } = req.user
    console.log(id)
    try {
        const projects = await Project.query().where('creatorId', `${id}`) //projects.creatorId === userId
        console.log("projects: ", projects)
        const serializedProjects = await ProjectSerializer.getSummary(projects)
        console.log("serializedProjects", serializedProjects)
        return res.status(200).json({ projects: serializedProjects })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

projectsRouter.get("/search", async (req, res) => {
    const { id } = req.user
    console.log(id)
    try {
        // const projects = []
        const projects = await Project.query() //projects.creatorId === userId
        console.log("projects: ", projects)
        const serializedProjects = await ProjectSerializer.getSummary(projects)
        console.log("serializedProjects", serializedProjects)
        return res.status(200).json({ projects: serializedProjects })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

projectsRouter.post("/", async (req, res) => {
    const { body } = req
    console.log(body)
    const formData = cleanUserInput(body)
    formData.creatorId = req.user.id
    console.log(formData)
    try {
        console.log("hi 1!!")
        const newProject = await Project.query().insertAndFetch(formData)
        console.log("hi 2!!")
        return res.status(201).json({ newProject })
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data })
        }
        return res.status(500).json({ errors: error })
    }
})

export default projectsRouter