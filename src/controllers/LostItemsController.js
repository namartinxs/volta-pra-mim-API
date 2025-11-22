import LostItem from "../models/LostItemsModel.js";

class LostItemController {
  
    // GET /lost
    static async listLostItem (req,res){
        try{
            const listlostItems = await LostItem.find({});
            res.status(200).json(listlostItems)
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na requisição `})
        }
     
    }

    // GET /lost/:id

    static async listLostItembyId (req,res){
        try{
            const id = req.params.id
            const lostItem = await LostItem.findById(id);
            res.status(200).json(lostItem)
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na requisição `})
        }
    
    }

    // POST /lost
    static async registerlostItem (req,res){
        try{
            const newItem = await LostItem.create(req.body)
            res.status(201).json({message:'Objeto cadastrado com sucesso',item:newItem})

        } catch(error){
            res.status(500).json({message: `${error.message} - falha ao cadastrar`})
        }
    }

    // PUT /lost/:id
    static async updateLostItem (req,res){
        try{
            const id = req.params.id
            await LostItem.findByIdAndUpdate(id,req.body);
            res.status(200).json({message:' item atualizado com sucesso'})
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na atualização `})
        }
    }

    // DELETE /lost/:id
    static async deleteLostItem(req,res){
        try{
            const id = req.params.id
            await LostItem.findByIdAndDelete(id);
            res.status(200).json({message: 'item deletado com sucesso'})

        }catch(error){
            res.status(500).json({message: `${error.message} - falha ao deletar`})
        }
    }
    
};

export default LostItemController