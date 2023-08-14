import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import projectsRouter from "./api/v1/projectsRouter.js";
import pokemonRouter from "./api/v1/pokemonRouter.js";
const rootRouter = new express.Router();

//place your server-side routes here
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/projects", projectsRouter)
rootRouter.use("/api/v1/pokemon", pokemonRouter)

export default rootRouter;
