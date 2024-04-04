import { Reservation } from "../../domain/reservation";

//Creating PORTS
export interface ReposirotyRepoPort{
// the function Createreservation wait Reservation & return(promise) Reservation 
    createReservation(reservation : Reservation): Promise<Reservation>;
// the function DeleteReservation wait ID & return(promise) Nothing 
    deleteReservation(id: number): Promise<void>;   
// the function DeleteReservation wait nothing & return(promise) Array of Reservation 
    getAllReservation(): Promise<Reservation[]>;
}