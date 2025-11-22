import SpotModel from "../models/SpotModel.js";


class SpotController {
  
    // GET /spot
    static async listSpot (req,res){
        try{
            const spot = await SpotModel.Spot.find({});
            res.status(200).json(spot)
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na requisição `})
        }
     
    }

    // GET /spot/:id

    static async listSpotbyId (req,res){
        try{
            const id = req.params.id
            const spot = await SpotModel.Spot.findById(id);
            res.status(200).json(spot)
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na requisição `})
        }
    
    }

    // POST /spot
    static async registerSpot (req,res){
        try{
            const newSpot = await SpotModel.Spot.create(req.body)
            res.status(201).json({message:'cadastrado realizado com sucesso',item:newSpot})

        } catch(error){
            res.status(500).json({message: `${error.message} - falha ao cadastrar`})
        }
    }

    // PUT /spot/:id
    static async updateSpot (req,res){
        try{
            const id = req.params.id
            await SpotModel.Spot.findByIdAndUpdate(id,req.body);
            res.status(200).json({message:' spot atualizado com sucesso'})
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na atualização `})
        }
    }

    // DELETE /spot/:id
    static async deleteSpot(req,res){
        try{
            const id = req.params.id
            await SpotModel.Spot.findByIdAndDelete(id);
            res.status(200).json({message: 'spot deletado com sucesso'})

        }catch(error){
            res.status(500).json({message: `${error.message} - falha ao deletar`})
        }
    }
    
};

export default SpotController