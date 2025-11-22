import express from "express"
import ClaimController from "../controllers/ClaimController.js";


const routes = express.Router()
// GET /claim
routes.get('/claim',ClaimController.listClaim);
// GET /claim/:id
routes.get('/claim/:id',ClaimController.listClaimbyId);
// GET /claim-non-approve
routes.get('/claim-non-approve',ClaimController.listNonApproveClaim);
// POST /claim
routes.post('/claim',ClaimController.registerClaim);
// PUT /claim/:id
routes.put('/claim/:id',ClaimController.updateClaim);
//PUT approveClaims
routes.put('/approve-claims/:id',ClaimController.approveClaims)
// DELETE /claim/:id
routes.delete('/claim/:id',ClaimController.deleteClaim);

export default routes