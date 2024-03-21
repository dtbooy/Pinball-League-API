import express from "express";
import Player from "../models/playerModel.js";

const playerRoutes = express.Router();

// Get All Players
playerRoutes.get("/", async (req, res) => {
    try {
        const players = await Player.findAll()
        res.status(200).send(players)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

// Get single player
playerRoutes.get("/:id", async (req, res) => {
    try {
        const player = await Player.findByPk(req.params.id)
        if (!player) {
            res.status(404).send({ error: 'Player not found' })
        }
        res.status(200).send(player)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

// Create new Player
playerRoutes.post("/", async (req, res) => {
    try {
        const newPlayer = await Player.create(req.body)
        res.status(201).send(newPlayer)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
});

// Edit Player
playerRoutes.put("/:id", async (req, res) => {
    try {
        const player = await Player.findByPk(req.params.id)
        if (!player) {
            res.status(404).send({ error: 'Player not found' })
        }
        const updatedPlayer = await player.update(req.body)
        res.status(200).send(updatedPlayer)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
});


// delete player
playerRoutes.delete("/:id", async (req, res) => {
    try {
        const player = await Player.findByPk(req.params.id)
        if (!player) {
            res.status(404).send({ error: 'Player not found' })
        }
        await player.destroy()
        res.status(204).send()
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
});

export default playerRoutes