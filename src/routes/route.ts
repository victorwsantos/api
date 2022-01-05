import express from "express";

export class Route{
    route: express.Application

    constructor(){
        this.primary()
    }
    primary(){
        this.route.get('/rota', (req, res)=>{
            res.send('testando modularização')
        })
    }
}