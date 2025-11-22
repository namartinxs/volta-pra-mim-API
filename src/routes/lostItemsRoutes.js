import express from "express"
import LostItemController from "../controllers/LostItemsController.js"


const routes = express.Router()
// GET /lost
routes.get('/lost-items',LostItemController.listLostItem);
// GET /lost/:id
routes.get('/lost-items/:id',LostItemController.listLostItembyId);
// POST /lost
routes.post('/lost-items/',LostItemController.registerlostItem);
// PUT /lost/:id
routes.put('/lost-items/:id',LostItemController.updateLostItem);
// DELETE /lost/:id
routes.delete('/lost-items/:id',LostItemController.deleteLostItem);

export default routes