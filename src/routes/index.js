import express from 'express'
import LostItems from './lostItemsRoutes.js'
import User from './userRoutes.js'
import Spot from './SpotRoutes.js'
import Claim from './claimRoutes.js'
import Auth from './authRoutes.js'

const routes = (app)=>{
    app.route('/').get((req,res)=>res.status(200).send('api achados e perdidos'))
    app.use(express.json(),LostItems,User,Spot,Claim,Auth);

    
};

export default routes;