// cria token e salva nos cookies

import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import UserModel from "../models/UserModel.js"

export const login = async(req,res)=>{
    try{
        const{email,password} = req.body

        // VALIDACAO
        const user = await UserModel.User.findOne({ email})
        if(!user){
            return res.status(404).json({message: 'usuário não encontrado'})

        }

        const validPassword = await bcrypt.compare(password,user.password)

        if(!validPassword){
            return res.status(401).json({message: 'senha inválida'})
        }

        // TOKEN
         // process.env.JWT_SECRET, guarda o token no .env
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES }
        );
        // SALVA NO COOKIES
        res.cookie('token',token,{
            httpOnly: true,
            secure: true,                // OBRIGATÓRIO em produção https
            sameSite: "none",            // Para domínios diferentes
            maxAge: 60 * 60 * 1000   // 1h
        })

        res.status(200).json({message:'login realizado com sucesso'})

    }catch(error){
        console.log(error)
        res.status(500).json({message: 'erro no login'})
    }
}

export const logout = (req, res) => {
  // Remove o cookie do token
  res.clearCookie('token', {
    httpOnly: true,
    secure: true,       
    sameSite: 'none'
  });

  res.status(200).json({ message: 'Logout realizado com sucesso' });
};

export const authValidate  = (req,res)=>{
    const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ valid: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return res.status(200).json({
      valid: true,
      userId: decoded.id
    });

  } catch (err) {
    return res.status(401).json({ valid: false });
  }
};
