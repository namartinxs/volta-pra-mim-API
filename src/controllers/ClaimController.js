import ClaimModel from "../models/ClaimModel.js";

class ClaimController {
  
    // GET /claim
    static async listClaim (req,res){
        try{
            const claim = await ClaimModel.claimItem.find({});
            res.status(200).json(claim)
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na requisição `})
        }
     
    }

    // GET /user:id

    static async listClaimbyId (req,res){
        try{
            const id = req.params.id
            const claim = await ClaimModel.claimItem.findById(id);
            res.status(200).json(claim)
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na requisição `})
        }
    
    }

    // POST /user
    static async registerClaim (req,res){
        try{
            const newClaim = await ClaimModel.claimItem.create(req.body)
            res.status(201).json({message:'cadastrado realizado com sucesso',item:newClaim})

        } catch(error){
            res.status(500).json({message: `${error.message} - falha ao cadastrar`})
        }
    }

    // PUT /user/:id
    static async updateClaim (req,res){
        try{
            const id = req.params.id
            await ClaimModel.claimItem.findByIdAndUpdate(id,req.body);
            res.status(200).json({message:'atualizado com sucesso'})
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na atualização `})
        }
    }

    // DELETE /user/:id
    static async deleteClaim(req,res){
        try{
            const id = req.params.id
            await ClaimModel.claimItem.findByIdAndDelete(id);
            res.status(200).json({message: 'deletado com sucesso'})

        }catch(error){
            res.status(500).json({message: `${error.message} - falha ao deletar`})
        }
    }
    
};

export default ClaimController