import express from "express"
import SpotController from "../controllers/SpotController.js";


const routes = express.Router()
// GET /user
routes.get('/spot',SpotController.listSpot);
// GET spot:id
routes.get('/spot/:id',SpotController.listSpotbyId);
// POST /spot
routes.post('/spot',SpotController.registerSpot);
// PUT spot:id
routes.put('/spot/:id',SpotController.updateSpot);
// DELETE spot:id
routes.delete('/spot/:id',SpotController.deleteSpot);

export default routes