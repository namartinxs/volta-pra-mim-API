import express from 'express'
import LostItems from './lostItemsRoutes.js'
import User from './userRoutes.js'
import Spot from './SpotRoutes.js'

const routes = (app)=>{
    app.route('/').get((req,res)=>res.status(200).send('api achados e perdidos'))
    app.use(express.json(),LostItems,User,Spot);

    
};

export default routes;