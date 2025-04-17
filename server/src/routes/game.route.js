import express from "express";
import { buyProp, createGame, endTurn, joinGame, rollDice, startGame } from "../controllers/game.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create", protectRoute, createGame);
router.post("/join/:code", protectRoute, joinGame);
router.post("/start/:code", protectRoute, startGame);
router.post("/:code/roll", protectRoute, rollDice);
router.post("/:code/endTurn", protectRoute, endTurn);
router.post("/:code/buy", protectRoute, buyProp);
export default router;