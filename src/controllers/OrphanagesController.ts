import { Request, Response } from 'express'
import { getRepository } from "typeorm";
import Orphanage from "../models/Orphanage";

import * as Yup from 'yup'

import OrphanagesDTO from '../dto/OrphanageDTO'


export default {
    async create(req: Request, res: Response) {
        const orphanage = req.body;

        const orphanagesRepo = await getRepository(Orphanage)

        console.log(req.files);

        const reqImages = req.files as Express.Multer.File[];
        const images = reqImages.map(image => {
            return { path: image.filename }
        })

        const validationSchema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            opening_hours: Yup.string().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        })


        await validationSchema.validate(orphanage,  {abortEarly: false})


        const newOrphanage = orphanagesRepo.create({ ...orphanage, images });


        try {
            await orphanagesRepo.save(newOrphanage)
            res.status(201).json(newOrphanage)
        } catch (error) {
            console.log(error)
            res.status(400).json({ errors: error })
        }
    },

    async getAll(req: Request, res: Response) {
        const orphanagesRepo = await getRepository(Orphanage)
        const orphanages = await orphanagesRepo.find({ relations: ['images'] })
        res.status(200).json(orphanages);
    },

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        const orphanagesRepo = await getRepository(Orphanage)


        const orphanage = await orphanagesRepo.findOneOrFail(id, { relations: ['images'] });


        res.json(OrphanagesDTO.render(orphanage))
    }
}