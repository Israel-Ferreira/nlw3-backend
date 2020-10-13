import { Request, Response } from 'express'
import { getRepository } from "typeorm";
import Orphanage from "../models/Orphanage";


export default {
    async create(req: Request, res: Response) {
        const orphanage = req.body;

        const orphanagesRepo = await getRepository(Orphanage)


        const newOrphanage = orphanagesRepo.create(orphanage);

        try {
            await orphanagesRepo.save(newOrphanage)
            res.status(201).json(newOrphanage)
        } catch (error) {
            console.log(error)
            res.status(400).json({ errors: error })
        }
    },

    async getAll(req: Request, res : Response){
        const orphanagesRepo = await getRepository(Orphanage)
        const orphanages = await orphanagesRepo.find()
        res.status(200).json(orphanages);
    },

    async getById(req : Request,res : Response) {
        const { id } = req.params;

        const orphanagesRepo = await getRepository(Orphanage)
    
    
        const orphanage = await orphanagesRepo.findOneOrFail(id);
    

        res.json(orphanage)
    }
}