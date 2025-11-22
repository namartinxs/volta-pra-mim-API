import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";


class UserController {
  
    // GET /user
    static async listUsers (req,res){
        try{
            const listUser = await UserModel.User.find({});
            res.status(200).json(listUser)
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na requisição `})
        }
     
    }

    // GET /user:id

    static async listUserbyId (req,res){
        try{
            const id = req.params.id
            const User = await UserModel.User.findById(id);
            res.status(200).json(User)
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na requisição `})
        }
    
    }

    //GET/non-disableUser

    static async listNonDisableUsers (req,res){
    try{
        const listUser = await UserModel.User.find({status:{$ne:'inativo'}});
        res.status(200).json(listUser)
    }catch(error){
        res.status(500).json({message: `${error.message} -  falha na requisição `})
    }
     
    }

    // POST /user
    static async registerUser (req,res){
        try{
            const { email, password } = req.body
          
            const userExist = await UserModel.User.findOne({email})

            if(userExist){
                return res.status(400).json({message:'usário ja cadastrado'})
            }

            const hashedPassword = await bcrypt.hash(password,10)

            const userData = {
                ...req.body,
                password: hashedPassword
            }

            const newUser = await UserModel.User.create(userData)
            res.status(201).json({message:'cadastrado realizado com sucesso',item:newUser})

        } catch(error){
            res.status(500).json({message: `${error.message} - falha ao cadastrar`})
        }
    }

    // PUT /user/:id
    static async updateUser (req,res){
        try{
            const id = req.params.id
            await UserModel.User.findByIdAndUpdate(id,req.body);
            res.status(200).json({message:' usuario atualizado com sucesso'})
        }catch(error){
            res.status(500).json({message: `${error.message} -  falha na atualização `})
        }
    }

    //PUT/user/inativo
    static async disableUser (req,res){
    try{
        const id = req.params.id
        const updatedUser = await UserModel.User.findByIdAndUpdate(id,{
            status:'inativo'
            },{new:true});

        if(!updatedUser){
            return res.status(404).json({message: `${error.message} -  falha na atualização `})
        }

        res.status(200).json({message:' usuario atualizado com sucesso'})
    }catch(error){
        res.status(500).json({message: `${error.message} -  falha na atualização `})
    }
    }

    // DELETE /user/:id
    static async deleteUser(req,res){
        try{
            const id = req.params.id
            await UserModel.User.findByIdAndDelete(id);
            res.status(200).json({message: 'usuario deletado com sucesso'})

        }catch(error){
            res.status(500).json({message: `${error.message} - falha ao deletar`})
        }
    }
    
};

export default UserController