import express from 'express'
import LostItems from './lostItemsRoutes.js'
import User from './userRoutes.js'

const routes = (app)=>{
    app.route('/').get((req,res)=>res.status(200).send('api achados e perdidos'))
    app.use(express.json(),LostItems,User);

    
};

export default routes;