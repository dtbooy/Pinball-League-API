import express from "express"
import cors from "cors"
import applyAssociations from "./models/associations.js";
import players from "./controllers/playerRoutes.js";

const app = express()

app.use(cors())
app.use(express.json())

app.use("/players", players)

// setup sequelize 
applyAssociations()

app.get('/', (req, res) => res.send({ info: 'Pinball League API' }))

export default app
