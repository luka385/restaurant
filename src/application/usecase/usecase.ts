import { Reservation } from "../../domain/reservation";
import { ReposirotyRepoPort } from "../ports/reservationRepoPort";

export class UseCase{
    constructor(private repository: ReposirotyRepoPort){}

    async createReservation(reservation: Reservation): Promise<Reservation> {
    try{
        const newReservation = await this.repository.createReservation(reservation);
        return newReservation;         
    } catch(error){
    throw new Error('ERROR RESERVATION NOT CREATE');
    }
}

    async deleteReservation(id: number): Promise<void> {
        try{
            await this.repository.deleteReservation(id);
        }catch(error) {
            throw new Error('ERROR RESERVATION NOT DELETE')
        }
    }

    async getAllReservation(): Promise<Reservation[]>{
        try {
            const reservations = await this.repository.getAllReservation();
            return reservations;
        }catch(error){
            throw new Error('ERROR RESERVATION NOT OBTAINED');
        }
    }

}

