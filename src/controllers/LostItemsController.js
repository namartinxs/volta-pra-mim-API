import LostItemsModel from "../models/LostItemsModel.js";
import SpotModel from "../models/SpotModel.js";
import UserModel from "../models/UserModel.js";

class LostItemController {
  
    // GET /lost
    static async listLostItem (req,res){
        try{
            const listlostItems = await LostItemsModel.LostItem.find({});
            res.status(200).json(listlostItems)
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na requisição `})
        }
     
    }

    // GET /lost/:id

    static async listLostItembyId (req,res){
        try{
            const id = req.params.id
            const lostItem = await LostItemsModel.LostItem.findById(id);
            res.status(200).json(lostItem)
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na requisição `})
        }
    
    }

    //GET/lost/status !devolvido

    static async listNonReturnItems (req,res){
        try{
            const lostItem = await LostItemsModel.LostItem.find({
            statusItem: {$ne: 'devolvido'}
            
        });
            res.status(200).json(lostItem)
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na requisição `})
        }
    }

    // POST /lost
    static async registerlostItem (req,res){
     try {
        const foundByUser = await UserModel.User.findById(req.body.foundBy);
        const administratorUser = await UserModel.User.findById(req.body.receivedBy);
        const locationFound = await SpotModel.Spot.findById(req.body.locationFound);

        if (!locationFound){
            return res.status(404).json({message: "Localização não encontrada"})
        }

        if (!foundByUser) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
         if ( !administratorUser) {
            return res.status(404).json({ message: "Admin não encontrado" });
        }

        const createdItem = await LostItemsModel.LostItem.create(req.body);

        res.status(201).json({
        message: 'Objeto cadastrado com sucesso',
        item: createdItem
        });
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao cadastrar` });
  }
    }

    // PUT /lost/colleted/:id
    static async updatecollectedBy (req,res){
        try{
            const user = await UserModel.User.findById(req.body.collectedBy);

            if (!user) {
                return res.status(404).json({ message: "Usuário não encontrado" });
        }
            const id = req.params.id
            const updatedItem = await LostItemsModel.LostItem.findByIdAndUpdate(id,{
                collectedBy: req.body.collectedBy,
                statusItem: "devolvido"
            },
            {new:true}
        );
            if(!updatedItem){
                return res.status(404).json({message: `${error.message} -  falha na atualização `})
            }
        
            res.status(200).json({message:' item atualizado com sucesso'})
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na atualização `})
        }
    }

    // PUT /lost/:id
    static async updateLostItem (req,res){
        try{
            const id = req.params.id
            await LostItemsModel.LostItem.findByIdAndUpdate(id,req.body);
            res.status(200).json({message:' item atualizado com sucesso'})
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na atualização `})
        }
    }

    // DELETE /lost/:id
    static async deleteLostItem(req,res){
        try{
            const id = req.params.id
            await LostItemsModel.LostItem.findByIdAndDelete(id);
            res.status(200).json({message: 'item deletado com sucesso'})

        }catch(error){
            res.status(500).json({message: `${error.message} - falha ao deletar`})
        }
    }


    
};

export default LostItemController