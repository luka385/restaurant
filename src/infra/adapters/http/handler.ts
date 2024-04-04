import {Request, Response} from 'express';
import { UseCase } from '../../../application/usecase/usecase';



export const createReservationH = (usecase : UseCase) => async (req: Request, res: Response) => {
    try{
        const {name, date, phone} = req.body;
        const newReservation = await usecase.createReservation({name, date, phone});
        res.status(201).json(newReservation);
    }catch(error){
        res.status(500).json({message : 'Error Reservation Not Created'});
    }
};


export const deleteReservationH = (usecase : UseCase) => async (req: Request, res: Response) => {
    try{
        const id = parseInt(req.params.id);
        await usecase.deleteReservation(id);
        res.status(204).send();
    }catch(error) {
        res.status(500).json({message : 'Error Reservation Not Deleted'});
    }
};

export const getAllReservationH = (usecase : UseCase) => async (req: Request, res: Response) => {
    try{
        const reservaciones = await usecase.getAllReservation();
        res.status(200).json(reservaciones);
    }catch(error) {
        res.status(500).json({message : 'Error Reservation obtained'});
    }
}
